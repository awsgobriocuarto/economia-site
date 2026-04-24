import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* === NAVBAR PRINCIPAL === */}
      <nav className="navbar navbar-expand-xl navbar-light sticky-top">
        <div className="container-fluid justify-content-between">
          <Link href="/">
            <a className="navbar-brand m-0 p-0 d-flex justify-content-center justify-content-xl-start w-100-mobile">
              <Image
                src="/images/logo-economia-ok.png"
                width="423"
                height="113"
                alt="Secretaría de Economía - Municipalidad de Río Cuarto"
                priority
              />
            </a>
          </Link>

          {/* Botón Toggler para móvil */}
          <button
            className="navbar-toggler position-absolute end-0 me-3"
            type="button"
            onClick={toggleMenu}
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú de Escritorio */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/institucional">
                  <a className="nav-link">Institucional</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/transparencia">
                  <a className="nav-link">Transparencia</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/innovacion">
                  <a className="nav-link">Innovación</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/legislacion">
                  <a className="nav-link">Legislación</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* === MENU LATERAL (OFFCANVAS) === */}
      <div 
        className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} 
        tabIndex="-1" 
        id="offcanvasNavbar"
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      >
        <div className="offcanvas-header">
          <div className="offcanvas-logo">
            <Image
              src="/images/logo-economia-ok.png"
              width="180"
              height="48"
              alt="Logo"
            />
          </div>
          <button 
            type="button" 
            className="btn-close btn-close-white text-reset" 
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link" onClick={() => setIsOpen(false)}>Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/institucional">
                <a className="nav-link" onClick={() => setIsOpen(false)}>Institucional</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/transparencia">
                <a className="nav-link" onClick={() => setIsOpen(false)}>Transparencia</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/innovacion">
                <a className="nav-link" onClick={() => setIsOpen(false)}>Innovación</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/legislacion">
                <a className="nav-link" onClick={() => setIsOpen(false)}>Legislación</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Backdrop (fondo oscuro al abrir menú) */}
      {isOpen && (
        <div 
          className="offcanvas-backdrop fade show" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
