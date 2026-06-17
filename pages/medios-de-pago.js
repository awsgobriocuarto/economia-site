import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import SectionHeader from "../components/SectionHeader";

// Importación dinámica para evitar problemas de SSR con Leaflet
const MediosPagoMap = dynamic(() => import("../components/MediosPagoMap"), {
  ssr: false,
  loading: () => (
    <div className="map-placeholder d-flex align-items-center justify-content-center bg-light border rounded" style={{ height: "500px" }}>
      <div className="text-center">
        <div className="spinner-border text-primary mb-2" role="status">
          <span className="visually-hidden">Cargando mapa...</span>
        </div>
        <p className="text-muted mb-0">Cargando mapa interactivo...</p>
      </div>
    </div>
  ),
});

export default function MediosDePago() {
  return (
    <>
      <Head>
        <title>Sec. de Economía Río Cuarto - Medios de Pago</title>
        <meta
          name="description"
          content="Conocé los medios y canales de pago habilitados de la Secretaría de Economía de Río Cuarto. Cajas digitales, pagos web y puntos presenciales en efectivo."
        />
      </Head>

      {/* Encabezado limpio de la sección */}
      <div className="container pt-4">
        <SectionHeader
          title="Medios de Pago"
          subtitle="Información sobre digitalización de cajas y canales de cobro vigentes"
        />
      </div>

      {/* Sección principal de digitalización y canales */}
      <section className="medios-de-pago-digital pb-5">
        <div className="container">
          <div className="row align-items-center py-4">
            {/* Columna Izquierda: Información de Digitalización */}
            <div className="col-lg-6 intro-text">
              <span className="badge bg-primary text-white mb-3 text-uppercase font-weight-bold px-3 py-2">
                Novedades tributarias
              </span>
              <h1>A partir del 1 de julio, las cajas municipales se digitalizan por completo</h1>
              <h2>¡Más opciones y beneficios digitales!</h2>
              <p className="lead text-muted">
                Elegí tu medio de pago y aprovechá las promociones vigentes para estar al día con tus tributos de forma rápida y segura.
              </p>
            </div>

            {/* Columna Derecha: Tarjeta Crema de Canales */}
            <div className="col-lg-6">
              <div className="card-canales">
                {/* Canal 1: Desde la Web */}
                <div className="canal-item">
                  <div className="canal-icon-wrapper">
                    <i className="fas fa-desktop" aria-hidden="true"></i>
                  </div>
                  <div className="canal-content">
                    <strong>Desde la web:</strong> Tarjeta Cordobesa en 6 cuotas. Naranja en Z y 6 cuotas. Tarjetas Visa y Master bancarizadas en 3 cuotas.
                  </div>
                </div>

                {/* Canal 2: Cajas Presenciales */}
                <div className="canal-item">
                  <div className="canal-icon-wrapper">
                    <i className="fas fa-user-friends" aria-hidden="true"></i>
                  </div>
                  <div className="canal-content">
                    <strong>En cajas presenciales:</strong> Tarjeta Cordobesa en 6 cuotas y Tarjeta Naranja en Plan Z.
                  </div>
                </div>

                {/* Canal 3: Efectivo */}
                <div className="canal-item">
                  <div className="canal-icon-wrapper">
                    <i className="fas fa-money-bill-wave" aria-hidden="true"></i>
                  </div>
                  <div className="canal-content">
                    <strong>Efectivo:</strong> En cualquiera de los puntos habilitados: ✓ CES, Rapipago y Cobro Express.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Mapa Interactivo */}
          <div className="row mt-5">
            <div className="col-12">
              <hr className="my-5 opacity-25" />
              <div className="text-center mb-4">
                <span className="text-primary text-uppercase font-weight-bold tracking-wider small">
                  Información Importante
                </span>
                <h3 className="h2 font-weight-bold text-dark mt-2 mb-2">
                  Puntos de Cobro En Efectivo
                </h3>
                <p className="text-muted max-w-2xl mx-auto">
                  Si optás por pagar en efectivo, podés hacerlo en cualquiera de los siguientes centros autorizados de CES, Rapipago y Cobro Express en Río Cuarto.
                </p>
              </div>
              <MediosPagoMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
