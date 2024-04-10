import { useState } from "react";
import SidebarLink from "./SidebarLink";
import Button from "./Button";
import logotype from "../Assets/Logotype.svg";
import logo from "../Assets/Logo.svg";
import { CgList } from "react-icons/cg";
import { TbTableColumn } from "react-icons/tb";
import { BiSolidWindowAlt } from "react-icons/bi";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
import { GrTooltip } from "react-icons/gr";
import { RxInput } from "react-icons/rx";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiCaretLeftBold } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";

function Sidebar() {
  const [isCollapsedSidebar, setCollapsedSidebar] = useState(true);
  const toggleSidebar = () => {
    setCollapsedSidebar(!isCollapsedSidebar);
  };

  return (
    <div className="SidebarWrapper ">
      <Button
        onClick={toggleSidebar}
        className="sidebar-toggle-button"
        secondary
        favicon
      >
        {isCollapsedSidebar ? <PiCaretLeftBold /> : <PiCaretRightBold />}
      </Button>
      {isCollapsedSidebar ? (
        <div className="Sidebar side-entrance-left">
          <img className="logo" src={logotype} alt="RctCompt Logo" />
          <SidebarLink icon={<MdOutlineSpaceDashboard />} to="/">
            Dashboard
          </SidebarLink>
          <h4>Components</h4>
          <SidebarLink icon={<TfiLayoutAccordionSeparated />} to="/accordion">
            Accordions
          </SidebarLink>
          <SidebarLink icon={<TbHandClick />} to="/button">
            Buttons
          </SidebarLink>
          <SidebarLink icon={<CgList />} to="/dropdown">
            Dropdowns
          </SidebarLink>
          <SidebarLink icon={<RxInput />} to="/input">
            Inputs
          </SidebarLink>
          <SidebarLink icon={<BiSolidWindowAlt />} to="/modal">
            Modals
          </SidebarLink>
          <SidebarLink icon={<TbTableColumn />} to="/table">
            Tables
          </SidebarLink>
          <SidebarLink icon={<GrTooltip />} to="/tooltip">
            Tooltips
          </SidebarLink>
          <hr />
          <h4>Other</h4>
        </div>
      ) : (
        <div className="Sidebar collapsed">
          <img className="logo" src={logo} alt="RctCompt Logo" />
          <SidebarLink icon={<MdOutlineSpaceDashboard />} to="/"></SidebarLink>
          <hr />
          <SidebarLink
            icon={<TfiLayoutAccordionSeparated />}
            to="/accordion"
          ></SidebarLink>
          <SidebarLink icon={<TbHandClick />} to="/button"></SidebarLink>
          <SidebarLink icon={<CgList />} to="/dropdown"></SidebarLink>
          <SidebarLink icon={<RxInput />} to="/input"></SidebarLink>
          <SidebarLink icon={<BiSolidWindowAlt />} to="/modal"></SidebarLink>
          <SidebarLink icon={<TbTableColumn />} to="/table"></SidebarLink>
          <SidebarLink icon={<GrTooltip />} to="/tooltip"></SidebarLink>
          <hr />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
