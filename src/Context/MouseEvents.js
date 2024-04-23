import { createContext, useState } from "react";

const SharedMouseEventsContext = createContext();

function MouseEventsProvider({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //The following assigns the tooltip direction based ont the position on the screen
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
          tooltip.classList.add("Tooltip", "tooltip-right", "right");
        } else {
          tooltip.classList.add("Tooltip", "tooltip-left", "left");
        }
      }
    }, 1);
  };

  const sharedContextValue = {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    handleTooltipDirection,
  };

  return (
    <SharedMouseEventsContext.Provider value={sharedContextValue}>
      {children}
    </SharedMouseEventsContext.Provider>
  );
}

export { MouseEventsProvider };
export default SharedMouseEventsContext;
