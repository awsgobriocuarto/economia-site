import React from "react";
import Head from "next/head";
import DownloadItem from "../../components/DownloadItem";
import SectionHeader from "../../components/SectionHeader";
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

      <section className="legislations py-5">
        <div className="container">
          {/* SECCIÓN ESCALAS VIGENTES */}
          <div className="group mb-5">
            <SectionHeader title="Escala Salarial" className="mb-4" />
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
            <p className="text-muted mb-4">Consulta el histórico de escalas salariales.</p>

            <a
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark btn-lg px-5 py-2"
              style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05rem' }}
            >
              Ver Más
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
