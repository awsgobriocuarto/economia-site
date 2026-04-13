import PropTypes from "prop-types";

/**
 * SectionHeader
 * Encabezado de sección con foto de fondo, overlay oscuro,
 * ícono institucional, título y subtítulo — estilo portal municipal.
 *
 * Props:
 *   title      — Título principal (obligatorio)
 *   subtitle   — Subtítulo (opcional)
 *   bgImage    — Ruta de la imagen de fondo (ej: "/images/section-bg-tramites.png")
 *   className  — Clase adicional opcional
 */
export default function SectionHeader({ title, subtitle, bgImage, className = "" }) {
  return (
    <div
      className={`section-header ${className}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className="section-header__overlay" />
      <div className="section-header__content">
        {/* Ícono institucional del Manual de Marca */}
        {/* eslint-disable-next-line */}
        <img
          src="/images/icono-titulos.webp"
          alt=""
          className="section-header__icon"
        />
        <div className="section-header__text">
          <h2 className="section-header__title">{title}</h2>
          {subtitle && (
            <p className="section-header__subtitle">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string,
  className: PropTypes.string,
};
