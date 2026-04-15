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
    </>
  );
}

