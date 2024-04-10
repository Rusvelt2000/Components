import useNavigation from "../Hooks/use-navigation";

function Breadcrumb() {
  const { currentPath } = useNavigation();

  return <div className="Breadcrumb">{currentPath}</div>;
}

export default Breadcrumb;
