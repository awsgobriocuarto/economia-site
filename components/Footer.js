import React from "react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="row g-4 justify-content-center text-center">

            {/* Columna Institución - Centrada y única */}
            <div className="col-md-8">
              <div className="footer-brand">
                {/* eslint-disable-next-line */}
                <img
                  src="/images/logo-economia-ok.png"
                  alt="Secretaría de Economía"
                  style={{ height: '56px', width: 'auto', filter: 'brightness(0) invert(1)', marginBottom: '16px', opacity: 0.9 }}
                />
                <p className="mb-1">Secretaría de Economía e Innovación</p>
                <p className="mb-1">Municipalidad de Río Cuarto</p>
                <p className="mb-0" style={{ opacity: 0.7 }}>Constitución 988, Río Cuarto, Córdoba</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          {/* Copyright eliminado */}
        </div>
      </div>
    </footer>
  );
}
