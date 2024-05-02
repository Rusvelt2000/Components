import { useState, useRef } from "react";
import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";

function SidebarAccordion({ label, links }) {
  const [expandedItem, setExpandedItem] = useState(-1);
  const icon = (
    <span>{expandedItem ? <GoTriangleDown /> : <GoTriangleLeft />}</span>
  );

  const handleClick = () => {
    setExpandedItem(!expandedItem);
  };

  return (
    <div className="SidebarAccordion" onClick={() => handleClick()}>
      <div className="sidebar-accordion-label">
        {label}
        {icon}
      </div>

      {expandedItem && links}
    </div>
  );
}

export default SidebarAccordion;
