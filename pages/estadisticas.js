import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import getListEstatistics from "../services/getListEstatistics";

export default function Estadisticas({
  items,
  ejercicios,
  ejecuciones,
  presupuesto,
  recaudacion,
  informes,
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
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
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
            <div className="mb-5">
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
    i.category.toLowerCase().includes("informe")
  );
  return {
    props: {
      items,
      ejercicios,
      ejecuciones,
      presupuesto,
      recaudacion,
      informes,
    },
    revalidate: 1,
  };
}
