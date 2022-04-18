import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h6>Secretaría de Economía</h6>
          <p>Constitución 988. Córdoba, Argentina.</p>
          <p>Municipalidad de Río Cuarto</p>
        </div>
        <div>
          <h6>Teléfono</h6>
          <p>0800 444 5454</p>
          <p>(opción 3)</p>
        </div>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/economiarioiv"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-lg fa-facebook "></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/economiariocuarto/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-lg fa-instagram "></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/pabloantonetti"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fab fa-lg fa-twitter "></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
