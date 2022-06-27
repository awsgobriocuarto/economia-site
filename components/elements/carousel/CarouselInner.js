import React from "react";
import Link from "next/link";

export const CarouselInner = ({ slides }) => {
  return (
    <div className="carousel-inner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === 0 ? "carousel-item active" : "carousel-item"}
          data-bs-interval="4000"
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
                      <a className="btn btn-light">Ver más</a>
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
