import classNames from "classnames";
import useNavigation from "../Hooks/use-navigation";

function SidebarLink({ to, children, className }) {
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
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default SidebarLink;
