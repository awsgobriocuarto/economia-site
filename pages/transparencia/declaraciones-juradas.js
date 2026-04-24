import React from "react";
import Head from "next/head";
import DownloadItemGroup from "../../components/DownloadItemGroup";
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

      <div className="ddjj-header py-5">
        <div className="container">
          <div className="d-flex align-items-center gap-4">
            <img
              src="/images/icono-titulos.webp"
              alt=""
              style={{ height: "85px", width: "auto" }}
            />
            <div>
              <h1 className="ddjj-title">Declaraciones Juradas</h1>
              <p className="ddjj-subtitle">SECRETARÍA DE ECONOMÍA · MUNICIPALIDAD DE RÍO CUARTO</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ddjj-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #000;
          text-transform: uppercase;
          letter-spacing: -0.04rem;
          line-height: 1;
          margin: 0;
        }
        .ddjj-subtitle {
          font-size: 1.15rem;
          font-weight: 500;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 0.15rem;
          margin: 6px 0 0;
        }
        @media (max-width: 767px) {
          .ddjj-title {
            font-size: 1.6rem;
          }
          .ddjj-subtitle {
            font-size: 0.85rem;
            letter-spacing: 0.05rem;
          }
          .ddjj-header img {
            height: 52px !important;
          }
        }
      `}</style>

      <section className="legislations">
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
