import { useState } from "react";

function Dropdown({ options, onSelection, selectedOption }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelection = (selection) => {
    setIsExpanded(false);
    onSelection(selection);
  };

  const renderedOptions = options.map((option) => {
    return (
      <option
        key={option.value}
        value={option.value}
        onClick={() => handleSelection(option)}
      >
        {option.label}
      </option>
    );
  });
  return (
    <div onClick={handleExpansion}>
      {selectedOption?.label || "Select an option"}
      {isExpanded && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
