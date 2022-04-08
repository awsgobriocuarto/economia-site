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

      <Header
        title="Servicios por Contribución"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />
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
  const response = await getListItems.list();
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
