import Route from "./Components/Route";
import DropdownPage from "./Pages/DropdownPage";
import AccordionPage from "./Pages/AccordionPage";
import ButtonPage from "./Pages/ButtonPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";
import Sidebar from "./Components/Sidebar";
import TooltipPage from "./Pages/TooltipPage";
import InputPage from "./Pages/InputPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content-wrapper">
        <div className="navigation-bar"></div>
        <div className="Content">
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/dropdown">
            <DropdownPage />
          </Route>
          <Route path="/accordion">
            <AccordionPage />
          </Route>
          <Route path="/button">
            <ButtonPage />
          </Route>
          <Route path="/modal">
            <ModalPage />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/tooltip">
            <TooltipPage />
          </Route>
          <Route path="/input">
            <InputPage />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
