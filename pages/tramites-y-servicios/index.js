import Head from "next/head";
import { Panel } from "../../components/elements/panel/Panel";
import SectionHeader from "../../components/SectionHeader";

export default function servicios({ categories }) {
  return (
    <>
      <Head>
        <title>Sec. de Economia Río Cuarto - Tramites y Servicios</title>
      </Head>

      <section className="pt-5 pb-5">
        <div className="container">
          <SectionHeader
            title="TRÁMITES Y SERVICIOS"
          />
          
          {categories && categories.map((category) => (
            <div key={category.name} className="mb-5">
              <h2 className="text-primary mb-4" style={{ fontWeight: '700', fontSize: '1.75rem' }}>
                {category.name}
              </h2>
              <Panel items={category.items} />
            </div>
          ))}

          <div className="banner secondary mt-5">
            <div>
              <h3>Cedulón Digital</h3>
              <p className="lead">
                Consulta la cantidad de contribuyentes que ya se adhirieron al
                programa #AhoraDigital
              </p>
            </div>
            <div>
              <a
                className="btn btn-primary text-white text-uppercase"
                href="https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.statscedulon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar Datos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  let categories = [];
  try {
    const token = process.env.EXTERNAL_API_TOKEN;
    const res = await fetch(
      "https://gestionweb.gobiernoriocuarto.gob.ar/api/v1/procedures?area=3",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      const list = Array.isArray(data) ? data : (data.data && Array.isArray(data.data) ? data.data : []);
      
      const mappedItems = list.map((item) => ({
        id: item.id,
        title: item.title,
        url: item.url || "/",
        urlExternal: true,
        category: item.categories && item.categories.length > 0 ? item.categories[0].name : "Otros Trámites"
      }));

      const order = [
        "Ambiente y Sostenibilidad",
        "Pagos y Deudas",
        "Proveedores y Licitaciones",
        "Gestión de Propiedad y Contribuciones",
        "Habilitaciones, Registros y Licencias",
        "Tránsito y Movilidad"
      ];

      categories = order.map(catName => ({
        name: catName,
        items: mappedItems.filter(item => item.category === catName)
      })).filter(cat => cat.items.length > 0);

      // Si hay categorías que no están en el orden establecido, las agregamos al final
      const uniqueCatsInList = [...new Set(mappedItems.map(item => item.category))];
      uniqueCatsInList.forEach(catName => {
        if (!order.includes(catName)) {
          categories.push({
            name: catName,
            items: mappedItems.filter(item => item.category === catName)
          });
        }
      });

    } else {
      console.error("Error fetching procedures:", res.statusText);
    }
  } catch (error) {
    console.error("Error fetching procedures in getStaticProps:", error);
  }

  return {
    props: {
      categories,
    },
    revalidate: 60,
  };
}
