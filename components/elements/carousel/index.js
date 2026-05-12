import Link from "next/link";
import { Carousel } from "react-bootstrap";
import { usePosts } from "../../../hooks/usePosts";
import Spinner from "../spinner/Spinner";

export const Slider = () => {
  const { posts, loading } = usePosts({ limit: 5 });

  return (
    <>
      <div className="hero-split-container">
        {loading && <Spinner />}
        {posts.length ? (
          <Carousel indicators={false} controls={false} interval={6000} fade={true} className="hero-carousel">
            {posts.map((post, index) => (
              <Carousel.Item key={index}>
                <div className="hero-slide">
                    <div className="hero-image-side">
                      {/* eslint-disable-next-line */}
                      <img 
                        src={post?.main_picture?.path || post?.main_picture?.original || post?.main_picture?.small || '/images/slide-1.png'} 
                        alt={post.title} 
                        onError={(e) => { e.target.src = '/images/slide-1.png'; }}
                      />
                    </div>


                  <div className="hero-content-side">
                    <div className="sh-overlay-dark" />
                    <div className="hero-text-inner">
                      <h2 className="hero-title">{post.title}</h2>
                      <p className="hero-excerpt">{post.excerpt}</p>
                      <Link href={`/noticias/${post.slug}?id=${post.id}`}>
                        <a className="btn btn-outline-light rounded-pill px-4 py-2 mt-4 hero-btn">
                          Seguir leyendo
                        </a>
                      </Link>
                    </div>
                    {/* Ícono institucional decorativo en el lateral derecho */}
                    <div className="hero-institutional-icon">
                        <img src="/images/icono-titulos.webp" alt="" />
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          null
        )}
      </div>
    </>
  );
};

