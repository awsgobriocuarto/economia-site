import React from "react";
import Head from "next/head";
import DownloadItemGroup from "../../components/DownloadItemGroup";
import SectionHeader from "../../components/SectionHeader";
import fetchDDJJ from "../../services/fetchDDJJ";

export default function DeclaracionesJuradas({
  intendente = [],
  secretarios = [],
  sub = [],
  directores = [],
  fiscales = [],
  tribunal = [],
  concejales = [],
}) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Declaraciones Juradas</title>
      </Head>

      <SectionHeader title="Declaraciones Juradas" subtitle="SECRETARÍA DE ECONOMÍA · MUNICIPALIDAD DE RÍO CUARTO" />

      <section className="legislations py-5">
        <div className="container">
          {intendente.length > 0 && (
            <div className="group">
              <div className="current">
                <h3>Intendente</h3>
                <DownloadItemGroup items={intendente} />
              </div>
            </div>
          )}
          {secretarios.length > 0 && (
            <div className="group">
              <div className="current">
                <h3>Secretarios</h3>
                <DownloadItemGroup items={secretarios} />
              </div>
            </div>
          )}
          {sub.length > 0 && (
            <div className="group">
              <div className="current">
                <h3>Subsecretarios</h3>
                <DownloadItemGroup items={sub} />
              </div>
            </div>
          )}
          {directores.length > 0 && (
            <div className="group">
              <div className="current">
                <h3>Directores</h3>
                <DownloadItemGroup items={directores} />
              </div>
            </div>
          )}
          {fiscales.length > 0 && (
            <div className="group">
              <div className="current">
                <h3>Fiscales</h3>
                <DownloadItemGroup items={fiscales} />
              </div>
            </div>
          )}
          {tribunal.length > 0 && (
            <div className="group">
              <div className="current">
                <h3>Tribunal de Cuentas</h3>
                <DownloadItemGroup items={tribunal} />
              </div>
            </div>
          )}
          {concejales.length > 0 && (
            <div className="group">
              <div className="current">
                <h3>Concejales</h3>
                <DownloadItemGroup items={concejales} />
              </div>
            </div>
          )}
          <hr />
          <div className="py-3">
            <h5>Declaracion Juradas Anteriores</h5>
            <a
              href="https://drive.google.com/drive/folders/1j1YENTh5nLKMFsTmr19az-1OdC-01XNP?usp=sharing"
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
  let items = [];
  try {
    const response = await fetchDDJJ.list();
    items = response || [];
  } catch (error) {
    console.error("Error fetching DDJJ:", error);
  }

  const intendente = items.filter((i) =>
    i.category?.toLowerCase().includes("intendente")
  );
  const secretarios = items.filter((i) =>
    i.category?.toLowerCase().includes("secretarios")
  );
  const sub = items.filter((i) => i.category?.toLowerCase().includes("sub"));
  const directores = items.filter((i) =>
    i.category?.toLowerCase().includes("directores")
  );
  const fiscales = items.filter((i) =>
    i.category?.toLowerCase().includes("fiscales")
  );
  const tribunal = items.filter((i) =>
    i.category?.toLowerCase().includes("tribunal")
  );
  const concejales = items.filter((i) =>
    i.category?.toLowerCase().includes("concejales")
  );

  return {
    props: {
      intendente,
      secretarios,
      sub,
      directores,
      fiscales,
      tribunal,
      concejales,
    },
    revalidate: 60,
  };
}
