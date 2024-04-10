import { createContext, useState } from "react";
import logotype from "../Assets/Logotype.svg";

const SharedContext = createContext();

function SharedProvider({ children }) {
  const [logoImage, setLogoImage] = useState(logotype);
  const updateLogoImage = (logo) => {
    setLogoImage(logo);
  };

  const sharedContextValue = {
    logoImage,
    updateLogoImage,
  };

  return (
    <SharedContext.Provider value={sharedContextValue}>
      {children}
    </SharedContext.Provider>
  );
}

export { SharedProvider };
export default SharedContext;
