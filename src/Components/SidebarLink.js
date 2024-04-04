import classNames from "classnames";
import useNavigation from "../Hooks/use-navigation";

function SidebarLink({ to, children, className, icon }) {
  const { currentPath, navigate } = useNavigation();

  const classes = classNames(
    "SidebarLink",
    className,
    currentPath === to && "active"
  );
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <div className={classes} onClick={handleClick}>
      {icon && <div className="icon">{icon}</div>}
      <a href={to}>{children}</a>
    </div>
  );
}

export default SidebarLink;
