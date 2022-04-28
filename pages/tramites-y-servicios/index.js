import Head from "next/head";
import { Panel } from "../../components/elements/panel/Panel";
import Header from "../../components/Header";

import getListItems from "../../services/getListItems";

export default function servicios({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Tramites y Servicios</title>
      </Head>

      <Header title="Tramites y Servicios" subtitle="" />

      <section>
        <div className="container">
          <Panel items={items} />
          <div className="banner secondary">
            <div>
              <h3>Cedulón Digital</h3>
              <p className="lead">
                Consulta la cantidad de contribuyentes que ya se adhirieron al
                programa #AhoraDigital
              </p>
            </div>
            <div>
              <a
                className="btn btn-primary text-white text-uppercase"
                href="https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.statscedulon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar Datos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTksvNMhYA0ZsL3Xy0Xb8sqi4r7kbRwSQZo-HafVvS8Aup5PVJ7c_n-y642TYhZzWZ_DoAu4pZzIv2G/pub?output=csv";
  const response = await getListItems.list({ url });
  const items = response.filter((i) =>
    i.page.toLowerCase().includes("servicios")
  );
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
