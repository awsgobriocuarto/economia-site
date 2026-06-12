import React, { useState, useEffect, useRef, useMemo } from "react";

const lugares = [
  { nombre: "CES",                          dir: "Gral. Paz 767",                    lat: -33.1237988,  lng: -64.352982   },
  { nombre: "Centro de Cobranzas TYP",      dir: "Buenos Aires 1698",                lat: -33.1196158,  lng: -64.3690751  },
  { nombre: "Ctro. de Cobro Maipú",         dir: "Maipú 1629",                       lat: -33.13048668, lng: -64.3620046  },
  { nombre: "Santi David Fernando",         dir: "San Martín 755",                   lat: -33.12157365, lng: -64.35585647 },
  { nombre: "Carpinetti Emanuel",           dir: "Gdor. Guzmán 1010",                lat: -33.1195355,  lng: -64.35804938 },
  { nombre: "Martínez Ricardo",             dir: "Olegario Víctor Andrade 805",      lat: -33.13639372, lng: -64.33018165 },
  { nombre: "RP Pedernera",                 dir: "Pedernera 82",                     lat: -33.12891804, lng: -64.34928226 },
  { nombre: "Seguros - Pagos",              dir: "Poeta Rafael Obligado 691",        lat: -33.13802225, lng: -64.33294951 },
  { nombre: "Pagos - Liderar",              dir: "Gral. José de San Martín 556",     lat: -33.09912479, lng: -64.34196947 },
  { nombre: "Rapipago Rio IV",              dir: "Buenos Aires 561",                 lat: -33.1231197,  lng: -64.35423225 },
  { nombre: "Prystupa Alejandro Gabriel",   dir: "Las Heras 909",                    lat: -33.12760767, lng: -64.33984327 },
  { nombre: "Gauna Andrea Paola",           dir: "España 71",                        lat: -33.11821815, lng: -64.34805409 },
  { nombre: "Santi David Fernando",         dir: "Cabrera 1313",                     lat: -33.12916475, lng: -64.35328424 },
  { nombre: "Pagos - Mitre",                dir: "Mitre 1276",                       lat: -33.12837989, lng: -64.35426692 },
  { nombre: "Rapipago JC Rio Cuarto",       dir: "Pres. Juárez Celman 1185",         lat: -33.14058689, lng: -64.37137036 },
  { nombre: "Pesce María Belén",            dir: "Suipacha 202",                     lat: -33.1357709,  lng: -64.3551026  },
  { nombre: "Pagos Miller R4",              dir: "Rioja 2440",                       lat: -33.12074811, lng: -64.38170242 },
  { nombre: "Viale Pagos R4",               dir: "Avda. Pres. Perón Oeste 1223",     lat: -33.13180262, lng: -64.36598517 },
  { nombre: "Tuset Rio IV",                 dir: "Pje. Santiago Drago 3424",         lat: -33.15145965, lng: -64.37378311 },
  { nombre: "Rodríguez Fernando Daniel",    dir: "Pérez Bulnes 1935",                lat: -33.1265693,  lng: -64.37552874 },
  { nombre: "Santi David Fernando",         dir: "Avda. Dr. Amadeo Sabattini 2176",  lat: -33.13833315, lng: -64.35453741 },
  { nombre: "Polirubro Emmanuel",           dir: "Belisario Roldán 711",             lat: -33.13903505, lng: -64.33614592 },
  { nombre: "Avant S.A.",                   dir: "Ruta Nacional A005 Km. 1",         lat: -33.0924144,  lng: -64.3560364  },
  { nombre: "Rapipago Católica",            dir: "Isabel Católica 132",              lat: -33.1070312,  lng: -64.34130071 },
  { nombre: "Alarcón Flores María Isabel",  dir: "Tres Acequias 1",                  lat: -33.029954,   lng: -64.429324   }
];

export default function MediosPagoMap() {
  const [mounted, setMounted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const mapRef = useRef(null);
  const markersLayerRef = useRef(null);
  const customIconRef = useRef(null);
  const markersMapRef = useRef(new Map());

  // Indicar que se montó en el cliente
  useEffect(() => {
    setMounted(true);
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Filtrado de lugares
  const filteredLugares = useMemo(() => {
    if (!searchTerm.trim()) return lugares;
    const query = searchTerm.toLowerCase();
    return lugares.filter(
      (l) =>
        l.nombre.toLowerCase().includes(query) ||
        l.dir.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  // Carga e inicialización de Leaflet
  useEffect(() => {
    if (!mounted) return;

    let leafletScript;
    let leafletCSS;

    const initLeafletMap = () => {
      if (!window.L || mapRef.current) return;

      // Crear instancia de mapa
      const map = window.L.map("map-element", {
        center: [-33.13, -64.35],
        zoom: 13,
        zoomControl: false,
      });

      // Capa base de OpenStreetMap
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Agregar control de zoom abajo a la derecha
      window.L.control.zoom({ position: "bottomright" }).addTo(map);

      // Icono personalizado billetera SVG
      const walletHTML = `
        <div class="pay-marker">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="6" width="20" height="13" rx="2.5" stroke="white" stroke-width="2"/>
            <path d="M2 10h20" stroke="white" stroke-width="2"/>
            <circle cx="17" cy="15" r="1.5" fill="white"/>
          </svg>
        </div>`;

      customIconRef.current = window.L.divIcon({
        className: "",
        iconSize: [34, 40],
        iconAnchor: [17, 40],
        popupAnchor: [0, -44],
        tooltipAnchor: [17, -30],
        html: walletHTML,
      });

      // Crear grupo de capas para marcadores
      markersLayerRef.current = window.L.layerGroup().addTo(map);
      mapRef.current = map;
      setMapLoaded(true);
    };

    if (window.L) {
      initLeafletMap();
    } else {
      // Inyectar CSS si no existe
      if (!document.getElementById("leaflet-css")) {
        leafletCSS = document.createElement("link");
        leafletCSS.id = "leaflet-css";
        leafletCSS.rel = "stylesheet";
        leafletCSS.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(leafletCSS);
      }

      // Inyectar JS
      leafletScript = document.createElement("script");
      leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      leafletScript.async = true;
      leafletScript.onload = initLeafletMap;
      document.body.appendChild(leafletScript);
    }
  }, [mounted]);

  // Actualizar marcadores en base al filtro
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !markersLayerRef.current || !window.L) return;

    // Limpiar marcadores anteriores del LayerGroup y del mapa de referencias
    markersLayerRef.current.clearLayers();
    markersMapRef.current.clear();

    const bounds = [];

    filteredLugares.forEach((l, index) => {
      const popupHTML = `
        <div class="popup-top"></div>
        <div class="popup-inner">
          <h3>${l.nombre}</h3>
          <div class="addr">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style="margin-top: 2px;">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#009DE0"/>
              <circle cx="12" cy="9" r="2.5" fill="white"/>
            </svg>
            <span>${l.dir} &nbsp;·&nbsp; Río Cuarto</span>
          </div>
        </div>`;

      const marker = window.L.marker([l.lat, l.lng], { icon: customIconRef.current })
        .bindPopup(popupHTML, { maxWidth: 260, closeButton: false })
        .bindTooltip(l.nombre, { permanent: false, direction: "top", offset: [0, -42] });

      // Eventos del marcador
      marker.on("popupopen", () => {
        setActiveItem(l.nombre + l.dir);
      });
      marker.on("popupclose", () => {
        setActiveItem(null);
      });

      markersLayerRef.current.addLayer(marker);
      markersMapRef.current.set(l.nombre + l.dir, marker);

      bounds.push([l.lat, l.lng]);
    });

    // Ajustar vista a los marcadores fitBounds si no se está escribiendo activamente
    if (bounds.length > 0 && !searchTerm.trim()) {
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [filteredLugares, mapLoaded, searchTerm]);

  // Manejar click en la lista
  const handleItemClick = (l) => {
    const key = l.nombre + l.dir;
    const marker = markersMapRef.current.get(key);
    if (marker && mapRef.current) {
      mapRef.current.setView([l.lat, l.lng], 16);
      marker.openPopup();
      setActiveItem(key);
    }
  };

  if (!mounted) {
    return (
      <div className="map-placeholder d-flex align-items-center justify-content-center bg-light border rounded" style={{ height: "500px" }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-2" role="status">
            <span className="visually-hidden">Cargando mapa...</span>
          </div>
          <p className="text-muted mb-0">Cargando mapa interactivo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="map-widget-container my-5 shadow-sm rounded-lg overflow-hidden border">
      <div className="row g-0">
        {/* Panel de Búsqueda y Lista */}
        <div className="col-lg-4 col-md-5 d-flex flex-column bg-white border-end" style={{ height: "550px" }}>
          <div className="p-3 border-bottom bg-light">
            <h5 className="font-weight-bold text-dark mb-2">Puntos de Pago</h5>
            <p className="small text-muted mb-3">Buscá tu punto de pago presencial más cercano.</p>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="fas fa-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                placeholder="Buscar por nombre o dirección..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="mt-2 d-flex justify-content-between align-items-center">
              <span className="badge bg-secondary text-white rounded-pill px-3 py-1 font-weight-normal">
                {filteredLugares.length} {filteredLugares.length === 1 ? "punto" : "puntos"}
              </span>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="btn btn-link btn-sm text-decoration-none p-0 text-muted"
                >
                  Limpiar búsqueda
                </button>
              )}
            </div>
          </div>

          <div className="flex-grow-1 overflow-auto custom-scrollbar list-group list-group-flush">
            {filteredLugares.length > 0 ? (
              filteredLugares.map((l) => {
                const key = l.nombre + l.dir;
                const isActive = activeItem === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleItemClick(l)}
                    className={`list-group-item list-group-item-action border-bottom p-3 text-start d-flex justify-content-between align-items-center transition-all ${
                      isActive ? "bg-light-blue border-start border-primary border-4" : ""
                    }`}
                    style={{ borderLeft: isActive ? "4px solid #009DE0 !important" : "none" }}
                  >
                    <div>
                      <h6 className={`mb-1 font-weight-bold ${isActive ? "text-primary" : "text-dark"}`}>
                        {l.nombre}
                      </h6>
                      <div className="small text-muted d-flex align-items-center">
                        <i className="fas fa-map-marker-alt text-secondary me-2"></i>
                        {l.dir}
                      </div>
                    </div>
                    <i className={`fas fa-chevron-right small text-muted transition-all ${isActive ? "text-primary transform-translate-x" : ""}`}></i>
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-muted">
                <i className="fas fa-map-marked-alt fa-2x mb-3 text-muted opacity-50"></i>
                <p className="mb-0">No se encontraron puntos de pago habilitados para tu búsqueda.</p>
              </div>
            )}
          </div>
        </div>

        {/* Mapa */}
        <div className="col-lg-8 col-md-7 position-relative" style={{ height: "550px" }}>
          {/* Badge de estado flotante */}
          <div className="map-badge-widget shadow-sm d-flex align-items-center">
            <span className="badge-dot-widget animate-pulse"></span>
            <span>Habilitados para pago en efectivo</span>
          </div>

          <div id="map-element" className="w-100 h-100"></div>
        </div>
      </div>

      <style jsx global>{`
        /* --- ESTILOS DE LEAFLET & WIDGET MAPA --- */
        .map-badge-widget {
          position: absolute;
          top: 15px;
          left: 15px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 157, 224, 0.25);
          border-radius: 30px;
          padding: 6px 14px 6px 10px;
          font-size: 11.5px;
          font-weight: 600;
          color: #009DE0;
          gap: 7px;
          pointer-events: none;
        }

        .badge-dot-widget {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #009DE0;
          display: inline-block;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.4);
          }
        }

        /* Marcador SVG */
        .pay-marker {
          width: 34px;
          height: 34px;
          background: #009DE0;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(0, 157, 224, 0.55), 0 1px 4px rgba(0, 0, 0, 0.25);
          border: 2px solid rgba(255, 255, 255, 0.8);
        }

        .pay-marker svg {
          transform: rotate(45deg);
          width: 16px;
          height: 16px;
        }

        /* Estilo del Popup */
        .leaflet-popup-content-wrapper {
          background: #fff !important;
          border: none !important;
          border-radius: 14px !important;
          padding: 0 !important;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08), 0 12px 32px rgba(0, 0, 0, 0.14) !important;
        }

        .leaflet-popup-tip {
          background: #fff !important;
        }

        .leaflet-popup-content {
          margin: 0 !important;
          width: 240px !important;
        }

        .popup-top {
          height: 5px;
          background: linear-gradient(90deg, #009DE0, #007ab8);
        }

        .popup-inner {
          padding: 13px 15px 15px;
        }

        .popup-inner h3 {
          font-size: 13.5px;
          font-weight: 700;
          color: #111827;
          margin-bottom: 7px;
          line-height: 1.35;
        }

        .popup-inner .addr {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          font-size: 12px;
          color: #6b7280;
          line-height: 1.45;
        }

        /* Tooltip */
        .leaflet-tooltip {
          background: rgba(17, 24, 39, 0.88) !important;
          border: none !important;
          color: #fff !important;
          font-family: "Inter", sans-serif !important;
          font-size: 11.5px !important;
          font-weight: 500 !important;
          border-radius: 7px !important;
          padding: 5px 10px !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3) !important;
        }

        .leaflet-tooltip::before {
          display: none !important;
        }

        /* Control Zoom */
        .leaflet-control-zoom {
          border: none !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12) !important;
          border-radius: 10px !important;
          overflow: hidden;
        }

        .leaflet-control-zoom a {
          color: #374151 !important;
          background: rgba(255, 255, 255, 0.95) !important;
          font-weight: 500 !important;
        }

        .leaflet-control-zoom a:hover {
          color: #009DE0 !important;
          background: #f0f9ff !important;
        }

        /* Scrollbar personalizado */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #999;
        }

        /* Efectos interactivos */
        .bg-light-blue {
          background-color: rgba(0, 157, 224, 0.05);
        }

        .transition-all {
          transition: all 0.2s ease-in-out;
        }

        .transform-translate-x {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}
