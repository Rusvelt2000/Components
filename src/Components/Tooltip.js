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

  const handleTooltipDirection = (e) => {
    const tooltipIcon = e.target;
    //Get the width of the window
    const windowWidth = window.innerWidth;
    //Get the rightest position of the tooltip
    const tooltipRightSide = tooltipIcon.getBoundingClientRect().right;
    //SetTimeout gives time to the tooltip to exist before applying the direction
    setTimeout(() => {
      const tooltip = tooltipIcon.querySelector(".tooltip-handler");
      if (tooltip) {
        if (windowWidth - tooltipRightSide <= 320) {
          tooltip.classList.add("Tooltip", "side-entrance", "right");
        } else {
          tooltip.classList.add("Tooltip", "side-entrance-left", "left");
        }
      }
    }, 0);
  };

  return (
    <div
      className="Tooltip-container"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleTooltipDirection}
    >
      {isHovered && <div className="tooltip-handler">{children}</div>}
      <BsInfoCircle className="Tooltip-icon" />
    </div>
  );
}

export default Tooltip;
