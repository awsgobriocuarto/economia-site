import Head from "next/head";
import getListItems from "../services/getListItems";
import { Carousel } from "../components/elements/carousel/Carousel";
import { News } from "../components/elements/news/News";
import { Panel } from "../components/elements/panel/Panel";

export default function Home({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />
      <div className="container">
        <Panel items={items} title="Gestiones Disponibles" />
      </div>
      <News />
    </>
  );
}

export async function getStaticProps() {
  const response = await getListItems.list();
  const items = response.filter((i) => i.page.toLowerCase().includes("home"));
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
