import Title from "../Components/Title";
import Section from "../Components/Section";
import CardButtonLink from "../Components/CardButtonLink";
import ComponentsThumb from "../Assets/Thumbs/components.svg";
import OtherThumb from "../Assets/Thumbs/other.svg";
import useNavigation from "../Hooks/use-navigation";

function HomePage() {
  const { currentPath } = useNavigation();
  return (
    <div className="HomePage">
      <Title>Dashboard</Title>
      <Section col4>
        <CardButtonLink
          to={`${currentPath}/Components`}
          title={"Components"}
          caption={"Base components to be used throughout the application"}
          image={ComponentsThumb}
        />
        <CardButtonLink
          to={`${currentPath}/Other`}
          title={"Other"}
          caption={"Other useful components can be found here"}
          image={OtherThumb}
        />
      </Section>
    </div>
  );
}

export default HomePage;
