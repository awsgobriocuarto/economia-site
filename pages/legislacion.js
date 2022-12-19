import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import fetchLegislations from "../services/fetchLegislations";
import DownloadItemGroup from "../components/DownloadItemGroup";
import DownloadItemGroupOlds from "../components/DownloadItemGroupOlds";

export default function Legislacion({
  codigo,
  ordenanza,
  decretos,
  agenda,
  planes,
}) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Legislación</title>
      </Head>

      <Header title="Legislacion" subtitle="" />
      <section className="legislations">
        <div className="container">
          {codigo.length ? (
            <div className="group">
              <h3>Código Tributario Municipal</h3>
              <div className="current">
                <DownloadItemGroup items={codigo} />
              </div>
            </div>
          ) : (
            ""
          )}

          {ordenanza.length ? (
            <div className="group">
              <h3>Ordenanza Tarifaria Anual</h3>
              <div className="current">
                <DownloadItemGroup items={ordenanza} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={ordenanza} />
              </div>
            </div>
          ) : (
            ""
          )}

          {decretos.length ? (
            <div className="group">
              <h3>Decretos Reglamentarios</h3>
              <div className="current">
                <DownloadItemGroup items={decretos} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={decretos} />
              </div>
            </div>
          ) : (
            ""
          )}

          {agenda.length ? (
            <div className="group">
              <h3>Agenda de Vencimientos</h3>
              <div className="current">
                <DownloadItemGroup items={agenda} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={agenda} />
              </div>
            </div>
          ) : (
            ""
          )}

          {planes.length ? (
            <div className="group">
              <h3>Planes de Pago</h3>
              <div className="current">
                <DownloadItemGroup items={planes} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={planes} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetchLegislations.list();
  const items = response;

  const codigo = response.filter((i) =>
    i.category.toLowerCase().includes("codigo")
  );
  const ordenanza = response.filter((i) =>
    i.category.toLowerCase().includes("ordenanza")
  );
  const decretos = response.filter((i) =>
    i.category.toLowerCase().includes("decretos")
  );
  const agenda = response.filter((i) =>
    i.category.toLowerCase().includes("agenda")
  );
  const planes = response.filter((i) =>
    i.category.toLowerCase().includes("planes")
  );
  return {
    props: {
      items,
      codigo,
      ordenanza,
      decretos,
      agenda,
      planes,
    },
    revalidate: 1,
  };
}
