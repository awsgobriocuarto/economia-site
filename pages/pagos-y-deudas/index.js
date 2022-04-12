import Head from "next/head";
import Header from "../../components/Header";
import getListItems from "../../services/getListItems";
import { Panel } from "../../components/elements/panel/Panel";

export default function pagosYDeudas({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Pagos y Deudas</title>
      </Head>

      <Header title="Pagos y Deudas" subtitle="" />
      <section>
        <div className="container">
          <Panel items={items} />
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
    i.page.toLowerCase().includes("deudas-y-pagos")
  );
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
