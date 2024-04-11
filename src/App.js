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
import ComponentsPage from "./Pages/ComponentsPage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content-wrapper">
        <NavigationBar />
        <div className="Content">
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/Home/Components">
            <ComponentsPage />
          </Route>
          <Route path="/Home/Components/Dropdown">
            <DropdownPage />
          </Route>
          <Route path="/Home/Components/Accordion">
            <AccordionPage />
          </Route>
          <Route path="/Home/Components/Button">
            <ButtonPage />
          </Route>
          <Route path="/Home/Components/Input">
            <InputPage />
          </Route>
          <Route path="/Home/Components/Modal">
            <ModalPage />
          </Route>
          <Route path="/Home/Components/Table">
            <TablePage />
          </Route>
          <Route path="/Home/Components/Tooltip">
            <TooltipPage />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
