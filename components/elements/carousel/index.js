import Link from "next/link";
import { Carousel } from "react-bootstrap";
import { useSlides } from "../../../hooks/useSlides";
import Spinner from "../spinner/Spinner";

export const Slider = () => {
  const { slides, loading } = useSlides();

  return (
    <>
      {loading && <Spinner />}
      {slides.length ? (
        <>
          <Carousel>
            {slides.map((slide, index) => (
              <Carousel.Item key={index} interval={4000}>
                {/* eslint-disable-next-line */}
                <img src={slide.file} alt="" className="d-block w-100" />
                <Carousel.Caption>
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
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      ) : (
        ""
      )}
    </>
  );
};
