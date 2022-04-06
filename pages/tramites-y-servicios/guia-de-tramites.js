import Head from "next/head";
import Header from "../../components/Header";

export default function GuiaDeTramites() {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Guía de Trámites</title>
      </Head>

      <Header
        title="Guía de Trámites"
        subtitle="Lorem ipsum dolor sit amet consectetur"
      />
      <section>
        <div className="container">
          detalle
          <form
            action="http://tramites.riocuarto.gov.ar/lista.php"
            method="post"
            target="_blank"
          >
            <input
              type="hidden"
              id="textobuscado"
              name="textobuscado"
              value="economia"
            />
            <input
              type="hidden"
              id="menulateral"
              name="menulateral"
              value="1"
            />
            <li className="list-group-item">
              <button type="submit">Economia</button>
            </li>
          </form>
        </div>
      </section>
    </>
  );
}
