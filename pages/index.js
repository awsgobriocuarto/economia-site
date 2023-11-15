import Head from "next/head";
import getListItems from "../services/getListItems";
import { Slider } from "../components/elements/carousel";
import { Panel } from "../components/elements/panel/Panel";
import Expirations from "../components/elements/expirations/Expirations";
import Cta from "../components/elements/cta/Cta";
import PostsLatest from "../components/elements/posts/PostsLatest";
import fetchExpirations from "../services/fetchExpirations";
import BannerTop from "../components/BannerTop";

export default function Home({ items, expirations }) {
  //console.log(expirations);
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row g-0">
        <div className="col-md-4 col-lg-3 col-xl-2 order-1">
          <BannerTop />
        </div>
        <div className="col-md-8 col-lg-9 col-xl-10 order-2">
          <Slider />
        </div>
      </div>

      <div className="container">
        <div className="banner secondary mb-3">
          <div>
            <h3 className="mb-3 mb-sm-0">Domicilio Tributario Electrónico</h3>
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
        title="¿En qué podemos ayudarte?"
        text="Comunicate con nosotros por Whatsapp de lunes a viernes de 7.30 a 13hs."
        cta="Contactar"
        url="https://wa.me/+5493584121879"
        urlExternal
        icon="fab fa-fw fa-whatsapp"
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
