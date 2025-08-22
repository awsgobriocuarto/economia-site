import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import { getDeclarations } from "../../services/fetchDDJJApi";

export default function DeclaracionesJuradas({ items }) {
  console.log(items);

  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Declaraciones Juradas</title>
      </Head>

      <Header title="Declaraciones Juradas 2025" subtitle="" />

      <section className="legislations">
        <div className="container">
          {items.map((item) => (
            <div className="group" key={item.id}>
              <div className="current">
                <h3>{item.name}</h3>
                {item.users.map((user) => (
                  <ul key={user.id}>
                    <li className="">
                      <span className="text-uppercase">{user.name}</span>
                      {user.declarations.length == 0 ? <span className="btn btn-warning disabled">pendiente</span> : (
                        <>
                          {user.declarations.map((declaration) => (
                            <span key={declaration.id}>
                              <a href={declaration.public_url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                descargar
                              </a>
                            </span>
                          ))}
                        </>
                      )}

                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
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
      </section >
    </>
  );
}

export async function getStaticProps() {

  const items = await getDeclarations();


  return {
    props: {
      items
    }
  };
}
