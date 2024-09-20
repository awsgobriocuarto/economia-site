import Head from "next/head";
import React from "react";
import Header from "../../components/Header";

export default function SeguimientoExpediente() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Seguimiento de Expedientes</title>
      </Head>

      <Header title="Seguimiento de Expedientes" subtitle="" />
      <section className="">
        <div className="container">
          <iframe
            width="100%"
            height="600"
            src="https://app.riocuarto.gov.ar:8443/meys/servlet/com.meys.expcnswp"
            frameborder="0"
          ></iframe>
        </div>
      </section>
    </>
  );
}
