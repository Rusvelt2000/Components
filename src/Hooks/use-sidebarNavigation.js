import { useState } from "react";

function useSidebarNavigation() {
  const [expandedAccordion, setExpandedAccordion] = useState(-1);

  const handleExpandSidebarAccordion = (nextIndex) => {
    console.log("nextIndex", nextIndex);
    setExpandedAccordion((current) => {
      if (current === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  return { expandedAccordion, handleExpandSidebarAccordion };
}

export default useSidebarNavigation;
