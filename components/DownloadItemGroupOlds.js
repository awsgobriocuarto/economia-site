import DownloadItem from "./DownloadItem";
import Accordion from "react-bootstrap/Accordion";

export default function DownloadItemGroupOlds({ items }) {
  const itemsFiltered = items.filter(
    (item) => item.status.toLowerCase() === "no vigente"
  );
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Anteriores</Accordion.Header>
        <Accordion.Body>
          <ul className="mb-0">
            {itemsFiltered.map((item) => (
              <DownloadItem
                key={item.title}
                title={item.title}
                url={item.url}
                status={item.status}
              />
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
