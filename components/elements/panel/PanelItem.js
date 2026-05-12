import { useRouter } from "next/router";
import Link from "next/link";

export const PanelItem = ({ item, variant }) => {
  const router = useRouter();

  const getIcon = (title, iconUrl) => {
    const t = title.toLowerCase();
    if (t.includes("boletín")) return "fa-newspaper";
    if (t.includes("escala")) return "fa-money-bill-wave";
    if (t.includes("declaraciones")) return "fa-file-signature";
    if (t.includes("legislación") || t.includes("ordenanza")) return "fa-balance-scale";
    if (t.includes("económica") || t.includes("financiera")) return "fa-chart-pie";
    if (t.includes("presupuesto")) return "fa-calculator";
    if (t.includes("expedientes")) return "fa-search-location";
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
        <div className="col-12 col-md-6 col-lg-5 col-xl-4 mb-3">
          <Link href={item.url ? item.url : "/"}>
            <a
              target={item.urlExternal ? "_blank" : "_self"}
              className={`panel animate__animated animate__fadeIn ${variant === 'gestiones' ? 'panel-gestiones' : ''}`}
              onClick={() => handleEventClick(item.title)}
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
