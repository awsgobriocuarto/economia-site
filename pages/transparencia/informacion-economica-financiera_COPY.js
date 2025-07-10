import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import fetchTransparency from "../../services/fetchTransparency";
import DownloadItemGroup from "../../components/DownloadItemGroup";
import DownloadItemGroupOlds from "../../components/DownloadItemGroupOlds";

export default function InformacionEconomicaFinanciera({
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
        <title>
          Sec. de Economia Río Cuarto - Información Económica y Financiera
        </title>
      </Head>

      <Header title="Información Económica y Financiera" subtitle="" />

      <section className="legislations">
        <div className="container">
          {ejercicios.length ? (
            <div className="group">
              <div className="current">
                <h3>Cuenta General del Ejercicio</h3>
                <DownloadItemGroup items={ejercicios} />
              </div>
              <div className="no-current">
                {/* <DownloadItemGroupOlds items={ejercicios} /> */}
                <a
                  href="https://drive.google.com/drive/folders/1kA_QCn9aUPyoxGaLNZ-U4RHtABl0DCwO?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark mt-2"
                >
                  Ver anteriores
                </a>
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
                {/* <DownloadItemGroupOlds items={ejecuciones} /> */}
                <a
                  href="https://drive.google.com/drive/folders/1UgqlgbsyQJtb5Swj1Dzj3bIw09JsSaVa?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark mt-2"
                >
                  Ver anteriores
                </a>
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
                {/* <DownloadItemGroupOlds items={presupuesto} /> */}
                <a
                  href="https://drive.google.com/drive/folders/18Kz6q4z3g_Vkp6XmeUIICyVQrhNJbYbi?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark mt-2"
                >
                  Ver anteriores
                </a>
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
                {/* <DownloadItemGroupOlds items={recaudacion} /> */}
                <a
                  href="https://drive.google.com/drive/folders/1gxlzZpKnQaodffDCQm-CIoPzJTGHcMed?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark mt-2"
                >
                  Ver anteriores
                </a>
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
                {/* <DownloadItemGroupOlds items={deudas} /> */}
                <a
                  href="https://drive.google.com/drive/folders/1p9Y3C015S7to8uj15XZ8DAreW7M31Hsx?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark mt-2"
                >
                  Ver anteriores
                </a>
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
                {/* <DownloadItemGroupOlds items={informes} /> */}
                <a
                  href="https://drive.google.com/drive/folders/1W4od223WJMg4ua_NNBrupesAhDwrypHR?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark mt-2"
                >
                  Ver anteriores
                </a>
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
                {/* <DownloadItemGroupOlds items={realidad} /> */}
                <a
                  href="https://drive.google.com/drive/folders/1GCkaO0zPAEJ0oGI3Qj4C_39D_8n5A7mV?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-dark mt-2"
                >
                  Ver anteriores
                </a>
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
