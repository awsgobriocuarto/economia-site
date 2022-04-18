import { useRouter } from "next/router";
import Link from "next/link";

export const PanelItem = ({ item }) => {
  const router = useRouter();
  const handleEventClick = (button = "") => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "custom.gtm.buttonClicked",
      category: "clicks",
      button: button,
      path: router.pathname,
    });
  };
  return (
    <>
      {item.title && (
        <div className="col-md-6 col-lg-5 col-xl-4">
          <Link href={item.url ? item.url : "/"}>
            <a
              target={item.urlExternal ? "_blank" : "_self"}
              className="panel animate__animated animate__fadeIn"
              onClick={() => handleEventClick(item.title)}
            >
              <div className="panel-item">
                <div className="icon">
                  <i className={`fas fa-2x ${item.iconUrl}`}></i>
                </div>
                <p>{item.title}</p>
              </div>
            </a>
          </Link>
        </div>
      )}
    </>
  );
};
