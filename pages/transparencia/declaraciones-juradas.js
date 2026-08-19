import React from "react";
import Head from "next/head";
import DownloadItemGroup from "../../components/DownloadItemGroup";
import SectionHeader from "../../components/SectionHeader";
import fetchDDJJApi from "../../services/fetchDDJJApi";

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

      <section className="legislations py-5">
        <div className="container">
          <SectionHeader title="Declaraciones Juradas" className="mb-5" />
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

const PUBLICADA = 4;

export async function getStaticProps() {
  let raw = [];
  try {
    raw = await fetchDDJJApi.list();
  } catch (error) {
    console.error("Error fetching DDJJ:", error);
  }

  const items = raw
    .filter((i) => i.state === PUBLICADA && i.public_url)
    .map((i) => ({
      title: i.user?.name || i.user_position || "Declaración Jurada",
      url: i.public_url,
      status: "vigente",
      category: i.user_position || i.user?.position?.name || "",
    }));

  const intendente = items.filter((i) =>
    i.category?.toLowerCase().includes("intendente")
  );
  const sub = items.filter((i) => i.category?.toLowerCase().includes("sub"));
  const secretarios = items.filter(
    (i) =>
      i.category?.toLowerCase().includes("secretar") &&
      !i.category?.toLowerCase().includes("sub")
  );
  const directores = items.filter((i) =>
    i.category?.toLowerCase().includes("director")
  );
  const fiscales = items.filter((i) =>
    i.category?.toLowerCase().includes("fiscal")
  );
  const tribunal = items.filter((i) =>
    i.category?.toLowerCase().includes("tribunal")
  );
  const concejales = items.filter(
    (i) =>
      i.category?.toLowerCase().includes("concejo") ||
      i.category?.toLowerCase().includes("concejal")
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
