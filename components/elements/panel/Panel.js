import propTypes from "prop-types";
import { PanelItem } from "./PanelItem";
import SectionHeader from "../../SectionHeader";

export const Panel = ({ items, title = "", subtitle = "", bgImage, variant }) => {
  return (
    <>
      {title && (
        <SectionHeader title={title} className="mb-5" />
      )}

      <div className="row">
        {items.map((item) => (
          <PanelItem key={item.id} item={item} variant={variant} />
        ))}
      </div>
    </>
  );
};

Panel.propTypes = {
  items: propTypes.array.isRequired,
  title: propTypes.string,
  subtitle: propTypes.string,
};
