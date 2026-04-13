import propTypes from "prop-types";
import { PanelItem } from "./PanelItem";
import SectionHeader from "../../SectionHeader";

export const Panel = ({ items, title = "", subtitle = "", bgImage }) => {
  return (
    <>
      {title && (
        <SectionHeader title={title} subtitle={subtitle} bgImage={bgImage} />
      )}

      <div className="row">
        {items.map((item) => (
          <PanelItem key={item.id} item={item} />
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
