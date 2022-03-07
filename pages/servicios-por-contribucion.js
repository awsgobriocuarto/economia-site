import Head from "next/head";
import { Header } from "../components/layouts/Header";

export default function serviciosPorContribucion() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Pagos y Deudas</title>
      </Head>

      <Header
        title="Servicios por Contribución"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />
      <div className="container py-5"></div>
    </>
  );
}
