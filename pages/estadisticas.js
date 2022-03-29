import Head from "next/head";
import Header from "../components/Header";

export default function Estadisticas() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Estadísticas</title>
      </Head>

      <Header
        title="Estadísticas"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />
      <div className="container py-5"></div>
    </>
  );
}
