import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import { getDeclarations } from "../../services/fetchDDJJApi";
import DownloadItemDDJJ from "../../components/DownloadItemDDJJ";

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
                <h3 className="text-primary">{item.name}</h3>
                <ul className="mb-3">
                  {item.users.map((user) => (
                    <React.Fragment key={user.id}>
                      <DownloadItemDDJJ name={user.name} state={user.declarations ? user.declarations.state : ""} url={user.declarations ? user.declarations.public_url : ""} />
                    </React.Fragment>
                  ))}
                </ul>
                {item.children.length == 0 ? "" : (
                  <ul className="">
                    {item.children.map((child) => (
                      <React.Fragment key={child.id}>

                        {child.users.length == 0 ? "" : (
                          <>
                            <h5>
                              {child.name}
                            </h5>
                            <ul>
                              {child.users.map((user) => (
                                <React.Fragment key={user.id}>
                                  <DownloadItemDDJJ name={user.name} state={user.declarations ? user.declarations.state : ""} url={user.declarations ? user.declarations.public_url : ""} />
                                </React.Fragment>
                              ))}
                            </ul>
                          </>
                        )}</React.Fragment>

                    ))}
                  </ul>
                )}
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
