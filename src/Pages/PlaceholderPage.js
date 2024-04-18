import Title from "../Components/Title";
import Container from "../Components/Container";
import Placeholder from "../Components/Placeholder";

function PlaceholderPage() {
  return (
    <div>
      <Title>Placeholders</Title>
      <div className="fade-in-up col-2">
        <Container title={"Default placeholder"}>
          <Placeholder md image />
          <Placeholder />
          <Placeholder xl />
          <Placeholder button sm />
        </Container>
      </div>
    </div>
  );
}

export default PlaceholderPage;
