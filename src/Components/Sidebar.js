import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h4>Components</h4>
      <SidebarLink to="/">Dropdown</SidebarLink>
      <SidebarLink to="/accordion">Accordion</SidebarLink>
      <SidebarLink to="/button">Button</SidebarLink>
      <SidebarLink to="/modal">Modal</SidebarLink>
    </div>
  );
}

export default Sidebar;
