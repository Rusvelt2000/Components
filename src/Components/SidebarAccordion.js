import { PiCaretLeftBold, PiCaretDownBold } from "react-icons/pi";

function SidebarAccordion({
  label,
  children,
  isOpen,
  index,
  onClick,
  ...rest
}) {
  const icon = (
    <span>{isOpen ? <PiCaretLeftBold /> : <PiCaretDownBold />}</span>
  );

  const handleClick = (index) => {
    onClick(index);
  };

  return (
    <div className="SidebarAccordion" {...rest}>
      <div
        className="sidebar-accordion-label"
        onClick={() => handleClick(index)}
      >
        {label}
        {icon}
      </div>

      {isOpen && children}
    </div>
  );
}

export default SidebarAccordion;
