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
          <p>
            <a href="tel:08004445454" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-fw fa-phone-alt"></i>
              <span>0800 444 5454</span>
            </a>
          </p>
          <p>(opción 3)</p>
        </div>
        <div>
          <h6>Whatsapp</h6>
          <p>
            <a
              href="https://wa.me/+5493584121879"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-fw fa-whatsapp"></i>
              <span>+54 9 358 412 1879</span>
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/+5493585148212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-fw fa-whatsapp"></i>
              <span>+54 9 358 514 8212</span>
            </a>
          </p>
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
