import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Logo</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/pagos-y-deudas">
                <a className="nav-link">Pagos y Deudas</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/servicios">
                <a className="nav-link">Servicios</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/compras-web">
                <a className="nav-link">Compras Web</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tramites">
                <a className="nav-link">Trámites</a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="http://transparencia.riocuarto.gov.ar/"
                target="_blank"
                className="nav-link"
              >
                Transparencia
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://admin.toteminsight.com/progressiveApp/5f04b1401320d01ab4a513f6/index.jade"
                target="_blank"
                className="nav-link"
              >
                Turnos Web <i className="fas fa-calendar-alt"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Otras Consultas
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link href="/legislacion">
                    <a className="dropdown-item">Legislacion</a>
                  </Link>
                </li>
                <li>
                  <Link href="/medios-de-pago">
                    <a className="dropdown-item">Medios de Pago</a>
                  </Link>
                </li>
                <li>
                  <Link href="/tutoriales">
                    <a className="dropdown-item">Tutoriales</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
