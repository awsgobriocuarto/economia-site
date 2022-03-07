import Head from "next/head";
import { Header } from "../components/layouts/Header";

export default function Tutoriales() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Tutoriales</title>
      </Head>

      <Header
        title="Tutoriales"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />
      <div className="container py-5"></div>
    </>
  );
}
