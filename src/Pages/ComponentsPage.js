import Title from "../Components/Title";
import CardButtonLink from "../Components/CardButtonLink";
import AccordionThumb from "../Assets/Thumbs/accordion.svg";
import ButtonsThumb from "../Assets/Thumbs/button.svg";
import DropdownThumb from "../Assets/Thumbs/dropdown.svg";
import InputThumb from "../Assets/Thumbs/input.svg";
import ModalThumb from "../Assets/Thumbs/modal.svg";
import TableThumb from "../Assets/Thumbs/table.svg";
import TooltipThumb from "../Assets/Thumbs/tooltip.svg";
import PlaceholderThumb from "../Assets/Thumbs/placeholder.svg";
import useNavigation from "../Hooks/use-navigation";

function ComponentsPage() {
  const { currentPath } = useNavigation();
  return (
    <div className="HomePage">
      <Title>Components</Title>
      <div className="col-4 fade-in-up">
        <CardButtonLink
          to={`${currentPath}/Accordion`}
          title={"Accordions"}
          caption={
            "Accordions are used to display information in a collapsible format"
          }
          image={AccordionThumb}
        />
        <CardButtonLink
          to={`${currentPath}/Button`}
          title={"Buttons"}
          caption={"Buttons are used from the user to submit information"}
          image={ButtonsThumb}
        />
        <CardButtonLink
          to={`${currentPath}/Dropdown`}
          title={"Dropdowns"}
          caption={"Dropdowns are used get selected information from the user"}
          image={DropdownThumb}
        />
        <CardButtonLink
          to={`${currentPath}/Input`}
          title={"Inputs"}
          caption={"Inputs are the main way to get information from the user"}
          image={InputThumb}
        />
        <CardButtonLink
          to={`${currentPath}/Modal`}
          title={"Modals"}
          caption={
            "Modals are used to display information in a focussed modal format"
          }
          image={ModalThumb}
        />
        <CardButtonLink
          to={`${currentPath}/Table`}
          title={"Tables"}
          caption={"Tables are useful to list information in a tabular format"}
          image={TableThumb}
        />
        <CardButtonLink
          to={`${currentPath}/Tooltip`}
          title={"Tooltips"}
          caption={
            "Tooltips are pop-up messages that display information when hovered over"
          }
          image={TooltipThumb}
        />
        <CardButtonLink
          to={`${currentPath}/Placeholder`}
          title={"Placeholders"}
          caption={
            "Placeholders are used to display the layout of a component before it is loaded"
          }
          image={PlaceholderThumb}
        />
      </div>
    </div>
  );
}

export default ComponentsPage;
