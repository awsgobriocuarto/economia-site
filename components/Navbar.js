import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Economía</a>
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
                <a className="nav-link">Trámites y Mis Servicios</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/compras-web">
                <a className="nav-link">Compras Web</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/estadisticas">
                <a className="nav-link">Estadísticas</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/legislacion">
                <a className="nav-link">Legislación</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/ods">
                <a className="nav-link">ODS</a>
              </Link>
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
                  <Link href="/institucional">
                    <a className="dropdown-item">Institucional</a>
                  </Link>
                </li>
                <li>
                  <Link href="/medios-de-pago">
                    <a className="dropdown-item">Medios de Pago</a>
                  </Link>
                </li>
                <li>
                  <Link href="/institucional">
                    <a className="dropdown-item">Institucional</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                href="https://admin.toteminsight.com/progressiveApp/5f04b1401320d01ab4a513f6/index.jade"
                target="_blank"
                className="nav-link bg-secondary text-white"
              >
                Turnos Web <i className="fas fa-calendar-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
