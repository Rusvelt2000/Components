import { useState } from "react";

function Accordion({ items }) {
  const [active, setActive] = useState(null);
  const openAccordion = async (e) => {
    await console.log(e.target);
    setActive(e.target);
  };

  const renderedAccordion = items.map((item) => {
    return (
      <div key={item.key} className="Accordion">
        <h3 className="AccordionLabel" onClick={openAccordion}>
          {item.label}
        </h3>
        <div className="AccordionContentWrapper">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div>{renderedAccordion}</div>;
}

export default Accordion;
