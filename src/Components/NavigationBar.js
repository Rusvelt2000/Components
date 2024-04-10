import { useState } from "react";
import Switch from "./Switch";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavigationBar() {
  const [theme, setThemeStyle] = useState(true);

  const updateTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    if (theme) {
      root.classList.add("dark-theme");
    } else {
      root.classList.remove("dark-theme");
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
