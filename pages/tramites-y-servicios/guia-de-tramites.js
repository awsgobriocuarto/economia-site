import Head from "next/head";
import Header from "../../components/Header";
import { getFormalities } from "../../services/getFormalities";

export default function GuiaDeTramites({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Guía de Trámites</title>
      </Head>

      <Header title="Guía de Trámites" subtitle="" />
      <section>
        <div className="container">
          {items.map((item) => (
            <div key={item.id} className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-8 col-xl-9 mb-3 mb-lg-0">
                    <h5 className="card-title text-secondary">{item.title}</h5>
                    <div className="card-text">{item.description}</div>
                  </div>
                  <div className="col-lg-4 col-xl-3 ">
                    <div className="d-flex align-items-center justify-content-lg-end h-100">
                      {item.urlStart ? (
                        <a
                          href={item.urlStart}
                          target="_blank"
                          className="btn btn-primary text-white me-2"
                        >
                          Iniciar Trámite
                        </a>
                      ) : (
                        ""
                      )}
                      {item.urlMore ? (
                        <a
                          href={`https://tramites.riocuarto.gob.ar/tramites/${item.urlMore}`}
                          target="_blank"
                          className="btn btn-dark"
                        >
                          Mas info
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="banner secondary">
            <div>
              <h3>Consulta la guía de trámites completa</h3>
              <p className="lead">
                Accede ahora al listado de todo los trámites de la Secretaría de
                Economía
              </p>
            </div>
            <div>
              <form
                action="https://tramites.riocuarto.gov.ar/lista.php"
                method="post"
                target="_blank"
              >
                <input
                  type="hidden"
                  id="textobuscado"
                  name="textobuscado"
                  value="economia"
                />
                <input
                  type="hidden"
                  id="menulateral"
                  name="menulateral"
                  value="1"
                />
                <button
                  type="submit"
                  className="btn btn-primary text-white text-uppercase"
                >
                  Guía de Trámites
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const data = await getFormalities();
  const items = data;
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
