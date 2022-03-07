import Head from "next/head";
import { Header } from "../components/layouts/Header";

export default function mediosDePago() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Medios de Pago</title>
      </Head>

      <Header
        title="Medios de Pago"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />
      <div className="container py-5"></div>
    </>
  );
}
