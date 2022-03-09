import Head from "next/head";
import getListItems from "../services/getListItems";
import { Carousel } from "../components/elements/carousel/Carousel";
import Posts from "../components/elements/posts/Posts";
import { Panel } from "../components/elements/panel/Panel";
import Calendar from "../components/elements/calendar/Calendar";
import Cta from "../components/elements/cta/Cta";

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
      <Posts />
      <Cta
        title="Lorem ipsum dolor sit."
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
            quis."
        cta="Link"
        url="/servicios"
      />
      <Calendar />
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
