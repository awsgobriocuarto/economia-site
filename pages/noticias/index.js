import Head from "next/head";
import { News } from "../../components/elements/news/News";
import Header from "../../components/Header";

export default function Noticias() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
      </Head>

      <Header
        title="Novedades"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />
      <News />
    </>
  );
}
