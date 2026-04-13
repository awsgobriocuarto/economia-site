import Link from "next/link";
import PropTypes from "prop-types";

export default function Cta({
  title,
  text,
  cta,
  url,
  urlExternal = false,
  icon = false,
}) {
  return (
    <section className="cta py-5">
      <div className="container">
        <div className="cta-content d-flex align-items-center">
          <img src="/images/icono-titulos.webp" alt="" className="cta-icon me-4" />
          <div className="cta-body">
            <div className="cta-title">{title}</div>
            <p className="cta-text">{text}</p>
          </div>
        </div>
        <div className="cta-button">
          {urlExternal ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-secondary text-white"
            >
              {icon ? <i className={icon}></i> : ""}
              {cta}
            </a>
          ) : (
            <Link href={url}>
              <a className="btn btn-lg btn-secondary text-white">
                {icon ? <i className={icon}></i> : ""}
                {cta}
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlExternal: PropTypes.bool,
};
