import React from "react";
import Head from "next/head";
import Spinner from "../components/elements/spinner/Spinner";
import Header from "../components/Header";
import { useLegislations } from "../hooks/useLegislations";

export default function Legislacion() {
  const { legislations, loading } = useLegislations();

  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Legislación</title>
      </Head>

      <Header title="Legislacion" subtitle="" />
      <section className="legislations">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {legislations.map((Legislacion) => (
                    <React.Fragment key={Legislacion._id}>
                      {Legislacion.documents.length ? (
                        <div>
                          <h3>{Legislacion.title}</h3>
                          <ul>
                            {Legislacion.documents.map((document) => (
                              <li key={document._id}>
                                {document.name}
                                <a
                                  href={document.url}
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
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
