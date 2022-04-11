import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import getListEstatistics from "../services/getListEstatistics";

export default function Estadisticas({
  ejercicios,
  ejecuciones,
  presupuesto,
  recaudacion,
  informes,
  deudas,
}) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Estadísticas</title>
      </Head>

      <Header title="Estadísticas" subtitle="" />
      <section className="legislations">
        <div className="container">
          {ejercicios.length ? (
            <div className="">
              <h3>Cuenta general del ejercicio</h3>
              <ul>
                {ejercicios.map((item) => (
                  <li key={item.id}>
                    {item.title}
                    <a
                      href={item.url}
                      className="btn btn-secondary"
                      target="_blank"
                    >
                      descargar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {ejecuciones.length ? (
            <div className="">
              <h3>Ejecución Presupuestaria</h3>
              <ul>
                {ejecuciones.map((item) => (
                  <li key={item.id}>
                    {item.title}
                    <a
                      href={item.url}
                      className="btn btn-secondary"
                      target="_blank"
                    >
                      descargar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {presupuesto.length ? (
            <div className="">
              <h3>Presupuesto</h3>
              <ul>
                {presupuesto.map((item) => (
                  <li key={item.id}>
                    {item.title}
                    <a
                      href={item.url}
                      className="btn btn-secondary"
                      target="_blank"
                    >
                      descargar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {recaudacion.length ? (
            <div className="">
              <h3>Recaudación</h3>
              <ul>
                {recaudacion.map((item) => (
                  <li key={item.id}>
                    {item.title}
                    <a
                      href={item.url}
                      className="btn btn-secondary"
                      target="_blank"
                    >
                      descargar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {informes.length ? (
            <div className="">
              <h3>Informes Trimestrales</h3>
              <ul>
                {informes.map((item) => (
                  <li key={item.id}>
                    {item.title}
                    <a
                      href={item.url}
                      className="btn btn-secondary"
                      target="_blank"
                    >
                      descargar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          {deudas.length ? (
            <div className="">
              <h3>Deudas</h3>
              <ul>
                {deudas.map((item) => (
                  <li key={item.id}>
                    {item.title}
                    <a
                      href={item.url}
                      className="btn btn-secondary"
                      target="_blank"
                    >
                      descargar
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
          <div>
            <h3>Informes Anteriores</h3>
            <a
              href="http://transparencia.riocuarto.gov.ar/"
              target="_blank"
              className="btn btn-secondary"
            >
              Consultar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await getListEstatistics.list();
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
    i.category.toLowerCase().includes("deudas")
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
    },
    revalidate: 1,
  };
}
