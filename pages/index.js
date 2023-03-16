import Head from "next/head";
import getListItems from "../services/getListItems";
import { Slider } from "../components/elements/carousel";
import { Panel } from "../components/elements/panel/Panel";
import Expirations from "../components/elements/expirations/Expirations";
import Cta from "../components/elements/cta/Cta";
import PostsLatest from "../components/elements/posts/PostsLatest";
import fetchExpirations from "../services/fetchExpirations";

export default function Home({ items, expirations }) {
  //console.log(expirations);
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />

      <div className="container">
        <div className="banner secondary mb-3">
          <div>
            <h3 className="mb-3 mb-sm-0">Domicio Tributario Electrónico</h3>
            <p className="lead d-none d-sm-block">
              Domicilio web, seguro y gratuito para recibir comunicaciones
              oficiales del Gobierno de Río Cuarto
            </p>
          </div>
          <div>
            <a
              className="btn btn-primary text-white text-uppercase"
              href="http://cidi.riocuarto.gov.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adherite Ahora
            </a>
          </div>
        </div>
      </div>

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
      <PostsLatest limit={4} />
      <Cta
        title="Río Cuarto adhiere a los Objetivos de Desarrollo Sostenible"
        text="Adecuamos la política de ejecución presupuestaria a los lineamientos que establece la ONU"
        cta="Mas Información"
        url="/ods"
      />
      <Expirations expirations={expirations} />
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTksvNMhYA0ZsL3Xy0Xb8sqi4r7kbRwSQZo-HafVvS8Aup5PVJ7c_n-y642TYhZzWZ_DoAu4pZzIv2G/pub?output=csv";
  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page.toLowerCase().includes("home"));

  const expirations = await fetchExpirations.list();

  return {
    props: {
      items,
      expirations,
    },
    revalidate: 1,
  };
}
