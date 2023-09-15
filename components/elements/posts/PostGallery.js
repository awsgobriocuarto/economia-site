import React from "react";

export default function PostGallery({ images }) {
  // console.log(images);
  return (
    <div className="gallery">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* eslint-disable-next-line */}
            <img src={images.main_picture.medium} className="image" alt="..." />
          </div>
          {images.gallery.map((image, index) => (
            <div key={index} className="carousel-item">
              {/* eslint-disable-next-line */}
              <img src={image.medium} className="image" alt="..." />
            </div>
          ))}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
