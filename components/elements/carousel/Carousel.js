import React, { useState } from "react";
import { useSlides } from "../../../hooks/useSlides";
import { CarouselControls } from "./CarouselControls";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselInner } from "./CarouselInner";

export const Carousel = () => {
  const { slides, loading } = useSlides();
  const [showIndicators] = useState(true);
  const [showControls] = useState(true);
  return (
    <>
      {loading && "cargando"}
      {slides.length && (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          {showIndicators && <CarouselIndicators slides={slides} />}
          <CarouselInner slides={slides} />
          {showControls && <CarouselControls />}
        </div>
      )}
    </>
  );
};
