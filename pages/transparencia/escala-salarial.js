import React from "react";
import Head from "next/head";
import DownloadItem from "../../components/DownloadItem";
import fetchEscalaSalarial from "../../services/fetchEscalaSalarial";

export default function EscalaSalarial({ items }) {
  // Filtramos las escalas vigentes
  const vigentes = items.filter((item) => {
    const status = (item.status || item.Status || item.vigente || item.Vigente || "").toString().toLowerCase().trim();
    return status === "vigente" || status === "true" || status === "1" || item.vigente === true;
  });

  const driveLink = "https://drive.google.com/drive/folders/1Q7fZqWjrrZ0NsBqi8ZzzPZIEdEHLjINB?usp=sharing"; // URL de Drive para anteriores

  return (
    <>
      <Head>
        <title>Escala Salarial — Secretaría de Economía e Innovación</title>
        <meta name="description" content="Consulta las escalas salariales vigentes y anteriores de la Municipalidad de Río Cuarto." />
      </Head>

      <div className="ddjj-header py-5">
        <div className="container">
          <div className="d-flex align-items-center gap-4">
            <img
              src="/images/icono-titulos.webp"
              alt=""
              style={{ height: "85px", width: "auto" }}
            />
            <div>
              <h1 className="ddjj-title">Escala Salarial</h1>
              <p className="ddjj-subtitle">SECRETARÍA DE ECONOMÍA · MUNICIPALIDAD DE RÍO CUARTO</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ddjj-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #000;
          text-transform: uppercase;
          letter-spacing: -0.04rem;
          line-height: 1;
          margin: 0;
        }
        .ddjj-subtitle {
          font-size: 1.15rem;
          font-weight: 500;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
          margin: 6px 0 0;
        }
        @media (max-width: 767px) {
          .ddjj-title {
            font-size: 1.6rem;
          }
          .ddjj-subtitle {
            font-size: 0.85rem;
            letter-spacing: 0.05rem;
          }
          .ddjj-header img {
            height: 52px !important;
          }
        }
      `}</style>

      <section className="legislations py-5">
        <div className="container">
          {/* SECCIÓN ESCALAS VIGENTES */}
          <div className="group mb-5">
            <h3 className="section-title-modern mb-4">Escala Salarial</h3>
            {vigentes.length ? (
              <div className="current-list">
                {vigentes.map((item, idx) => (
                  <DownloadItem
                    key={`vigente-${idx}`}
                    title={item.title || item.titulo || item.Title || item.Titulo || item.name || item.Name}
                    url={item.url}
                  />
                ))}
              </div>
            ) : (
              <p className="text-muted">No hay escalas vigentes para mostrar.</p>
            )}
          </div>

          <hr className="my-5" />

          {/* SECCIÓN ESCALAS ANTERIORES */}
          <div className="group">
            <h3 className="section-title-modern mb-4">Escalas Salariales Anteriores</h3>
            <p className="text-muted mb-4">Puedes consultar el histórico de escalas salariales en nuestra carpeta de Google Drive.</p>
            
            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-lg px-5 py-3 rounded-pill"
              style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05rem' }}
            >
              Ver anteriores en Drive
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .section-title-modern {
          font-weight: 800;
          color: #1a2840;
          font-size: 1.75rem;
          letter-spacing: -0.02rem;
        }
        .current-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetchEscalaSalarial.list();
  const items = response || [];

  return {
    props: {
      items,
    },
    revalidate: 60, // Revalidar cada minuto
  };
}
