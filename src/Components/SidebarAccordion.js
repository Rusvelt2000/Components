import { useState } from "react";
import { PiCaretLeftBold, PiCaretDownBold } from "react-icons/pi";

function SidebarAccordion({ label, children }) {
  const [expandedItem, setExpandedItem] = useState(-1);
  const icon = (
    <span>{expandedItem ? <PiCaretLeftBold /> : <PiCaretDownBold />}</span>
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

      {expandedItem && children}
    </div>
  );
}

export default SidebarAccordion;
