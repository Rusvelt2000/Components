import { useContext } from "react";
import SharedContext from "../Context/Shared";
import Switch from "./Switch";
import Breadcrumb from "./Breadcrumb";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavigationBar() {
  const { updateTheme, theme } = useContext(SharedContext);

  const handleTheme = () => {
    updateTheme();
  };
  return (
    <div className="navigation-bar">
      <Breadcrumb></Breadcrumb>
      <Switch
        onClick={handleTheme}
        image={theme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        className={theme ? "light" : "dark"}
      />
    </div>
  );
}

export default NavigationBar;
