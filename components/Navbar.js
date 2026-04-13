import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      {/* === NAVBAR PRINCIPAL CON OFFCANVAS === */}
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

          <button
            className="navbar-toggler position-absolute end-0 me-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENÚ OFFCANVAS (Sale de la derecha) */}
          <div 
            className="offcanvas offcanvas-end" 
            tabIndex="-1" 
            id="offcanvasNavbar" 
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header border-bottom">
              <div className="offcanvas-logo py-2">
                <Image
                  src="/images/logo-economia-ok.png"
                  width="160"
                  height="42"
                  alt="Logo"
                />
              </div>

              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="offcanvas" 
                aria-label="Close"
              ></button>
            </div>
            
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto align-items-xl-center">
                <li className="nav-item">
                  <Link href="/institucional">
                    <a className="nav-link" data-bs-dismiss="offcanvas">Institucional</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/innovacion">
                    <a className="nav-link" data-bs-dismiss="offcanvas">Innovación</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/transparencia">
                    <a className="nav-link" data-bs-dismiss="offcanvas">Transparencia</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/legislacion">
                    <a className="nav-link" data-bs-dismiss="offcanvas">Legislación</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href={
                      process.env.NODE_ENV === "development"
                        ? "http://localhost:3001"
                        : "https://comprasweb.economiariocuarto.gob.ar/"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link special"
                    data-bs-dismiss="offcanvas"
                  >
                    Compras Web <i className="fas fa-sign-out-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

