import Title from "../Components/Title";
import CardButtonLink from "../Components/CardButtonLink";
import { CgList } from "react-icons/cg";
// import { TbTableColumn } from "react-icons/tb";
// import { BiSolidWindowAlt } from "react-icons/bi";
// import { TfiLayoutAccordionSeparated } from "react-icons/tfi";
// import { TbHandClick } from "react-icons/tb";
// import { GrTooltip } from "react-icons/gr";
// import { RxInput } from "react-icons/rx";
// import { MdOutlineSpaceDashboard } from "react-icons/md";

function HomePage() {
  return (
    <div className="HomePage">
      <Title>Dashboard</Title>
      <div className="col-4 fade-in-up">
        <CardButtonLink
          to="/dropdown"
          title={"Dropdowns"}
          caption={"This is some text to describe the card"}
          image={<CgList />}
        />
      </div>
    </div>
  );
}

export default HomePage;
