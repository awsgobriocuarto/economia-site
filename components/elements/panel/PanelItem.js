import { useRouter } from "next/router";
import Link from "next/link";

export const PanelItem = ({ item, variant }) => {
  const router = useRouter();

  const getIcon = (title, iconUrl) => {
    const t = title.toLowerCase();
    
    // Iconos prioritarios o específicos de trámites
    if (t.includes("patente")) return "fa-car";
    if (t.includes("automotor") || t.includes("vehículo")) return "fa-car";
    if (t.includes("inmobiliario") || t.includes("inmobiliaria") || t.includes("propiedad")) return "fa-home";
    if (t.includes("comercio") || t.includes("industria")) return "fa-store";
    if (t.includes("emos") || t.includes("agua")) return "fa-tint";
    if (t.includes("vivienda") || t.includes("terreno")) return "fa-map-marked-alt";
    if (t.includes("cementerio") || t.includes("nicho") || t.includes("panteón")) return "fa-monument";
    if (t.includes("licitación") || t.includes("concurso") || t.includes("subasta")) return "fa-gavel";
    if (t.includes("proveedor")) return "fa-handshake";
    if (t.includes("prescripción")) return "fa-history";
    if (t.includes("fiscal") || t.includes("situación")) return "fa-file-invoice-dollar";
    if (t.includes("discapacidad")) return "fa-wheelchair";
    if (t.includes("baja")) return "fa-minus-circle";
    if (t.includes("notarial")) return "fa-pen-fancy";
    if (t.includes("jubilado") || t.includes("pensionado")) return "fa-user-friends";
    if (t.includes("judicial") || t.includes("oficio")) return "fa-balance-scale";
    if (t.includes("veterano") || t.includes("malvinas") || t.includes("excombatiente")) return "fa-medal";
    if (t.includes("verificación") || t.includes("pago") || t.includes("deuda")) return "fa-receipt";
    if (t.includes("intimación")) return "fa-exclamation-triangle";
    if (t.includes("requerimiento") || t.includes("fiscalización")) return "fa-clipboard-check";
    if (t.includes("evento") || t.includes("esporádico")) return "fa-calendar-day";
    if (t.includes("redeterminación") || t.includes("precio")) return "fa-calculator";
    
    // Iconos originales
    if (t.includes("boletín")) return "fa-newspaper";
    if (t.includes("escala")) return "fa-money-bill-wave";
    if (t.includes("declaraciones")) return "fa-file-signature";
    if (t.includes("legislación") || t.includes("ordenanza")) return "fa-balance-scale";
    if (t.includes("económica") || t.includes("financiera")) return "fa-chart-pie";
    if (t.includes("presupuesto")) return "fa-calculator";
    if (t.includes("expedientes")) return "fa-search-location";
    if (t.includes("organigrama")) return "fa-sitemap";
    if (t.includes("cedulón") || t.includes("digital")) return "fa-tablet-alt";
    
    // Return provided icon if exists, else default
    return iconUrl || "fa-file-alt";
  };

  const handleEventClick = (button = "") => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "custom.gtm.buttonClicked",
      category: "clicks",
      button: button,
      path: router.pathname,
    });
  };

  const currentIcon = getIcon(item.title || "", item.iconUrl);

  return (
    <>
      {item.title && (
        <div className="col-12 col-md-6 col-lg-4 mb-3" style={{ display: 'flex' }}>
          <Link href={item.url ? item.url : "/"}>
            <a
              target={item.urlExternal ? "_blank" : "_self"}
              className={`panel animate__animated animate__fadeIn ${variant === 'gestiones' ? 'panel-gestiones' : ''}`}
              onClick={() => handleEventClick(item.title)}
              title={item.title}
            >
              <div className="panel-item-horizontal">
                <div className="icon-side">
                  <i className={`fas fa-2x ${currentIcon}`}></i>
                </div>
                <div className="text-side">
                  <p>{item.title}</p>
                </div>
                <div className="chevron-side">
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};
