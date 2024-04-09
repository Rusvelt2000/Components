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
