import useNavigation from "../Hooks/use-navigation";

function BreadcrumbLink({ to, children }) {
  const { navigate } = useNavigation();
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <div className="BreadcrumbLink">
      <a onClick={handleClick} href={to}>
        {children}
      </a>
      <span>&nbsp;/</span>
    </div>
  );
}

export default BreadcrumbLink;
