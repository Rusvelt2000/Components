import { useState } from "react";
import { PiCaretLeftBold, PiCaretDownBold } from "react-icons/pi";

function Accordion({ items }) {
  const [expandedItem, setExpandedItem] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedItem((current) => {
      if (current === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };
  const renderedAccordion = items.map((item, index) => {
    const isExpanded = index === expandedItem;
    const icon = (
      <span>{isExpanded ? <PiCaretLeftBold /> : <PiCaretDownBold />}</span>
    );

    return (
      <div key={item.key} className="Accordion">
        <div className="AccordionLabel" onClick={() => handleClick(index)}>
          <p>{item.label}</p>
          {icon}
        </div>

        {isExpanded && (
          <p className="AccordionContent expandAccordion">{item.content}</p>
        )}
      </div>
    );
  });

  return <div>{renderedAccordion}</div>;
}

export default Accordion;
