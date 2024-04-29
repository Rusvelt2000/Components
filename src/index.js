import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { NavigationProvider } from "./Context/Navigation";
import { SharedProvider } from "./Context/Shared";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <SharedProvider>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </SharedProvider>
  </Provider>
);
