import React from "react";
import Link from "next/link";

export const CarouselInner = ({ slides }) => {
  return (
    // <div className="carousel-inner">
    //   <div className="carousel-item active">
    //     <img src="./images/slide-1.png" alt="" className="d-block w-100" />
    //     <div className="carousel-caption">
    //       <h5 className="display-4">Ahora Digital</h5>
    //       <p>Continúa el programa de adhesión al Cedulón digital</p>
    //       <a
    //         href="https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.suscripcioncdingreso"
    //         target="_blank"
    //         className="btn btn-light"
    //       >
    //         Adherite Ahora
    //       </a>
    //     </div>
    //   </div>
    //   <div className="carousel-item">
    //     <img src="./images/slide-4.png" alt="" className="d-block w-100" />
    //     <div className="carousel-caption">
    //       <h5 className="display-4">Trámites Online</h5>
    //       <p>Todos tus gestiones en un sólo lugar</p>
    //       {/* <a
    //         href="https://tramites.gobiernoriocuarto.gob.ar/"
    //         target="_blank"
    //         className="btn btn-light"
    //       >
    //         Ver más
    //       </a> */}
    //       <Link href="/tramites-y-servicios/guia-de-tramites">
    //         <a className="btn btn-light">Ver Trámites</a>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="carousel-item">
    //     <img src="./images/slide-3.png" alt="" className="d-block w-100" />
    //     <div className="carousel-caption">
    //       <h5 className="display-4">Modernización</h5>
    //       <p>
    //         Capacitación de empleados sobre el nuevos sistema de gestión
    //         municipal
    //       </p>
    //       {/* <button className="btn btn-light">Button</button> */}
    //     </div>
    //   </div>
    // </div>
    <div className="carousel-inner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === 0 ? "carousel-item active" : "carousel-item"}
        >
          <img src={slide.file} alt="" className="d-block w-100" />
          <div className="carousel-caption">
            <h5 className="display-4">{slide.title}</h5>
            <p>{slide.summary}</p>
            {slide.link_type && (
              <>
                {slide.link_type === "_blank" ? (
                  <>
                    <a
                      href={slide.href}
                      target="_blank"
                      className="btn btn-light"
                    >
                      Ver más
                    </a>
                  </>
                ) : (
                  <>
                    <Link href={slide.href}>
                      <a className="btn btn-light">Ver Trámites</a>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
