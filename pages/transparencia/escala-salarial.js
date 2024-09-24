import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import DownloadItemGroup from "../../components/DownloadItemGroup";
import fetchBoletinOficial from "../../services/fetchBoletinOficial";
import fetchEscalaSalarial from "../../services/fetchEscalaSalarial";

export default function EscalaSalarial({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Escala Salarial</title>
      </Head>

      <Header title="Escala Salarial" subtitle="" />

      <section className="legislations">
        <div className="container">
          {items.length ? (
            <div className="group">
              <div className="current">
                <h3>Escala Salarial</h3>
                <DownloadItemGroup items={items} />
              </div>
            </div>
          ) : (
            ""
          )}
          <hr />
          <div className="py-3">
            <h5>Escalas Salariales Anteriores</h5>
            <a
              href="https://drive.google.com/drive/folders/1Q7fZqWjrrZ0NsBqi8ZzzPZIEdEHLjINB?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Ver más
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetchEscalaSalarial.list();
  const items = response;

  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
