import { useState } from "react";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
import { usePosts } from "../../../hooks/usePosts";
import Spinner from "../spinner/Spinner";
import { getPostCoverImage } from "../../../utils/getPostCoverImage";

export const Slider = () => {
  const { posts, loading } = usePosts({ limit: 5 });
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = (e) => {
    e.preventDefault();
    setActiveIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setActiveIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="hero-split-container">
        {loading && <Spinner />}
        {posts.length ? (
          <>
            <Carousel
              activeIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}
              indicators={false}
              controls={false}
              interval={6000}
              fade={true}
              className="hero-carousel"
            >
              {posts.map((post, index) => {
                const coverImage = getPostCoverImage(post) || '/images/slide-1.png';
                return (
                  <Carousel.Item key={index}>
                    <div className="hero-slide">
                      <div className="hero-image-side">
                        {/* eslint-disable-next-line */}
                        <img
                          src={coverImage}
                          alt={post.title}
                          onError={(e) => { e.target.src = '/images/slide-1.png'; }}
                        />
                      </div>

                      <Link href={`/noticias/${post.slug}?id=${post.id}`}>
                        <a className="hero-content-side">
                          <div className="sh-overlay-dark" />
                          <div className="hero-text-inner">
                            <h2 className="hero-title">{post.title}</h2>
                            <p className="hero-excerpt">{post.excerpt}</p>
                          </div>
                          {/* Ícono institucional decorativo en el lateral derecho */}
                          <div className="hero-institutional-icon">
                            <img src="/images/icono-titulos.webp" alt="" />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </Carousel.Item>
                );
              })}
            </Carousel>

            {/* ===== CONTROLES DE NAVEGACIÓN INFERIORES ===== */}
            <div className="hero-nav-controls">
              <button
                className="hero-nav-btn hero-nav-prev"
                onClick={handlePrev}
                aria-label="Slide anterior"
                type="button"
              >
                <i className="fas fa-chevron-left" />
              </button>

              {/* Dots indicadores */}
              <div className="hero-nav-dots">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    className={`hero-dot ${i === activeIndex ? "hero-dot--active" : ""}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Ir al slide ${i + 1}`}
                    type="button"
                  />
                ))}
              </div>

              <button
                className="hero-nav-btn hero-nav-next"
                onClick={handleNext}
                aria-label="Slide siguiente"
                type="button"
              >
                <i className="fas fa-chevron-right" />
              </button>
            </div>
          </>
        ) : (
          null
        )}
      </div>
    </>
  );
};


