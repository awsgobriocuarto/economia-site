import Link from "next/link";

export const PanelItem = ({ item }) => {
  return (
    <>
      {item.title && (
        <div className="col-md-6 col-lg-5 col-xl-4">
          <Link href={item.url ? item.url : "/"}>
            <a
              target={item.urlExternal ? "_blank" : "_self"}
              className="panel animate__animated animate__fadeIn"
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
