import React from "react";
import PropTypes from "prop-types";

export default function Cta({ title, text, cta, url, urlExternal = false }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-body">
          <div className="cta-title">{title}</div>
          <p className="cta-text">{text}</p>
        </div>
        <div className="cta-button">
          <a href="" className="btn btn-lg btn-primary text-white">
            {cta}
          </a>
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
