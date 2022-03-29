import Head from "next/head";
import Header from "../components/Header";

export default function Institucional() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Institucional</title>
      </Head>

      <Header
        title="Institucional"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />
      <div className="container py-5"></div>
    </>
  );
}
