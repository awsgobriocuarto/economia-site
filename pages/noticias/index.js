import Head from "next/head";
import Posts from "../../components/elements/posts/Posts";
import Header from "../../components/Header";

export default function Noticias() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Novedades</title>
      </Head>

      <Header title="Novedades" subtitle="" />
      <Posts />
    </>
  );
}
