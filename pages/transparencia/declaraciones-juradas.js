import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import DownloadItemGroup from "../../components/DownloadItemGroup";
import DownloadItemGroupOlds from "../../components/DownloadItemGroupOlds";
import fetchDDJJ from "../../services/fetchDDJJ";

export default function DeclaracionesJuradas({
  intendente,
  secretarios,
  sub,
  directores,
  fiscales,
  tribunal,
  concejales,
}) {
  console.log(
    intendente,
    secretarios,
    sub,
    directores,
    fiscales,
    tribunal,
    concejales
  );

  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Declaraciones Juradas</title>
      </Head>

      <Header title="Declaraciones Juradas" subtitle="" />

      <section className="legislations">
        <div className="container">
          {intendente.length ? (
            <div className="group">
              <div className="current">
                <h3>Intendente</h3>
                <DownloadItemGroup items={intendente} />
              </div>
            </div>
          ) : (
            ""
          )}
          {secretarios.length ? (
            <div className="group">
              <div className="current">
                <h3>Secretarios</h3>
                <DownloadItemGroup items={secretarios} />
              </div>
            </div>
          ) : (
            ""
          )}
          {sub.length ? (
            <div className="group">
              <div className="current">
                <h3>Subsecretarios</h3>
                <DownloadItemGroup items={sub} />
              </div>
            </div>
          ) : (
            ""
          )}
          {directores.length ? (
            <div className="group">
              <div className="current">
                <h3>Directores</h3>
                <DownloadItemGroup items={directores} />
              </div>
            </div>
          ) : (
            ""
          )}
          {fiscales.length ? (
            <div className="group">
              <div className="current">
                <h3>Fiscales</h3>
                <DownloadItemGroup items={fiscales} />
              </div>
            </div>
          ) : (
            ""
          )}
          {tribunal.length ? (
            <div className="group">
              <div className="current">
                <h3>Tribunal de Cuentas</h3>
                <DownloadItemGroup items={tribunal} />
              </div>
            </div>
          ) : (
            ""
          )}
          {concejales.length ? (
            <div className="group">
              <div className="current">
                <h3>Concejales</h3>
                <DownloadItemGroup items={concejales} />
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
  const response = await fetchDDJJ.list();
  const items = response;

  const intendente = response.filter((i) =>
    i.category.toLowerCase().includes("intendente")
  );
  const secretarios = response.filter((i) =>
    i.category.toLowerCase().includes("secretarios")
  );
  const sub = response.filter((i) => i.category.toLowerCase().includes("sub"));
  const directores = response.filter((i) =>
    i.category.toLowerCase().includes("directores")
  );
  const fiscales = response.filter((i) =>
    i.category.toLowerCase().includes("fiscales")
  );
  const tribunal = response.filter((i) =>
    i.category.toLowerCase().includes("tribunal")
  );
  const concejales = response.filter((i) =>
    i.category.toLowerCase().includes("concejales")
  );

  return {
    props: {
      items,
      intendente,
      secretarios,
      sub,
      directores,
      fiscales,
      tribunal,
      concejales,
    },
    revalidate: 1,
  };
}
