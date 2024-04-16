import { useState, useContext } from "react";
import SharedContext from "../Context/Shared";
import SidebarLink from "./SidebarLink";
import Button from "./Button";
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
  const { logoImage } = useContext(SharedContext);
  const [isCollapsedSidebar, setCollapsedSidebar] = useState(true);
  const toggleSidebar = () => {
    setCollapsedSidebar(!isCollapsedSidebar);
  };

  const links = [
    {
      label: "Accordions",
      icon: <TfiLayoutAccordionSeparated />,
      to: "/Home/Components/Accordion",
    },
    {
      label: "Buttons",
      icon: <TbHandClick />,
      to: "/Home/Components/Button",
    },
    {
      label: "Dropdowns",
      icon: <CgList />,
      to: "/Home/Components/Dropdown",
    },
    {
      label: "Inputs",
      icon: <RxInput />,
      to: "/Home/Components/Input",
    },
    {
      label: "Modals",
      icon: <BiSolidWindowAlt />,
      to: "/Home/Components/Modal",
    },
    {
      label: "Tables",
      icon: <TbTableColumn />,
      to: "/Home/Components/Table",
    },
    {
      label: "Tooltips",
      icon: <GrTooltip />,
      to: "/Home/Components/Tooltip",
    },
  ];

  const renderLinks = links.map((link) => {
    return (
      <SidebarLink key={link.label} icon={link.icon} to={link.to}>
        {link.label}
      </SidebarLink>
    );
  });

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
          <img className="logo" src={logoImage} alt="RctCompt Logo" />
          <SidebarLink icon={<MdOutlineSpaceDashboard />} to="/Home">
            Dashboard
          </SidebarLink>
          <h4>Components</h4>
          {renderLinks}
          <hr />
          <h4>Other</h4>
        </div>
      ) : (
        <div className="Sidebar collapsed">
          <img className="logo" src={logo} alt="RctCompt Logo" />
          <SidebarLink
            icon={<MdOutlineSpaceDashboard />}
            to="/Home"
          ></SidebarLink>
          <hr />
          <SidebarLink
            icon={<TfiLayoutAccordionSeparated />}
            to="/Home/Components/Accordion"
          ></SidebarLink>
          <SidebarLink
            icon={<TbHandClick />}
            to="/Home/Components/Button"
          ></SidebarLink>
          <SidebarLink
            icon={<CgList />}
            to="/Home/Components/Dropdown"
          ></SidebarLink>
          <SidebarLink
            icon={<RxInput />}
            to="/Home/Components/Input"
          ></SidebarLink>
          <SidebarLink
            icon={<BiSolidWindowAlt />}
            to="/Home/Components/Modal"
          ></SidebarLink>
          <SidebarLink
            icon={<TbTableColumn />}
            to="/Home/Components/Table"
          ></SidebarLink>
          <SidebarLink
            icon={<GrTooltip />}
            to="/Home/Components/Tooltip"
          ></SidebarLink>
          <hr />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
