import Head from "next/head";
import { Panel } from "../../components/elements/panel/Panel";
import SectionHeader from "../../components/SectionHeader";

import getListItems from "../../services/getListItems";

export default function Transparencia({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Transparencia</title>
      </Head>

      <section className="pt-5 pb-5">
        <div className="container">
          <SectionHeader title="TRANSPARENCIA" />
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
  const filteredItems = response.filter(
    (i) =>
      i.page.toLowerCase().includes("transparencia") &&
      i.title !== "Seguimiento de Expedientes"
  );

  const organigramaItem = {
    id: "organigrama-municipal",
    title: "Organigrama Municipal",
    url: "https://www.riocuarto.gob.ar/areas",
    urlExternal: true,
    page: "transparencia",
    iconUrl: "",
  };

  const items = [...filteredItems, organigramaItem];

  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
