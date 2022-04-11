import Head from "next/head";
import Header from "../../components/Header";
import getListItems from "../../services/getListItems";
import { Panel } from "../../components/elements/panel/Panel";

export default function serviciosPorContribucion({ items1, items2 }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Servicios por Contribución</title>
      </Head>

      <Header title="Servicios por Contribución" subtitle="" />
      <section>
        <div className="container">
          <h4 className="mb-3">Comercio e Industria</h4>
          <Panel items={items1} />
          {items2.length ? (
            <>
              <h4 className="mb-3">Inmobiliario</h4>
              <Panel items={items2} />
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTksvNMhYA0ZsL3Xy0Xb8sqi4r7kbRwSQZo-HafVvS8Aup5PVJ7c_n-y642TYhZzWZ_DoAu4pZzIv2G/pub?output=csv";
  const response = await getListItems.list({ url });
  const items1 = response.filter((i) =>
    i.page.toLowerCase().includes("comercio-e-industria")
  );
  const items2 = response.filter((i) =>
    i.page.toLowerCase().includes("inmobiliario")
  );
  return {
    props: {
      items1,
      items2,
    },
    revalidate: 1,
  };
}
