// import className from "classnames";
import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Dropdown({ options, onChange, value, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  const handleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelection = (selection) => {
    setIsExpanded(false);
    onChange(selection);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="Panel-option"
        key={option.value}
        value={option.value}
        onClick={() => handleSelection(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={dropdownRef} className="Panel" onClick={handleExpansion}>
      <div className="Panel-title">
        <p>{value?.label || children}</p>
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </div>
      <div className="Panel-options-container">
        {isExpanded && <div>{renderedOptions}</div>}
      </div>
    </div>
  );
}

export default Dropdown;
