import DownloadItem from "./DownloadItem";

export default function DownloadItemGroup({ items }) {
  const itemsFiltered = items.filter(
    (item) => item.status?.toLowerCase() === "vigente"
  );
  return (
    <div className="download-group-container">
      {itemsFiltered.map((item, idx) => (
        <DownloadItem
          key={`${item.title}-${idx}`}
          title={item.title}
          url={item.url}
          status={item.status}
        />
      ))}
      <style jsx>{`
        .download-group-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
