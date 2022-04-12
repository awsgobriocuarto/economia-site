import Head from "next/head";
import { Panel } from "../../components/elements/panel/Panel";
import Header from "../../components/Header";
import getListItems from "../../services/getListItems";

export default function RegistroDeProveedores({ items }) {
  console.log(items);
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Registro De Proveedores</title>
      </Head>

      <Header title="Registro De Proveedores" subtitle="" />
      <section className="legislations">
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
    i.page.toLowerCase().includes("registro-de-proveedores")
  );
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}