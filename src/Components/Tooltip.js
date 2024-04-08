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
    const tooltipBubble = document.querySelector(".Tooltip");
    //Get the size of the window
    const windowWidth = window.innerWidth;
    //Get the rightest positon of the tooltip
    const tooltipRightSide = tooltip.getBoundingClientRect().right;
    if (tooltipBubble) {
      if (windowWidth - tooltipRightSide <= 260) {
        tooltipBubble.style.left = "auto";
        tooltipBubble.style.right = "32px";
      } else {
        tooltipBubble.style.right = "auto";
        tooltipBubble.style.left = "32px";
      }
    }
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
