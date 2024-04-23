import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./Context/Navigation";
import { SharedProvider } from "./Context/Shared";
import { MouseEventsProvider } from "./Context/MouseEvents";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SharedProvider>
    <MouseEventsProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </MouseEventsProvider>
  </SharedProvider>
);
