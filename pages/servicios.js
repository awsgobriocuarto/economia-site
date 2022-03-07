import Head from "next/head";
import React from "react";
import { Panel } from "../components/elements/panel/Panel";
import { Header } from "../components/layouts/Header";
import getListItems from "../services/getListItems";

export default function servicios({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Servicios</title>
      </Head>

      <Header
        title="Servicios"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />

      <div className="container py-5">
        <Panel items={items} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await getListItems.list();
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
