import React from "react";

export const CarouselInner = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./images/slide-1.png" alt="" className="d-block w-100" />
        <div className="carousel-caption">
          <h5 className="display-4">Ahora Digital</h5>
          <p>Continúa el programa de adhesión al Cedulón digital</p>
          <a
            href="https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.suscripcioncdingreso"
            target="_blank"
            className="btn btn-light"
          >
            Button
          </a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./images/slide-2.png" alt="" className="d-block w-100" />
        <div className="carousel-caption">
          <h5 className="display-4">Firma de convenio</h5>
          <p>
            Vinculación institucional con el Consejo Profesional de Ciencias
            Económicas
          </p>
          <button className="btn btn-light">Button</button>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./images/slide-2.png" alt="" className="d-block w-100" />
        <div className="carousel-caption">
          <h5 className="display-4">Modernización</h5>
          <p>Avanza la Modernización del Estado Municipal</p>
          <button className="btn btn-light">Button</button>
        </div>
      </div>
    </div>
  );
};
