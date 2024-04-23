import { useState, useContext } from "react";
import { BsInfoCircle } from "react-icons/bs";
import TooltipMessage from "./TooltipMessage";
import SharedContext from "../Context/Shared";

function Tooltip({ children }) {
  const { handleTooltipDirection } = useContext(SharedContext);
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
      onMouseOver={handleTooltipDirection}
    >
      {isHovered && <TooltipMessage>{children}</TooltipMessage>}
      <BsInfoCircle className="Tooltip-icon" />
    </div>
  );
}

export default Tooltip;
