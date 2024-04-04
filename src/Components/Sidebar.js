import SidebarLink from "./SidebarLink";
import { CgList } from "react-icons/cg";
import { TbTableColumn } from "react-icons/tb";
import { BiSolidWindowAlt } from "react-icons/bi";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
import { GrTooltip } from "react-icons/gr";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h4>Components</h4>
      <SidebarLink icon={<CgList />} to="/">
        Dropdowns
      </SidebarLink>
      <SidebarLink icon={<TbHandClick />} to="/button">
        Buttons
      </SidebarLink>
      <SidebarLink icon={<BiSolidWindowAlt />} to="/modal">
        Modals
      </SidebarLink>
      <SidebarLink icon={<TfiLayoutAccordionSeparated />} to="/accordion">
        Accordions
      </SidebarLink>
      <SidebarLink icon={<TbTableColumn />} to="/table">
        Tables
      </SidebarLink>
      <SidebarLink icon={<GrTooltip />} to="/tooltip">
        Tooltips
      </SidebarLink>
      <hr />
    </div>
  );
}

export default Sidebar;
