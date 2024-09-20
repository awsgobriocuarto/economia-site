import DownloadItem from "./DownloadItem";

export default function DownloadItemGroup({ items }) {
  const itemsFiltered = items.filter(
    (item) => item.status.toLowerCase() === "vigente"
  );
  return (
    <ul>
      {itemsFiltered.map((item) => (
        <DownloadItem
          key={item.title}
          title={item.title}
          url={item.url}
          status={item.status}
          completed={item.completed ? item.completed : ""}
        />
      ))}
    </ul>
  );
}
