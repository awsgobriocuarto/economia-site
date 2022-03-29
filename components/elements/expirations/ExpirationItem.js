import React from "react";
import moment from "moment";

export const ExpirationItem = ({ fecha, titulo, descripcion, url }) => {
  const today = moment().format("YYYY-MM-DD");
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-header">
          <div>{moment(fecha).format("DD/MM/YYYY")}</div>
          <div>
            <i className="fas fa-calendar-alt fa-lg"></i>
          </div>
        </div>
        <div className="card-body">
          <div className="card-antetitle">{descripcion}</div>
          <h3 className="card-title">{titulo}</h3>
          <div className="card-countdown">
            <span
              className={
                Math.abs(
                  moment(fecha).format("DDDD") - moment(today).format("DDDD")
                ) > "7"
                  ? "badge bg-secondary"
                  : "badge bg-danger"
              }
            >
              Vence {moment(fecha).endOf("day").fromNow()}{" "}
            </span>
          </div>

          <a
            href={url}
            className="btn btn-sm btn-dark"
            target="_blank"
            rel="noreferrer noopener"
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
};
