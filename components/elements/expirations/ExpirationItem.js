import React from "react";
import moment from "moment";

export const ExpirationItem = ({ fecha, titulo, descripcion, url }) => {
  const today = moment().format("YYYY-MM-DD");

  if (today > fecha) {
    return;
  }

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="expiration-card-horizontal"
      >
        <div className="date-side">
          <span className="month">{moment(fecha).format("MMM")}</span>
          <span className="day">{moment(fecha).format("D")}</span>
        </div>
        <div className="info-side">
          <div className="text-content">
            <span className="ante-title">{descripcion}</span>
            <h4 className="title">{titulo}</h4>
            <div className="countdown">
              <span className={Math.abs(moment(fecha).diff(today, 'days')) > 7 ? "badge bg-secondary" : "badge bg-danger"}>
                Vence {moment(fecha).endOf("day").fromNow()}
              </span>
            </div>
          </div>
          <div className="action">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </a>
    </div>
  );
};
