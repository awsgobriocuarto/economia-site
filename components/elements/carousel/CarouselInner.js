import React from "react";

export const CarouselInner = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
          alt=""
          className="d-block w-100"
        />
        <div className="carousel-caption">
          <h5 className="display-4">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
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
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
          alt=""
          className="d-block w-100"
        />
        <div className="carousel-caption">
          <h5 className="display-4">Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
          <button className="btn btn-light">Button</button>
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
          alt=""
          className="d-block w-100"
        />
        <div className="carousel-caption">
          <h5 className="display-4">Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
          <button className="btn btn-light">Button</button>
        </div>
      </div>
    </div>
  );
};
