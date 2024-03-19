import { useState } from "react";
import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedItem, setExpandedItem] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedItem(nextIndex);
  };

  const renderedAccordion = items.map((item, index) => {
    const isExpanded = index === expandedItem;
    const icon = (
      <span>{isExpanded ? <GoTriangleDown /> : <GoTriangleLeft />}</span>
    );

    return (
      <div key={item.key} className="Accordion">
        <div className="AccordionLabel" onClick={() => handleClick(index)}>
          <p>{item.label}</p>
          {icon}
        </div>

        {isExpanded && <p className="AccordionContent">{item.content}</p>}
      </div>
    );
  });

  return <div>{renderedAccordion}</div>;
}

export default Accordion;
