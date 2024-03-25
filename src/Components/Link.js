import { useContext } from "react";
import NavigationContext from "../Context/Navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
