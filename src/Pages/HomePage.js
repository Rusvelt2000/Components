import Title from "../Components/Title";
import CardButtonLink from "../Components/CardButtonLink";
import AccordionThumb from "../Assets/Thumbs/accordion.svg";
import ButtonsThumb from "../Assets/Thumbs/button.svg";
import DropdownThumb from "../Assets/Thumbs/dropdown.svg";
import InputThumb from "../Assets/Thumbs/input.svg";
import ModalThumb from "../Assets/Thumbs/modal.svg";
import TableThumb from "../Assets/Thumbs/table.svg";
import TooltipThumb from "../Assets/Thumbs/tooltip.svg";

function HomePage() {
  return (
    <div className="HomePage">
      <Title>Dashboard</Title>
      <div className="col-4 fade-in-up">
        <CardButtonLink
          to="/accordion"
          title={"Accordions"}
          caption={
            "Accordions are used to display information in a collapsible format"
          }
          image={AccordionThumb}
        />
        <CardButtonLink
          to="/button"
          title={"Buttons"}
          caption={"Buttons are used from the user to submit information"}
          image={ButtonsThumb}
        />
        <CardButtonLink
          to="/dropdown"
          title={"Dropdowns"}
          caption={"Dropdowns are used get selected information from the user"}
          image={DropdownThumb}
        />
        <CardButtonLink
          to="/input"
          title={"Inputs"}
          caption={"Inputs are the main way to get information from the user"}
          image={InputThumb}
        />
        <CardButtonLink
          to="/modal"
          title={"Modals"}
          caption={
            "Modals are used to display information in a focussed modal format"
          }
          image={ModalThumb}
        />
        <CardButtonLink
          to="/table"
          title={"Tables"}
          caption={"Tables are useful to list information in a tabular format"}
          image={TableThumb}
        />
        <CardButtonLink
          to="/tooltip"
          title={"Tooltips"}
          caption={
            "Tooltips are pop-up messages that display information when hovered over"
          }
          image={TooltipThumb}
        />
      </div>
    </div>
  );
}

export default HomePage;
