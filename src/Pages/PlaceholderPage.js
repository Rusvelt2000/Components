import Title from "../Components/Title";
import Container from "../Components/Container";
import Placeholder from "../Components/Placeholder";

function PlaceholderPage() {
  return (
    <div>
      <Title>Placeholders</Title>
      <div className="fade-in-up col-3">
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
      </div>
    </div>
  );
}

export default PlaceholderPage;
