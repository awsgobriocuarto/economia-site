import Head from "next/head";
import Header from "../../components/Header";
import getListFormalities from "../../services/getListFormalities";

export default function GuiaDeTramites({ items }) {
  console.log(items);
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
                          href={item.urlMore}
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
          {/* <hr />
          <form
            action="http://tramites.riocuarto.gov.ar/lista.php"
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
            <li className="list-group-item">
              <button type="submit">Economia</button>
            </li>
          </form> */}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await getListFormalities.list();
  const items = response;
  console.log(response);
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
