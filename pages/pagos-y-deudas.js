import Head from "next/head";
import getListItems from "../services/getListItems";
import Header from "../components/Header";
import { Panel } from "../components/elements/panel/Panel";

const breadcrumbs = [
  { breadcrumb1: true, title: "german" },
  { breadcrumb2: true, title: "sayago" },
];

export default function pagosYDeudas({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Pagos y Deudas</title>
      </Head>

      <Header
        title="Pagos y Deudas"
        subtitle="Lorem ipsum dolor sit amet consectetur"
        breadcrumbs={breadcrumbs}
      />
      <section>
        <div className="container">
          <Panel items={items} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await getListItems.list();
  const items = response.filter((i) =>
    i.page.toLowerCase().includes("deudas-y-pagos")
  );
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
