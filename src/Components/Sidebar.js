import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <div className="Sidebar">
      <h4>Components</h4>
      <SidebarLink to="/">Dropdowns</SidebarLink>
      <SidebarLink to="/accordion">Accordions</SidebarLink>
      <SidebarLink to="/button">Buttons</SidebarLink>
      <SidebarLink to="/modal">Modals</SidebarLink>
      <SidebarLink to="/table">Tables</SidebarLink>
      <hr />
    </div>
  );
}

export default Sidebar;
