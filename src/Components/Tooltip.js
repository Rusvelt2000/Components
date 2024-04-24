import { BsInfoCircle } from "react-icons/bs";
import TooltipMessage from "./TooltipMessage";
import useMouseEvents from "../Hooks/use-MouseEvents";

function Tooltip({ children }) {
  const {
    handleTooltipDirection,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  } = useMouseEvents();

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
