import { useState } from "react";
import Switch from "./Switch";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavigationBar() {
  const [theme, setTheme] = useState(true);

  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div className="navigation-bar">
      <Switch
        onClick={handleTheme}
        image={theme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        className={theme ? "light" : "dark"}
      />
    </div>
  );
}

export default NavigationBar;
