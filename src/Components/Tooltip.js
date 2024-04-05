import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";

function Tooltip({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="Tooltip-container"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BsInfoCircle className="Tooltip-icon" />
      {isHovered && <div className="Tooltip side-entrance">{children}</div>}
    </div>
  );
}

export default Tooltip;
