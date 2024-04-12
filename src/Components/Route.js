import useNavigation from "../Hooks/use-navigation";
import HomePage from "../Pages/HomePage";

function Route({ path, children }) {
  const { currentPath, navigate } = useNavigation();
  if (currentPath === "/" && path === "/") {
    navigate("/Home");
    return <HomePage />;
  }
  if (path === currentPath) {
    return children;
  } else {
    return;
  }
}

export default Route;
