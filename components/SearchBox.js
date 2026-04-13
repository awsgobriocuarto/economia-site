import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// =============================================
// ÍNDICE ESTÁTICO — Secciones, trámites y páginas internas
// =============================================
const STATIC_INDEX = [
  // Secciones internas
  { type: 'seccion', title: 'Inicio', description: 'Página principal de Economía', url: '/', icon: 'fa-home' },
  { type: 'seccion', title: 'Institucional', description: 'Autoridades y estructura de la Secretaría de Economía', url: '/institucional', icon: 'fa-university' },
  { type: 'seccion', title: 'Pagos y Deudas', description: 'Consultá y pagá tus deudas municipales', url: '/pagos-y-deudas', icon: 'fa-credit-card' },
  { type: 'seccion', title: 'Trámites y Servicios', description: 'Catálogo completo de trámites digitales', url: '/tramites-y-servicios', icon: 'fa-tasks' },
  { type: 'seccion', title: 'Transparencia', description: 'Información pública y rendición de cuentas', url: '/transparencia', icon: 'fa-eye' },
  { type: 'seccion', title: 'Legislación', description: 'Ordenanzas, decretos y normativas municipales', url: '/legislacion', icon: 'fa-gavel' },
  { type: 'seccion', title: 'Noticias', description: 'Últimas novedades de la Secretaría', url: '/noticias', icon: 'fa-newspaper' },
  { type: 'seccion', title: 'Estadísticas', description: 'Datos y estadísticas de gestión municipal', url: '/estadisticas', icon: 'fa-chart-bar' },
  { type: 'seccion', title: 'ODS - Desarrollo Sostenible', description: 'Objetivos de Desarrollo Sostenible - Agenda 2030', url: '/ods', icon: 'fa-leaf' },

  // Trámites frecuentes (externos)
  { type: 'tramite', title: 'Licencia de Conducir', description: 'Renovación y obtención de licencia de conducir', url: 'https://tramites.riocuarto.gov.ar/tramite/6/licencia-de-conducir', external: true, icon: 'fa-id-card' },
  { type: 'tramite', title: 'Impresión de Cedulones', description: 'Imprimí tu cedulón de pago de tasas municipales', url: 'https://economia.riocuarto.gov.ar/', external: true, icon: 'fa-print' },
  { type: 'tramite', title: 'Libre Deuda Municipal', description: 'Certificado de libre deuda de multas y tránsito', url: 'https://tramites.riocuarto.gov.ar/tramite/49/libre-deuda-de-multas-personales-y-de-transito', external: true, icon: 'fa-file-invoice' },
  { type: 'tramite', title: 'Turnos Online', description: 'Solicitá turno para atención presencial', url: 'https://turnos.riocuarto.gov.ar/', external: true, icon: 'fa-calendar-check' },
  { type: 'tramite', title: 'Habilitación Comercial', description: 'Habilitación de comercio clase I, II y III', url: 'https://tramites.riocuarto.gov.ar/tramite/10/habilitacion-comercial-clase-i-ii-y-iii', external: true, icon: 'fa-store' },
  { type: 'tramite', title: 'Consulta de Expedientes', description: 'Consultá el estado de tu expediente municipal', url: 'https://tramites.riocuarto.gov.ar/tramite/11/consulta-de-expedientes', external: true, icon: 'fa-search' },
  { type: 'tramite', title: 'Baja de Automotores', description: 'Baja de vehículos del padrón municipal', url: 'https://tramites.riocuarto.gov.ar/tramite/2/baja-de-automotores', external: true, icon: 'fa-car' },
  { type: 'tramite', title: 'Plan de Pagos', description: 'Regularizá tu deuda municipal en cuotas', url: 'https://economia.riocuarto.gov.ar/', external: true, icon: 'fa-hand-holding-usd' },
  { type: 'tramite', title: 'Catastro y Obras Privadas', description: 'Aprobación de planos de obra privada', url: 'https://tramites.riocuarto.gov.ar/tramite/1/aprobacion-de-planos-de-obra-privada', external: true, icon: 'fa-building' },
  { type: 'tramite', title: 'Domicilio Tributario Electrónico', description: 'Adherite al CIDI para recibir notificaciones oficiales', url: 'http://cidi.riocuarto.gov.ar/', external: true, icon: 'fa-envelope-open-text' },
  { type: 'tramite', title: 'Compras Web', description: 'Plataforma de compras y licitaciones públicas', url: 'https://comprasweb.economiariocuarto.gob.ar/', external: true, icon: 'fa-shopping-cart' },
  { type: 'tramite', title: 'Atención WhatsApp', description: 'Consultá al equipo por WhatsApp', url: 'https://wa.me/+5493584121879', external: true, icon: 'fa-whatsapp' },

  // Contacto
  { type: 'contacto', title: 'Teléfono 0800 444 5454', description: 'Línea gratuita de atención al vecino', url: 'tel:08004445454', external: true, icon: 'fa-phone-alt' },
  { type: 'contacto', title: 'Dirección: Constitución 988', description: 'Oficinas de la Secretaría de Economía, Río Cuarto', url: 'https://goo.gl/maps/tu-link-aqui', external: true, icon: 'fa-map-marker-alt' },
];

// Etiquetas visibles por tipo
const TYPE_LABELS = {
  seccion: { label: 'Sección', color: '#0080C8' },
  tramite: { label: 'Trámite', color: '#E8651A' },
  contacto: { label: 'Contacto', color: '#4eba74' },
  noticia: { label: 'Noticia', color: '#6c757d' },
};

// =============================================
// FUNCIÓN DE BÚSQUEDA
// =============================================
function searchItems(query, items) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  return items
    .map((item) => {
      const hay = `${item.title} ${item.description || ''}`.toLowerCase();
      const exactMatch = hay.includes(q);
      const wordMatches = words.filter((w) => hay.includes(w)).length;
      const score = (exactMatch ? 10 : 0) + wordMatches * 2 + (hay.startsWith(q) ? 5 : 0);
      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

// =============================================
// COMPONENTE SearchBox
// =============================================
const SearchBox = ({ overlay }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [allItems, setAllItems] = useState(STATIC_INDEX);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  // Carga noticias desde la API al montar el componente
  useEffect(() => {
    setLoadingPosts(true);
    fetch('https://contenidos.gobiernoriocuarto.gob.ar/api/v1/posts?limit=50', {
      headers: { 'Portal-Id': 3 },
    })
      .then((r) => r.json())
      .then((data) => {
        const posts = (data?.data || []).map((p) => ({
          type: 'noticia',
          title: p.title,
          description: p.excerpt || '',
          url: `/noticias/${p.slug}?id=${p.id}`,
          external: false,
          icon: 'fa-newspaper',
        }));
        setAllItems([...STATIC_INDEX, ...posts]);
      })
      .catch(() => {})
      .finally(() => setLoadingPosts(false));
  }, []);

  // Busca cuando cambia el query
  useEffect(() => {
    if (query.trim().length >= 2) {
      const found = searchItems(query, allItems);
      setResults(found);
      setIsOpen(found.length > 0);
      setActiveIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }, [query, allItems]);

  // Cierra al hacer clic fuera
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
      inputRef.current?.blur();
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      navigateTo(results[activeIndex]);
    }
  };

  const navigateTo = (item) => {
    setIsOpen(false);
    setQuery('');
    if (item.external) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = item.url;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeIndex >= 0 && results[activeIndex]) {
      navigateTo(results[activeIndex]);
    } else if (results.length > 0) {
      navigateTo(results[0]);
    }
  };

  const typeBadge = (type) => {
    const t = TYPE_LABELS[type] || { label: type, color: '#999' };
    return (
      <span
        className="sb-badge"
        style={{ background: t.color }}
      >
        {t.label}
      </span>
    );
  };

  return (
    <div
      className={overlay ? 'search-box-overlay' : 'search-box-portal pt-4 pb-2 mb-4'}
      ref={containerRef}
    >
      <div className="container">
        <div className="sb-wrapper">
          <form onSubmit={handleSubmit} className="d-flex w-100" autoComplete="off">
            <div className="sb-input-wrapper flex-grow-1 position-relative">
              <input
                ref={inputRef}
                id="search-input-main"
                type="text"
                className="form-control sb-input"
                placeholder="¿Qué estas buscando? (ej: Carnet, Cedulón, Habilitación)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => results.length > 0 && setIsOpen(true)}
                aria-autocomplete="list"
                aria-controls="sb-results"
                aria-expanded={isOpen}
              />
              {query && (
                <button
                  type="button"
                  className="sb-clear-btn"
                  onClick={() => { setQuery(''); setResults([]); setIsOpen(false); inputRef.current?.focus(); }}
                  aria-label="Limpiar búsqueda"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
            <button type="submit" className="btn btn-info sb-btn" id="btn-buscar">
              Buscar
            </button>
          </form>

          {/* DROPDOWN DE RESULTADOS */}
          {isOpen && results.length > 0 && (
            <div className="sb-dropdown" id="sb-results" role="listbox" ref={dropdownRef}>
              <div className="sb-dropdown-header">
                <span>{results.length} resultado{results.length !== 1 ? 's' : ''} para "<strong>{query}</strong>"</span>
              </div>
              <ul className="sb-list">
                {results.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  const inner = (
                    <li
                      key={idx}
                      className={`sb-item${isActive ? ' sb-item--active' : ''}`}
                      role="option"
                      aria-selected={isActive}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => navigateTo(item)}
                    >
                      <div className="sb-item-icon" style={{ background: `${TYPE_LABELS[item.type]?.color}18`, color: TYPE_LABELS[item.type]?.color }}>
                        <i className={`fas fa-fw ${item.icon || 'fa-link'}`}></i>
                      </div>
                      <div className="sb-item-body">
                        <div className="sb-item-title">
                          {item.title}
                          {item.external && <i className="fas fa-external-link-alt sb-ext-icon"></i>}
                        </div>
                        {item.description && (
                          <div className="sb-item-desc">{item.description.slice(0, 80)}{item.description.length > 80 ? '…' : ''}</div>
                        )}
                      </div>
                      <div className="sb-item-meta">
                        {typeBadge(item.type)}
                        {isActive && <i className="fas fa-arrow-right sb-arrow"></i>}
                      </div>
                    </li>
                  );
                  return inner;
                })}
              </ul>
              <div className="sb-dropdown-footer">
                <i className="fas fa-keyboard me-1"></i>
                Usa ↑↓ para navegar · Enter para abrir · Esc para cerrar
              </div>
            </div>
          )}

          {/* Sin resultados */}
          {isOpen && results.length === 0 && query.length >= 2 && (
            <div className="sb-dropdown">
              <div className="sb-no-results">
                <i className="fas fa-search-minus"></i>
                <p>No se encontraron resultados para "<strong>{query}</strong>"</p>
                <span>Intentá buscar: trámites, pagos, noticias, licencia...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
