import Head from "next/head";
import SectionHeader from "../../components/SectionHeader";
import getListItems from "../../services/getListItems";
import { Panel } from "../../components/elements/panel/Panel";
import fetchExpirations from "../../services/fetchExpirations";
import Expirations from "../../components/elements/expirations/Expirations";

export default function pagosYDeudas({ items, expirations }) {
  // console.log(expirations);
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Pagos y Deudas</title>
      </Head>

      <section className="pt-5 pb-5">
        <div className="container">
          <SectionHeader
            title="PAGOS Y DEUDAS"
          />
          <Panel items={items} />
        </div>
      </section>
      <Expirations expirations={expirations} />
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTksvNMhYA0ZsL3Xy0Xb8sqi4r7kbRwSQZo-HafVvS8Aup5PVJ7c_n-y642TYhZzWZ_DoAu4pZzIv2G/pub?output=csv";
  const response = await getListItems.list({ url });
  const items = response.filter((i) =>
    i.page.toLowerCase().includes("deudas-y-pagos") &&
    !i.title?.toLowerCase().includes("medios de pago")
  );

  const expirations = await fetchExpirations.list();
  return {
    props: {
      items,
      expirations,
    },
    revalidate: 1,
  };
}
