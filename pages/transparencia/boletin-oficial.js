import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import DownloadItemGroup from "../../components/DownloadItemGroup";
import fetchBoletinOficial from "../../services/fetchBoletinOficial";

export default function BoletinOficial({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Boletín Oficial</title>
      </Head>

      <Header title="Boletín Oficial" subtitle="" />

      <section className="legislations">
        <div className="container">
          {items.length ? (
            <div className="group">
              <div className="current">
                <h3>Boletin Oficial</h3>
                <DownloadItemGroup items={items} />
              </div>
            </div>
          ) : (
            ""
          )}
          <hr />
          <div className="py-3">
            <h5>Boletines Oficiales Anteriores</h5>
            <a
              href="https://drive.google.com/drive/folders/1sJaxLf6k3sQn8xvJev_sJ3C9OJ7IzHfw?usp=sharing"
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
  const response = await fetchBoletinOficial.list();
  const items = response;

  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
