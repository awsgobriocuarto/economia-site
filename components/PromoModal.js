import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Comprobar si ya se mostró en esta sesión de navegación
    const shown = sessionStorage.getItem("digitalizacion_popup_shown");
    if (!shown) {
      // Pequeño retardo (800ms) para una carga más fluida
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("digitalizacion_popup_shown", "true");
  };

  const handleMoreInfo = () => {
    handleClose();
    router.push("/medios-de-pago");
  };

  if (!isOpen) return null;

  return (
    <div className="promo-modal-overlay" onClick={handleClose}>
      <div 
        className="promo-modal-container animate__animated animate__fadeInUp animate__faster"
        onClick={(e) => e.stopPropagation()} // Detiene la propagación para evitar cerrar al hacer click dentro
      >
        {/* Botón Cerrar en esquina superior derecha */}
        <button className="promo-modal-close" onClick={handleClose} aria-label="Cerrar modal">
          <i className="fas fa-times"></i>
        </button>

        {/* Cabecera del modal (Banner de Trámites con Notebook) */}
        <div className="promo-modal-header-banner">
          <div className="banner-badge shadow-sm">
            economiariocuarto.gob.ar
          </div>
          <div className="banner-main-title">
            Ahora tus trámites son <span className="highlight">+fáciles</span>
          </div>

          {/* Notebook Mockup en CSS */}
          <div className="notebook-mockup-container">
            <div className="notebook-screen shadow">
              <div className="notebook-screen-inner">
                {/* Header del mockup */}
                <div className="mockup-header-bar d-flex justify-content-between align-items-center">
                  <span className="mockup-brand font-weight-bold">Río Cuarto Economía</span>
                  <div className="mockup-dots d-flex gap-1">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                {/* Título en pantalla */}
                <div className="mockup-screen-title">PAGOS Y DEUDAS</div>
                {/* Rejilla de botones en la pantalla */}
                <div className="mockup-screen-grid">
                  <div className="mockup-grid-item"><i className="fas fa-car me-1 text-secondary"></i> Patentes</div>
                  <div className="mockup-grid-item"><i className="fas fa-home me-1 text-secondary"></i> Inmobiliario</div>
                  <div className="mockup-grid-item"><i className="fas fa-briefcase me-1 text-secondary"></i> Comercio</div>
                  <div className="mockup-grid-item"><i className="fas fa-file-invoice-dollar me-1 text-secondary"></i> Planes</div>
                </div>
              </div>
            </div>
            <div className="notebook-base shadow-sm">
              <div className="notebook-base-notch"></div>
            </div>
          </div>
        </div>

        {/* Cuerpo del modal */}
        <div className="promo-modal-body text-center text-md-start">
          <span className="info-tag-badge bg-light-orange text-primary mb-2 d-inline-block">
            Digitalización de Cajas
          </span>
          <h3 className="modal-title-heading text-dark font-weight-bold mb-2">
            A partir del 1 de julio, las cajas municipales se digitalizan por completo
          </h3>
          <p className="modal-subtitle-text font-weight-bold text-secondary mb-3">
            ¡Más opciones y beneficios digitales!
          </p>
          <p className="modal-desc-paragraph text-muted mb-4">
            Elegí tu medio de pago y aprovechá las promociones vigentes. Recordá que ya no se recibirá efectivo en cajas del Palacio Municipal.
          </p>

          {/* Canales de Pago Resumidos */}
          <div className="channels-mini-list">
            {/* Canal 1 */}
            <div className="channel-mini-item">
              <div className="channel-mini-icon web">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="channel-mini-content text-start">
                <strong>Desde la web:</strong> Cordobesa (6 cuotas), Naranja (Z y 6 cuotas), Visa/Master (3 cuotas).
              </div>
            </div>

            {/* Canal 2 */}
            <div className="channel-mini-item my-3">
              <div className="channel-mini-icon presencial">
                <i className="fas fa-user-friends"></i>
              </div>
              <div className="channel-mini-content text-start">
                <strong>Presenciales:</strong> Cordobesa en 6 cuotas y Naranja en Plan Z.
              </div>
            </div>

            {/* Canal 3 */}
            <div className="channel-mini-item">
              <div className="channel-mini-icon efectivo">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <div className="channel-mini-content text-start">
                <strong>Efectivo:</strong> Habilitado en CES, Rapipago y Cobro Express.
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="promo-modal-footer d-flex justify-content-end align-items-center bg-light p-3 border-top gap-2">
          <button 
            className="btn btn-outline-secondary px-4 font-weight-bold" 
            onClick={handleClose}
            type="button"
          >
            Cerrar
          </button>
          <button 
            className="btn btn-primary px-4 btn-mas-info d-flex align-items-center gap-2 font-weight-bold shadow-sm"
            onClick={handleMoreInfo}
            type="button"
          >
            Más Info <i className="fas fa-arrow-right small"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
