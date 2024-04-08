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

  const handleTooltipDirection = () => {
    const tooltip = document.querySelector(".Tooltip-container");
    const windowWidth = window.innerWidth;
    const tooltipRightSide = tooltip.getBoundingClientRect().right;
    console.log(windowWidth - tooltipRightSide > 260);
  };

  return (
    <div
      className="Tooltip-container"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleTooltipDirection}
    >
      <BsInfoCircle className="Tooltip-icon" />
      {isHovered && <div className="Tooltip side-entrance">{children}</div>}
    </div>
  );
}

export default Tooltip;
