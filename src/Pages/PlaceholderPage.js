import Section from "../Components/Section";
import Title from "../Components/Title";
import Container from "../Components/Container";
import Placeholder from "../Components/Placeholder";

function PlaceholderPage() {
  const sectionsEntrance = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      setInterval(() => {
        section.classList.add("fade-in-up");
      }, 100 * sections.indexOf(section));
    });
  };
  sectionsEntrance();
  return (
    <div>
      <Title>Placeholders</Title>
      <Section col3>
        <Container title={"Texts"}>
          <Placeholder />
          <Placeholder xl />
          <Placeholder md />
          <Placeholder emptyLine />
          <Placeholder lg />
          <Placeholder xs />
          <Placeholder emptyLine />
          <Placeholder />
          <Placeholder md />
        </Container>
        <Container title={"Chat Bubbles"}>
          <Placeholder chat left />
          <Placeholder chat left />
          <Placeholder chat right />
          <Placeholder chat right />
          <Placeholder chat left />
        </Container>

        <Container title={"Avatar and Buttons"}>
          <Placeholder avatar />
          <Placeholder button sm />
          <Placeholder button md />
          <Placeholder button lg />
        </Container>
        <Container title={"Images"}>
          <Placeholder image />
        </Container>
      </Section>
    </div>
  );
}

export default PlaceholderPage;
