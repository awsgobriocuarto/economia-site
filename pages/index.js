import Head from "next/head";
import getListItems from "../services/getListItems";
import { Carousel } from "../components/elements/carousel/Carousel";
import Posts from "../components/elements/posts/Posts";
import { Panel } from "../components/elements/panel/Panel";
import Expirations from "../components/elements/expirations/Expirations";
import Cta from "../components/elements/cta/Cta";

export default function Home({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />

      <section>
        <div className="container">
          <Panel items={items} title="Gestiones Disponibles" />
        </div>
      </section>
      <Cta
        title="0800 555 5454 (opción 3)"
        text="Comunicate con nosotros de lunes a viernes de 7.30 a 13hs."
        cta="llamar ahora"
        url="tel:08004445454"
        urlExternal
      />
      <Posts />
      <Cta
        title="Objetivos de Desarrollo Sostenible"
        text="Río Cuarto adecua su política de ejecución presupuestaria a los lineamientos que establece la ONU"
        cta="Mas Información"
        url="/ods"
      />
      <Expirations />
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTksvNMhYA0ZsL3Xy0Xb8sqi4r7kbRwSQZo-HafVvS8Aup5PVJ7c_n-y642TYhZzWZ_DoAu4pZzIv2G/pub?output=csv";
  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page.toLowerCase().includes("home"));
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
