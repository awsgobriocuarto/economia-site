import React from "react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="row g-4">

            {/* Columna Institución */}
            <div className="col-md-4">
              <div className="footer-brand">
                {/* eslint-disable-next-line */}
                <img
                  src="/images/logo-economia-ok.png"
                  alt="Secretaría de Economía"
                  style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '16px', opacity: 0.9 }}
                />
                <p>Secretaría de Economía e Innovación</p>
                <p>Municipalidad de Río Cuarto</p>
                <p>Constitución 988, Río Cuarto, Córdoba</p>
              </div>
            </div>

            {/* Columna Contacto */}
            <div className="col-md-4">
              <h6>Contacto</h6>
              <a href="tel:08004445454" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-phone-alt"></i>
                0800 444 5454 (opción 3)
              </a>
              <a href="https://wa.me/+5493584121879" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
                +54 9 358 412-1879
              </a>
              <a href="https://wa.me/+5493585148212" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
                +54 9 358 514-8212
              </a>
              <span style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '4px', display: 'block' }}>
                Lun a Vie de 7:30 a 13:00 hs.
              </span>
            </div>

            {/* Columna Seguinos */}
            <div className="col-md-4">
              <h6>Seguinos</h6>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, marginBottom: '16px' }}>
                Enterate de todas las novedades en nuestras redes sociales.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/economiarioiv" target="_blank" rel="noreferrer noopener" title="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/economiariocuarto/" target="_blank" rel="noreferrer noopener" title="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/pabloantonetti" target="_blank" rel="noreferrer noopener" title="Twitter/X">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>
            &copy; {year} Municipalidad de Río Cuarto — Secretaría de Economía e Innovación.
            Subsecretaría de Innovación.
          </span>
        </div>
      </div>
    </footer>
  );
}
