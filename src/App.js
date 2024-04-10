import "./Components/Styles/components.scss";
import Route from "./Components/Route";
import HomePage from "./Pages/HomePage";
import NavigationBar from "./Components/NavigationBar";
import AccordionPage from "./Pages/AccordionPage";
import ButtonPage from "./Pages/ButtonPage";
import DropdownPage from "./Pages/DropdownPage";
import InputPage from "./Pages/InputPage";
import ModalPage from "./Pages/ModalPage";
import Sidebar from "./Components/Sidebar";
import TablePage from "./Pages/TablePage";
import TooltipPage from "./Pages/TooltipPage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content-wrapper">
        <NavigationBar />
        <div className="Content">
          <Route path={"/"}>
            <HomePage />
          </Route>
          <Route path="Home">
            <HomePage />
          </Route>
          <Route path="Dropdown">
            <DropdownPage />
          </Route>
          <Route path="Accordion">
            <AccordionPage />
          </Route>
          <Route path="Button">
            <ButtonPage />
          </Route>
          <Route path="Input">
            <InputPage />
          </Route>
          <Route path="Modal">
            <ModalPage />
          </Route>
          <Route path="Table">
            <TablePage />
          </Route>
          <Route path="Tooltip">
            <TooltipPage />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
