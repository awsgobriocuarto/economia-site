import React, { useState } from "react";
import { CarouselControls } from "./CarouselControls";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselInner } from "./CarouselInner";

export const Carousel = () => {
  const [indicators] = useState(true);
  const [controls] = useState(true);
  return (
    <>
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        {indicators && <CarouselIndicators />}
        <CarouselInner />
        {controls && <CarouselControls />}
      </div>
    </>
  );
};
