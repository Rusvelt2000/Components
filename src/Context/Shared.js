import { createContext, useState } from "react";
import logotype from "../Assets/Logotype.svg";

const SharedContext = createContext();

function SharedProvider({ children }) {
  //The following updates the logo based on the theme
  const [logoImage, setLogoImage] = useState(logotype);
  const updateLogoImage = (logo) => {
    setLogoImage(logo);
  };

  const sharedContextValue = {
    logoImage,
    updateLogoImage,
  };

  return (
    <SharedContext.Provider value={{ logoImage, updateLogoImage }}>
      {children}
    </SharedContext.Provider>
  );
}

export { SharedProvider };
export default SharedContext;
