import { useState, useContext } from "react";
import SharedContext from "../Context/Shared";
import Switch from "./Switch";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import logotype from "../Assets/Logotype.svg";
import logotypeDark from "../Assets/LogotypeDark.svg";

function NavigationBar() {
  const { updateLogoImage } = useContext(SharedContext);
  const [theme, setThemeStyle] = useState(true);

  const updateTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    if (theme) {
      root.classList.add("dark-theme");
      updateLogoImage(logotypeDark);
    } else {
      root.classList.remove("dark-theme");
      updateLogoImage(logotype);
    }
  };
  const handleTheme = () => {
    setThemeStyle(!theme);
    updateTheme();
  };
  return (
    <div className="navigation-bar">
      <div>Links</div>
      <Switch
        onClick={handleTheme}
        image={theme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        className={theme ? "light" : "dark"}
      />
    </div>
  );
}

export default NavigationBar;
