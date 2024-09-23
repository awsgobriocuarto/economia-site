import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import fetchTransparency from "../../services/fetchTransparency";
import DownloadItemGroup from "../../components/DownloadItemGroup";
import DownloadItemGroupOlds from "../../components/DownloadItemGroupOlds";

export default function Presupuesto({
  ejercicios,
  ejecuciones,
  presupuesto,
  recaudacion,
  informes,
  deudas,
  realidad,
}) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Estadísticas</title>
      </Head>

      <Header title="Presupuesto" subtitle="" />

      <section className="legislations">
        <div className="container">
          {ejercicios.length ? (
            <div className="group">
              <div className="current">
                <h3>Cuenta General del Ejercicio</h3>
                <DownloadItemGroup items={ejercicios} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={ejercicios} />
              </div>
            </div>
          ) : (
            ""
          )}
          {ejecuciones.length ? (
            <div className="group">
              <div className="current">
                <h3>Ejecución Presupuestaria</h3>
                <DownloadItemGroup items={ejecuciones} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={ejecuciones} />
              </div>
            </div>
          ) : (
            ""
          )}
          {presupuesto.length ? (
            <div className="group">
              <div className="current">
                <h3>Presupuesto</h3>
                <DownloadItemGroup items={presupuesto} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={presupuesto} />
              </div>
            </div>
          ) : (
            ""
          )}
          {recaudacion.length ? (
            <div className="group">
              <div className="current">
                <h3>Recaudacion</h3>
                <DownloadItemGroup items={recaudacion} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={recaudacion} />
              </div>
            </div>
          ) : (
            ""
          )}
          {deudas.length ? (
            <div className="group">
              <div className="current">
                <h3>Reporte de Deuda Municipal</h3>
                <DownloadItemGroup items={deudas} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={deudas} />
              </div>
            </div>
          ) : (
            ""
          )}
          {informes.length ? (
            <div className="group">
              <div className="current">
                <h3>Informe Calificación de Riego</h3>
                <DownloadItemGroup items={informes} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={informes} />
              </div>
            </div>
          ) : (
            ""
          )}
          {realidad.length ? (
            <div className="group">
              <div className="current">
                <h3>Informe de Actividad Económica</h3>
                <DownloadItemGroup items={realidad} />
              </div>
              <div className="no-current">
                <DownloadItemGroupOlds items={realidad} />
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
  const response = await fetchTransparency.list();
  const items = response;

  const ejercicios = response.filter((i) =>
    i.category.toLowerCase().includes("ejercicio")
  );
  const ejecuciones = response.filter((i) =>
    i.category.toLowerCase().includes("ejecucion")
  );
  const presupuesto = response.filter((i) =>
    i.category.toLowerCase().includes("presupuesto")
  );
  const recaudacion = response.filter((i) =>
    i.category.toLowerCase().includes("recaudacion")
  );
  const informes = response.filter((i) =>
    i.category.toLowerCase().includes("informes")
  );
  const deudas = response.filter((i) =>
    i.category.toLowerCase().includes("deuda")
  );
  const realidad = response.filter((i) =>
    i.category.toLowerCase().includes("realidad")
  );
  return {
    props: {
      items,
      ejercicios,
      ejecuciones,
      presupuesto,
      recaudacion,
      informes,
      deudas,
      realidad,
    },
    revalidate: 1,
  };
}
