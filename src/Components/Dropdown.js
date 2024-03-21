import { useState } from "react";

function Dropdown({ options, onChange, value }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelection = (selection) => {
    setIsExpanded(false);
    onChange(selection);
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
      {value?.label || "Select an option"}
      {isExpanded && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
