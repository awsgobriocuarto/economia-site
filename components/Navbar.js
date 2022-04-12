import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo-economia.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl navbar-light bg-light sticky-top">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <Image src={Logo} alt="logo economia" />
          </a>
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
              <Link href="/institucional">
                <a className="nav-link">Institucional</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pagos-y-deudas">
                <a className="nav-link">Pagos y Deudas</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tramites-y-servicios">
                <a className="nav-link">Trámites y Servicios</a>
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
              <a
                href="https://admin.toteminsight.com/progressiveApp/5f04b1401320d01ab4a513f6/index.jade"
                target="_blank"
                className="nav-link special"
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