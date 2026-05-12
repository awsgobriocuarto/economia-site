import PropTypes from "prop-types";

/**
 * SectionHeader
 * Encabezado de sección versátil.
 * Si tiene bgImage: Estilo Hero (foto + overlay + texto blanco).
 * Si NO tiene bgImage: Estilo Limpio (texto negro + ícono + sin fondo).
 */
export default function SectionHeader({ title, subtitle, bgImage, className = "" }) {
  const isClean = !bgImage;

  return (
    <div
      className={`section-header ${isClean ? "section-header--clean" : ""} ${className}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {!isClean && <div className="section-header__overlay" />}
      <div className="section-header__content">
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

      <style jsx>{`
        .section-header--clean {
          background: transparent !important;
          box-shadow: none !important;
          height: auto !important;
          padding: 20px 0 !important;
          margin-bottom: 10px !important;
        }
        .section-header--clean :global(.section-header__content) {
          padding: 0 !important;
          gap: 25px !important;
        }
        .section-header--clean :global(.section-header__icon) {
          filter: none !important;
          height: 70px !important;
        }
        .section-header--clean :global(.section-header__title) {
          color: #000 !important;
          text-shadow: none !important;
          font-size: 2.2rem !important;
        }
        .section-header--clean :global(.section-header__subtitle) {
          color: #666 !important;
          text-shadow: none !important;
          font-size: 1rem !important;
          margin-top: 4px !important;
        }

        @media (max-width: 767px) {
          .section-header--clean :global(.section-header__title) {
            font-size: 1.5rem !important;
          }
          .section-header--clean :global(.section-header__icon) {
            height: 50px !important;
          }
        }
      `}</style>
    </div>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bgImage: PropTypes.string,
  className: PropTypes.string,
};
