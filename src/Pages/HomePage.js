import Title from "../Components/Title";
import CardButtonLink from "../Components/CardButtonLink";
import DropdownThumb from "../Assets/Thumbs/Dropdowns.svg";
import AccordionThumb from "../Assets/Thumbs/accordion.svg";
import ButtonsThumb from "../Assets/Thumbs/button.svg";

function HomePage() {
  return (
    <div className="HomePage">
      <Title>Dashboard</Title>
      <div className="col-4 fade-in-up">
        <CardButtonLink
          to="/dropdown"
          title={"Dropdowns"}
          caption={"This is some text to describe the card"}
          image={DropdownThumb}
        />
        <CardButtonLink
          to="/accordion"
          title={"Accordions"}
          caption={"This is some text to describe the card"}
          image={AccordionThumb}
        />
        <CardButtonLink
          to="/button"
          title={"Buttons"}
          caption={"This is some text to describe the card"}
          image={ButtonsThumb}
        />
      </div>
    </div>
  );
}

export default HomePage;
