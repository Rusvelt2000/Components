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

  const sharedContextValue = {
    logoImage,
    updateLogoImage,
    theme,
    updateTheme,
  };

  return (
    <SharedContext.Provider value={sharedContextValue}>
      {children}
    </SharedContext.Provider>
  );
}

export { SharedProvider };
export default SharedContext;
