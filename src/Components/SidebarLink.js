import classNames from "classnames";
import useNavigation from "../Hooks/use-navigation";
import TooltipMessage from "./TooltipMessage";
import { useState } from "react";
import useMouseEvents from "../Hooks/use-MouseEvents";

function SidebarLink({ to, children, className, icon, tooltip, onLinkClick }) {
  const { handleTooltipDirection } = useMouseEvents();
  const { currentPath, navigate } = useNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const classes = classNames(
    "SidebarLink expandSidebarAccordion",
    className,
    currentPath === to && "active",
    isHovered && "Tooltip-container"
  );
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
    onLinkClick(children);
  };

  return (
    <div
      className={classes}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleTooltipDirection}
    >
      {isHovered && tooltip && <TooltipMessage>{tooltip}</TooltipMessage>}
      {icon && <div className="icon">{icon}</div>}
      <a href={to}>{children}</a>
    </div>
  );
}

export default SidebarLink;
