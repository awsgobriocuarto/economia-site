import Head from "next/head";
import { Carousel } from "../components/elements/carousel/Carousel";
import { News } from "../components/elements/news/News";
import { Panel } from "../components/elements/panel/Panel";

const ITEMS_PANEL_HOME = [
  {
    id: 1,
    title: "Deudas y Pagos",
    iconUrl: "https://icongr.am/fontawesome/apple.svg?size=128&color=999999",
    url: "pagos-y-deudas",
    urlExternal: false,
  },
  {
    id: 2,
    title: "Servicios",
    iconUrl:
      "https://icongr.am/fontawesome/envelope-o.svg?size=128&color=999999",
    url: "servicios",
    urlExternal: false,
  },
  {
    id: 3,
    title: "Compras Web",
    iconUrl:
      "https://icongr.am/fontawesome/envelope-o.svg?size=128&color=999999",
    url: "compras-web",
    urlExternal: false,
  },
  {
    id: 4,
    title: "Trámites Online",
    iconUrl:
      "https://icongr.am/fontawesome/envelope-o.svg?size=128&color=999999",
    url: "https://admin.toteminsight.com/progressiveApp/5f04b1401320d01ab4a513f6/index.jade",
    urlExternal: true,
  },
  {
    id: 5,
    title: "Portal de Transparencia",
    iconUrl:
      "https://icongr.am/fontawesome/envelope-o.svg?size=128&color=999999",
    url: "http://transparencia.riocuarto.gov.ar/",
    urlExternal: true,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />
      <Panel items={ITEMS_PANEL_HOME} />
      <News />
    </>
  );
}
