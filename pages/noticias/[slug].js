import Head from "next/head";
import Header from "../../components/Header";

export default function Noticias() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto</title>
      </Head>

      <Header
        title="Novedad"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />

      <div className="container py-5">
        <h1>Detalle de la Noticia</h1>
      </div>
    </>
  );
}
