import React from "react";

export const CarouselIndicators = ({ slides }) => {
  return (
    <>
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label="Slide 1"
          ></button>
        ))}
      </div>
    </>
  );
};
