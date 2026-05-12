import Head from "next/head";
import Posts from "../../components/elements/posts/Posts";
import SectionHeader from "../../components/SectionHeader";

export default function Noticias() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Novedades</title>
      </Head>

      <SectionHeader title="Novedades" />

      <div className="pt-0 pb-5">
        <Posts />
      </div>
    </>
  );
}
