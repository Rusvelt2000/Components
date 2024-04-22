import Section from "../Components/Section";
import Title from "../Components/Title";
import Container from "../Components/Container";
import Placeholder from "../Components/Placeholder";

function PlaceholderPage() {
  const containersEntrance = () => {
    const sections = document.querySelectorAll(".Container");
    sections.forEach((container, index) => {
      setInterval(() => {
        container.classList.add("fade-in-up");
      }, 300 * index);
    });
  };

  containersEntrance();
  return (
    <div>
      <Title>Placeholders</Title>
      <Section col3>
        <Container title={"Texts"}>
          <Placeholder text xl />
          <Placeholder text xl />
          <Placeholder text />
          <Placeholder emptyLine />
          <Placeholder text />
          <Placeholder text />
          <Placeholder emptyLine />
          <Placeholder text />
          <Placeholder text />
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
          <Placeholder button />
        </Container>
      </Section>
      <Section col3>
        <Container title={"Gallery"}>
          <Placeholder gallery />
          <Placeholder gallery />
        </Container>
        <Container title={"Header"}>
          <Placeholder header />
        </Container>
      </Section>
    </div>
  );
}

export default PlaceholderPage;
