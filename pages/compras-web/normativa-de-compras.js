import Head from "next/head";
import Header from "../../components/Header";
import getListRegulations from "../../services/getListRegulations";

export default function NormativaDeCompras({ items }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Normativa de Compras</title>
      </Head>

      <Header title="Normativa de Compras" subtitle="" />
      <section className="legislations">
        <div className="container">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.title}
                <a
                  href={item.url}
                  className="btn btn-secondary"
                  target="_blank"
                >
                  descargar
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const response = await getListRegulations.list();
  const items = response;
  return {
    props: {
      items,
    },
    revalidate: 1,
  };
}
