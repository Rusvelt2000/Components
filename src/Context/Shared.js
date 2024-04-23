import { createContext, useState } from "react";
import logotype from "../Assets/Logotype.svg";
import logotypeDark from "../Assets/LogotypeDark.svg";

const SharedContext = createContext();

function SharedProvider({ children }) {
  //The following updates the logo based on the theme
  const [logoImage, setLogoImage] = useState(logotypeDark);
  //The following switches the theme, theme is set to dark by default
  const [theme, setThemeStyle] = useState(false);

  const updateLogoImage = (logo) => {
    setLogoImage(logo);
  };

  const updateTheme = () => {
    setThemeStyle(!theme);
    const root = document.getElementsByTagName("html")[0];
    if (theme) {
      root.classList.add("dark-theme");
      updateLogoImage(logotypeDark);
    } else {
      root.classList.remove("dark-theme");
      updateLogoImage(logotype);
    }
  };

  const handleTooltipDirection = (e) => {
    const tooltipIcon = e.target;
    //Get the width of the window
    const windowWidth = window.innerWidth;
    //Get the rightest position of the tooltip
    const tooltipRightSide = tooltipIcon.getBoundingClientRect().right;
    //SetTimeout gives time to the tooltip to exist before applying the direction
    setTimeout(() => {
      const tooltip = tooltipIcon.querySelector(".tooltip-handler");
      if (tooltip) {
        if (windowWidth - tooltipRightSide <= 320) {
          tooltip.classList.add("Tooltip", "tooltip-right", "right");
        } else {
          tooltip.classList.add("Tooltip", "tooltip-left", "left");
        }
      }
    }, 1);
  };

  const sharedContextValue = {
    logoImage,
    updateLogoImage,
    theme,
    updateTheme,
    handleTooltipDirection,
  };

  return (
    <SharedContext.Provider value={sharedContextValue}>
      {children}
    </SharedContext.Provider>
  );
}

export { SharedProvider };
export default SharedContext;
