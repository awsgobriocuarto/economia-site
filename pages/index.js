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
    url: "https://www.riocuarto.gob.ar/tramites?area=economia-e-innovacion&category=pagos-y-deudas",
    external: true,
  },
  {
    id: "qa2",
    title: "Turnos Online",
    subtitle: "Solicitá tu turno",
    icon: "fa-calendar-check",
    url: "https://turnos.riocuarto.gov.ar/",
    external: true,
  },
  {
    id: "qa3",
    title: "Trámites",
    subtitle: "Gestiones digitales",
    icon: "fa-tasks",
    url: "https://www.riocuarto.gob.ar/tramites?area=economia-e-innovacion",
    external: true,
  },
  {
    id: "qa4",
    title: "Compras Web",
    subtitle: "Ingresar a la web",
    icon: "fa-gavel",
    url: "https://comprasweb.economiariocuarto.gob.ar/",
    external: true,
  },
];

// =============================================
// TRÁMITES FRECUENTES
// =============================================
const commonFormalities = [
  { id: "f1", title: "Inmobiliario: Consulta y Pago", iconUrl: "fa-home", url: "https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.hceduimpmul?Inmo", urlExternal: true },
  { id: "f2", title: "Impresión de Cedulones", iconUrl: "fa-print", url: "https://economia.riocuarto.gov.ar/", urlExternal: true },
  { id: "f3", title: "Libre Deuda Municipal", iconUrl: "fa-file-invoice", url: "https://tramites.riocuarto.gov.ar/tramite/49/libre-deuda-de-multas-personales-y-de-transito", urlExternal: true },
  { id: "f4", title: "Inscripción de Proveedores", iconUrl: "fa-handshake", url: "https://www.riocuarto.gob.ar/tramites/inscripcion-de-proveedores", urlExternal: true },
  { id: "f5", title: "Habilitación de Comercio", iconUrl: "fa-store", url: "https://tramites.riocuarto.gov.ar/tramite/10/habilitacion-comercial-clase-i-ii-y-iii", urlExternal: true },
  { id: "f6", title: "Atención al Ciudadano", iconUrl: "fa-user-tie", url: "https://wa.me/+5493584121879", urlExternal: true },
  { id: "f7", title: "Consulta de Expedientes", iconUrl: "fa-search", url: "https://tramites.riocuarto.gov.ar/tramite/11/consulta-de-expedientes", urlExternal: true },
  { id: "f8", title: "Comercio/Industria: Consulta y Pago", iconUrl: "fa-industry", url: "https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.hceduimpmul?Come", urlExternal: true },
  { id: "f9", title: "Patentes: Consulta y Pago", iconUrl: "fa-car", url: "https://app.riocuarto.gov.ar:8443/gestiontributaria/servlet/com.recursos.hceduimpmul?Pate", urlExternal: true },
  { id: "f10", title: "Catastro y Obras Privadas", iconUrl: "fa-building", url: "https://tramites.riocuarto.gov.ar/tramite/1/aprobacion-de-planos-de-obra-privada", urlExternal: true },
];

// =============================================
// COMPONENTE DE ACCESO RÁPIDO
// =============================================
function QuickAccessItem({ item }) {
  const { icon, title, subtitle } = item;

  const content = (
    <div className="quick-access-box">
      <div className="qa-box-icon">
        <i className={`fas fa-fw ${icon}`} aria-hidden="true"></i>
      </div>
      <div className="qa-box-text">
        <span className="qa-box-title">{title}</span>
        <span className="qa-box-subtitle">{subtitle}</span>
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
    const mandatoryIds = ['f1', 'f8', 'f9', 'f4'];
    const mandatoryItems = commonFormalities.filter(f => mandatoryIds.includes(f.id));
    const otherItems = commonFormalities.filter(f => !mandatoryIds.includes(f.id));
    const shuffledOthers = [...otherItems].sort(() => 0.5 - Math.random()).slice(0, 2);
    const finalSelection = [...mandatoryItems, ...shuffledOthers];
    setRandomFormalities(finalSelection.sort(() => 0.5 - Math.random()));
  }, []);

  return (
    <>
      <Head>
        <title>Secretaría de Economía e Innovación — Municipalidad de Río Cuarto</title>
        <meta name="description" content="Secretaría de Economía e Innovación de la Municipalidad de Río Cuarto. Pagos, trámites, transparencia y gestión municipal digital." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ===== HERO: SLIDER ===== */}
      <div className="hero-section-container">
        <Slider />
      </div>

      {/* ===== PORTAL SEARCH SECTION ===== */}
      <section className="portal-search-section pt-5 pb-4">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <SearchBox />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACCESOS RÁPIDOS ===== */}
      <section className="quick-access-portal-section py-5">
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
            title="TRÁMITES MÁS CONSULTADOS"
            subtitle="RESOLVÉ TUS GESTIONES ONLINE"
          />
        </div>
      </section>

      {/* ===== GESTIONES ===== */}
      <section className="py-5" style={{ background: 'white' }}>
        <div className="container">
          <Panel
            items={items}
            title="GESTIONES"
            subtitle="OTRAS GESTIONES MUNICIPALES"
          />
        </div>
      </section>

      {/* ===== BANNERS CTA: DOMICILIO ELECTRÓNICO + EXPERIENCIA ===== */}
      <section className="py-5" style={{ background: 'white' }}>
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
