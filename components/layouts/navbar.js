import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link href="/">
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
                Turnos Web
              </a>
            </li>
            <li className="nav-item">
              <Link href="/404">
                <a className="nav-link">404</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
