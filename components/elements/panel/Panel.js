import Link from "next/link";
import React from "react";

export const Panel = ({ items }) => {
  return (
    <section>
      <div className="container">
        <h2>Gestiones Disponibles</h2>
        <div className="row justify-content-center">
          {items.map((item) => (
            <div key={item.id} className="col-md-4">
              <Link href={item.url}>
                <a
                  target={item.urlExternal && "_blank"}
                  className="panel animate__animated animate__fadeIn"
                >
                  <div className="panel-item">
                    <div className="icon">
                      <img src={item.iconUrl} alt="" />
                    </div>
                    <p>{item.title}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
