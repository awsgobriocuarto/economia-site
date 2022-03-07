import propTypes from "prop-types";
import { PanelItem } from "./PanelItem";

export const Panel = ({ items, title = "" }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <div className="row">
        {items.map((item) => (
          <PanelItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

Panel.propTypes = {
  items: propTypes.array.isRequired,
};
