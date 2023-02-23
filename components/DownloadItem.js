import React from "react";

export default function DownloadItem({ title, url }) {
  return (
    <li className={!url ? "d-none" : ""}>
      <span>{title}</span>
      <a href={url} className="btn btn-secondary" target="_blank">
        descargar
      </a>
    </li>
  );
}
