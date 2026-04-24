import React from "react";
import Head from "next/head";
import Link from "next/link";
import getListItems from "../services/getListItems";
import { Slider } from "../components/elements/carousel";
import { Panel } from "../components/elements/panel/Panel";
import Expirations from "../components/elements/expirations/Expirations";
import PostsLatest from "../components/elements/posts/PostsLatest";
import InnovationLatest from "../components/elements/posts/InnovationLatest";
import fetchExpirations from "../services/fetchExpirations";
// BannerTop removido — hero full-width
import SearchBox from "../components/SearchBox";

// =============================================
// ACCESOS RÁPIDOS — Estilo portal municipal
// =============================================
const quickAccessItems = [
  {
    id: "qa1",
    title: "Pagos y Deudas",
    subtitle: "Pagá tus cuentas",
    icon: "fa-file-invoice-dollar",
    url: "https://economia.riocuarto.gov.ar/",
    external: true,
    bgColor: "#ff3399"
  },
  {
    id: "qa2",
    title: "Turnos Online",
    subtitle: "Solicitá tu turno",
    icon: "fa-calendar-check",
    url: "https://turnos.riocuarto.gov.ar/",
    external: true,
    bgColor: "#ff7b25"
  },
  {
    id: "qa3",
    title: "Trámites",
    subtitle: "Gestiones digitales",
    icon: "fa-tasks",
    url: "/tramites-y-servicios",
    external: false,
    bgColor: "#0099db"
  },
  {
    id: "qa4",
    title: "Compras Web",
    subtitle: "Ingresar a la web",
    icon: "fa-gavel",
    url: "https://comprasweb.economiariocuarto.gob.ar/",
    external: true,
    bgColor: "#00cc66"
  },
];

// =============================================
// TRÁMITES FRECUENTES
// =============================================
const commonFormalities = [
  { id: "f1", title: "Licencia de Conducir", iconUrl: "fa-id-card", url: "https://tramites.riocuarto.gov.ar/tramite/6/licencia-de-conducir", urlExternal: true },
  { id: "f2", title: "Impresión de Cedulones", iconUrl: "fa-print", url: "https://economia.riocuarto.gov.ar/", urlExternal: true },
  { id: "f3", title: "Libre Deuda Municipal", iconUrl: "fa-file-invoice", url: "https://tramites.riocuarto.gov.ar/tramite/49/libre-deuda-de-multas-personales-y-de-transito", urlExternal: true },
  { id: "f4", title: "Turnos Online", iconUrl: "fa-calendar-check", url: "https://turnos.riocuarto.gov.ar/", urlExternal: true },
  { id: "f5", title: "Habilitación de Comercio", iconUrl: "fa-store", url: "https://tramites.riocuarto.gov.ar/tramite/10/habilitacion-comercial-clase-i-ii-y-iii", urlExternal: true },
  { id: "f6", title: "Atención al Ciudadano", iconUrl: "fa-user-tie", url: "https://wa.me/+5493584121879", urlExternal: true },
  { id: "f7", title: "Consulta de Expedientes", iconUrl: "fa-search", url: "https://tramites.riocuarto.gov.ar/tramite/11/consulta-de-expedientes", urlExternal: true },
  { id: "f8", title: "Baja de Vehículos", iconUrl: "fa-car-side", url: "https://tramites.riocuarto.gov.ar/tramite/2/baja-de-automotores", urlExternal: true },
  { id: "f9", title: "Plan de Pagos", iconUrl: "fa-hand-holding-usd", url: "https://economia.riocuarto.gov.ar/", urlExternal: true },
  { id: "f10", title: "Catastro y Obras Privadas", iconUrl: "fa-building", url: "https://tramites.riocuarto.gov.ar/tramite/1/aprobacion-de-planos-de-obra-privada", urlExternal: true },
];

// =============================================
// COMPONENTE DE ACCESO RÁPIDO
// =============================================
function QuickAccessItem({ item }) {
  const content = (
    <div className="quick-access-box" style={{ backgroundColor: item.bgColor }}>
      <div className="qa-box-icon">
        <i className={`fas fa-fw ${item.icon}`}></i>
      </div>
      <div className="qa-box-text">
        <span className="qa-box-title">{item.title}</span>
        <span className="qa-box-subtitle">{item.subtitle}</span>
      </div>
    </div>
  );

  if (item.external) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" id={`quick-access-${item.id}`}>
        {content}
      </a>
    );
  }

  return (
    <Link href={item.url}>
      <a id={`quick-access-${item.id}`}>
        {content}
      </a>
    </Link>
  );
}

// =============================================
// PÁGINA HOME
// =============================================
export default function Home({ items, expirations }) {
  const [randomFormalities, setRandomFormalities] = React.useState([]);

  React.useEffect(() => {
    setRandomFormalities([...commonFormalities].sort(() => 0.5 - Math.random()).slice(0, 6));
  }, []);

  return (
    <>
      <Head>
        <title>Secretaría de Economía e Innovación — Municipalidad de Río Cuarto</title>
        <meta name="description" content="Secretaría de Economía e Innovación de la Municipalidad de Río Cuarto. Pagos, trámites, transparencia y gestión municipal digital." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ===== HERO: SLIDER FULL-WIDTH ===== */}
      <div className="hero-full">
        <Slider />
      </div>

      {/* ===== PORTAL SEARCH SECTION ===== */}
      <section className="portal-search-section pt-5 pb-4">
        <div className="container text-center">
            <h1 className="portal-title mb-4">¡Hola! ¿Cómo podemos ayudarte?</h1>
            <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                    <SearchBox />
                </div>
            </div>
        </div>
      </section>

      {/* ===== ACCESOS RÁPIDOS ===== */}
      <section className="quick-access-portal-section pb-5">
        <div className="container">
            <div className="quick-access-portal-grid">
                {quickAccessItems.map((item) => (
                    <QuickAccessItem key={item.id} item={item} />
                ))}
            </div>
        </div>
      </section>

      {/* ===== TRÁMITES ===== */}
      <section className="py-5" style={{ background: '#f4f6f9' }}>
        <div className="container">
          <Panel
            items={randomFormalities}
            title="TRÁMITES Y SERVICIOS"
            subtitle="RESOLVÉ TUS GESTIONES ONLINE"
            bgImage="/images/section-bg-tramites.jpg"
          />
          <div className="text-center mt-4">
            <Link href="/tramites-y-servicios">
              <a className="btn btn-outline-info btn-lg px-5 py-3 rounded-pill" style={{ fontWeight: 600, borderWidth: '1.5px' }}>
                Ver todos los Trámites
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GESTIONES ===== */}
      <section className="py-5" style={{ background: 'white' }}>
        <div className="container">
          <Panel
            items={items}
            title="GESTIONES"
            subtitle="OTRAS GESTIONES MUNICIPALES"
            bgImage="/images/section-bg-gestiones.png"
          />
        </div>
      </section>

      {/* ===== BANNERS CTA: DOMICILIO ELECTRÓNICO + EXPERIENCIA ===== */}
      <section className="pb-5 pt-0" style={{ background: 'white' }}>
        <div className="container">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="banner banner-box secondary mb-3">
                <div>
                  <h4 className="mb-2 mb-md-1">
                    Domicilio Tributario Electrónico
                  </h4>
                  <p className="lead">
                    Domicilio web, seguro y gratuito para recibir comunicaciones
                    oficiales del Gobierno de Río Cuarto.
                  </p>
                </div>
                <div>
                  <a
                    className="btn btn-outline-light text-white text-uppercase"
                    href="http://cidi.riocuarto.gov.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-domicilio-electronico"
                  >
                    <i className="fas fa-fw fa-envelope-open-text me-2"></i>
                    Adherite Ahora
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="banner banner-box primary mb-3">
                <div>
                  <h4 className="mb-2 mb-md-1">Contanos tu experiencia</h4>
                  <p className="lead">
                    Déjanos tus sugerencias, quejas o felicitaciones sobre el
                    servicio de atención al contribuyente.
                  </p>
                </div>
                <div>
                  <a
                    className="btn btn-outline-light text-white text-uppercase"
                    href="https://forms.gle/tE9ANvStj7eAyFKb9"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="btn-experiencia"
                  >
                    <i className="fas fa-fw fa-star me-2"></i>
                    Accede Aquí
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ===== NOVEDADES ===== */}
      <PostsLatest limit={6} />

      {/* ===== DESARROLLOS INNOVACIÓN ===== */}
      <InnovationLatest />


      {/* ===== VENCIMIENTOS ===== */}
      <Expirations expirations={expirations} />
    </>
  );
}

export async function getStaticProps() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTksvNMhYA0ZsL3Xy0Xb8sqi4r7kbRwSQZo-HafVvS8Aup5PVJ7c_n-y642TYhZzWZ_DoAu4pZzIv2G/pub?output=csv";
  const response = await getListItems.list({ url });
  const items = response.filter((i) => i.page?.toLowerCase().includes("home"));

  const expirations = await fetchExpirations.list();

  return {
    props: {
      items,
      expirations,
    },
    revalidate: 1,
  };
}
