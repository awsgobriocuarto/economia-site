import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function RedLinkModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Solo mostrar dentro del rango de fechas: 24/07/2026 al 29/07/2026
    const now = new Date();
    const start = new Date("2026-07-24T00:00:00-03:00");
    const end = new Date("2026-07-29T23:59:59-03:00");

    if (now >= start && now <= end) {
      const shown = sessionStorage.getItem("redlink_interrupcion_popup_shown");
      if (!shown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 1200); // Aparece levemente después del PromoModal
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("redlink_interrupcion_popup_shown", "true");
  };

  const handleMoreInfo = () => {
    handleClose();
    router.push("/medios-de-pago");
  };

  if (!isOpen) return null;

  return (
    <div className="promo-modal-overlay" onClick={handleClose}>
      <div
        className="promo-modal-container redlink-modal animate__animated animate__fadeInUp animate__faster"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar en esquina superior derecha */}
        <button className="promo-modal-close" onClick={handleClose} aria-label="Cerrar modal">
          <i className="fas fa-times"></i>
        </button>

        {/* Cabecera del modal — Estilo alerta */}
        <div className="promo-modal-header-banner redlink-header-banner">

          {/* Ícono de advertencia central */}
          <div className="redlink-alert-icon-wrapper">
            <div className="redlink-alert-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <div className="redlink-brand-icon">
              <i className="fas fa-university"></i>
            </div>
          </div>

          <div className="banner-main-title redlink-banner-title">
            Interrupción <span className="highlight">Red Link</span>
          </div>
        </div>

        {/* Cuerpo del modal */}
        <div className="promo-modal-body text-center text-md-start">
          <span className="info-tag-badge bg-light-orange text-primary mb-2 d-inline-block redlink-badge">
            <i className="fas fa-bell me-1"></i> Atención
          </span>

          <h3 className="modal-title-heading text-dark font-weight-bold mb-2">
            Servicio Red Link temporalmente interrumpido
          </h3>

          <p className="modal-subtitle-text font-weight-bold text-secondary mb-3">
            Del viernes 24 al miércoles 29 de julio de 2026
          </p>

          <p className="modal-desc-paragraph text-muted mb-4">
            Se informa que el servicio de cobro a través de <strong>Red Link</strong> se
            verá interrumpido desde el <strong>viernes 24 de julio</strong> hasta el
            próximo <strong>miércoles 29 de julio de 2026</strong>, debido a tareas de
            mejoras en la plataforma.
          </p>

          {/* Aviso medios alternativos */}
          <div className="channels-mini-list">
            <div className="channel-mini-item">
              <div className="channel-mini-icon web">
                <i className="fas fa-credit-card"></i>
              </div>
              <div className="channel-mini-content text-start">
                <strong>Medios alternativos disponibles:</strong> Podrá abonar sus
                contribuciones con los restantes medios de pago habilitados durante
                este período.
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

