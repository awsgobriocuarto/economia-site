import Head from "next/head";
import React from "react";
import SectionHeader from "../../components/SectionHeader";

export default function SeguimientoExpediente() {
  return (
    <>
      <Head>
        <title>Sec. de Economía Río Cuarto - Seguimiento de Expedientes</title>
      </Head>

      <section className="pt-5 pb-5">
        <div className="container">
          <SectionHeader title="SEGUIMIENTO DE EXPEDIENTES" />
          <iframe
            width="100%"
            height="600"
            src="https://app.riocuarto.gov.ar:8443/meys/servlet/com.meys.expcnswp"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </>
  );
}
