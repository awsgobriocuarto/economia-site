import React, { useState } from "react";
import { useSlides } from "../../../hooks/useSlides";
import Spinner from "../spinner/Spinner";
import { CarouselControls } from "./CarouselControls";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselInner } from "./CarouselInner";

export const Carousel = () => {
  const { slides, loading } = useSlides();
  const [showIndicators] = useState(true);
  const [showControls] = useState(true);

  var array = [
    {
      EmployeeName: "John",
      Experience: "12",
      Technology: "SharePoint",
    },
    {
      EmployeeName: "Charles",
      Experience: "9",
      Technology: "ASP.NET",
    },
    {
      EmployeeName: "Jo",
      Experience: "3",
      Technology: "JAVA",
    },
    {
      EmployeeName: "Daine",
      Experience: "7",
      Technology: "Sql Server",
    },
    {
      EmployeeName: "Zain",
      Experience: "6",
      Technology: "C#",
    },
  ];
  //Comparer Function
  function GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  return (
    <>
      {loading && <Spinner />}
      {slides.length ? (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          {showIndicators && <CarouselIndicators slides={slides} />}
          <CarouselInner slides={slides} />
          {showControls && <CarouselControls />}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
