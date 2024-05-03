import { useState, useContext } from "react";
import SharedContext from "../Context/Shared";
import SidebarAccordion from "./SidebarAccordion";
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
import { GoTasklist } from "react-icons/go";
import { TfiLayoutMediaLeftAlt } from "react-icons/tfi";

function Sidebar() {
  const { logoImage } = useContext(SharedContext);
  const [isCollapsedSidebar, setCollapsedSidebar] = useState(false);
  const toggleSidebar = () => {
    setCollapsedSidebar(!isCollapsedSidebar);
  };

  const sidebarGroupLinks = [
    {
      label: "Base",
      links: [
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
          label: "Modals",
          icon: <BiSolidWindowAlt />,
          to: "/Home/Components/Modal",
        },

        {
          label: "Tooltips",
          icon: <GrTooltip />,
          to: "/Home/Components/Tooltip",
        },
        {
          label: "Placeholders",
          icon: <TfiLayoutMediaLeftAlt />,
          to: "/Home/Components/Placeholder",
        },
      ],
    },
    {
      label: "Forms",
      links: [
        {
          label: "Lists",
          icon: <GoTasklist />,
          to: "/Home/Components/List",
        },
        {
          label: "Tables",
          icon: <TbTableColumn />,
          to: "/Home/Components/Table",
        },
        {
          label: "Inputs",
          icon: <RxInput />,
          to: "/Home/Components/Input",
        },
      ],
    },
  ];

  const renderGroups = sidebarGroupLinks.map((group) => {
    const renderLinks = group.links.map((link) => {
      if (!isCollapsedSidebar) {
        return (
          <SidebarLink key={link.label} icon={link.icon} to={link.to}>
            {link.label}
          </SidebarLink>
        );
      } else {
        return (
          <SidebarLink
            key={link.label}
            icon={link.icon}
            to={link.to}
            tooltip={link.label}
          />
        );
      }
    });
    return (
      <SidebarAccordion key={group.label} label={group.label}>
        {renderLinks}
      </SidebarAccordion>
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
        {!isCollapsedSidebar ? <PiCaretLeftBold /> : <PiCaretRightBold />}
      </Button>
      {!isCollapsedSidebar ? (
        <div className="Sidebar side-entrance-left">
          <img className="logo" src={logoImage} alt="RctCompt Logo" />
          <SidebarLink icon={<MdOutlineSpaceDashboard />} to="/Home">
            Dashboard
          </SidebarLink>
          <h4>Components</h4>
          {renderGroups}
          <hr />
          <h4>Other</h4>
        </div>
      ) : (
        <div className="Sidebar collapsed">
          <img className="logo" src={logo} alt="RctCompt Logo" />
          <SidebarLink
            icon={<MdOutlineSpaceDashboard />}
            to="/Home"
            tooltip="Dashboard"
          ></SidebarLink>
          <hr />
          {renderGroups}
          <hr />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
