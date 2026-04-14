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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/institucional">
                  <a className="nav-link">Institucional</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pagos-y-deudas">
                  <a className="nav-link">Pagos y Deudas</a>
                </Link>
              </li>
              <li className="nav-item d-none">
                <Link href="/compras-web">
                  <a className="nav-link">Compras Web</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/tramites-y-servicios">
                  <a className="nav-link">Trámites y Servicios</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/transparencia">
                  <a className="nav-link">Transparencia</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/legislacion">
                  <a className="nav-link">Legislación</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sustentabilidad">
                  <a className="nav-link">Sustentabilidad</a>
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link href="/ods">
                <a className="nav-link">ODS</a>
              </Link>
            </li> */}
              <li className="nav-item">
                <a
                  href="https://admin.toteminsight.com/progressiveApp/5f04b1401320d01ab4a513f6/index.jade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  Turnos Web
                </a>
              </li>
              <li className="nav-item">
                <Link
                  href={
                    process.env.NODE_ENV == "development"
                      ? "http://localhost:3001"
                      : "https://comprasweb.economiariocuarto.gob.ar/"
                  }
                  passHref
                >
                  <a className="nav-link special">
                    Compras Web <i className="fas fa-sign-out-alt"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

