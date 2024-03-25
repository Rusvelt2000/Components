import Link from "./Components/Link";
import Route from "./Components/Route";
import DropdownPage from "./Pages/DropdownPage";
import AccordionPage from "./Pages/AccordionPage";
import ButtonPage from "./Pages/ButtonPage";

function App() {
  return (
    <div>
      <Link to="/dropdown">Go to Dropdown</Link>
      <Link to="/accordion">Go to Accordion</Link>
      <Link to="/button">Go to Button</Link>
      <Route path="/dropdown">
        <DropdownPage />
      </Route>
      <Route path="/accordion">
        <AccordionPage />
      </Route>
      <Route path="/button">
        <ButtonPage />
      </Route>
    </div>
  );
}

export default App;
