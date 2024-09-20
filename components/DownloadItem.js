import React from "react";

export default function DownloadItem({ title, url, completed }) {
  return (
    <>
      {/* <li className={!url ? "d-none" : ""}>
        <span>{title}</span>
        <a href={url} className="btn btn-secondary" target="_blank">
          descargar {completed}
        </a>
      </li> */}
      <li>
        <span>{title}</span>
        {url ? (
          <a href={url} className="btn btn-secondary" target="_blank">
            descargar
          </a>
        ) : (
          <span className="btn btn-warning disabled">pendiente</span>
        )}
      </li>
    </>
  );
}
