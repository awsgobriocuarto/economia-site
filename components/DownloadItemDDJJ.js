export default function DownloadItemDDJJ({ name, state, url }) {
  return (
    <li>
      <span className="text-uppercase">{name}</span>
      {(state == 4) ? (
        <a a href={url} className="btn btn-secondary" target="_blank">
          descargar
        </a>
      ) : (
        <span className="btn btn-warning disabled">pendiente</span>
      )
      }
    </li >
  );
}
