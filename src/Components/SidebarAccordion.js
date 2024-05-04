import { PiCaretLeftBold, PiCaretDownBold } from "react-icons/pi";

function SidebarAccordion({ label, children, isOpen, ...rest }) {
  const icon = (
    <span>{isOpen ? <PiCaretLeftBold /> : <PiCaretDownBold />}</span>
  );

  return (
    <div className="SidebarAccordion" {...rest}>
      <div className="sidebar-accordion-label">
        {label}
        {icon}
      </div>

      {isOpen && children}
    </div>
  );
}

export default SidebarAccordion;
