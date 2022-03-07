import Head from "next/head";
import React from "react";
import { Panel } from "../components/elements/panel/Panel";
import { Header } from "../components/layouts/Header";
import getListItems from "../services/getListItems";

export default function comprasWeb({ items = [] }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Compras Web</title>
      </Head>
      <Header
        title="Compras Web"
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
    i.page.toLowerCase().includes("compras-web")
  );
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
