import Accordion from "../Components/Accordion";
import Title from "../Components/Title";
import Container from "../Components/Container";

function AccordionPage() {
  const accordionContent = [
    {
      key: "kadjshf",
      label: "This is a title of an accordion",
      content: (
        <span>
          Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipiscing
          elit. Vestibulum et ligula in nunc bibendum{" "}
          <a target="_blank" href="www.rossettiroberto.com">
            fringilla
          </a>{" "}
          eu lectus.
        </span>
      ),
    },
    {
      key: "jkashd",
      label: "This is the second",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.",
    },
    {
      key: "jkghn",
      label: "This is the third and last title of an accordion",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.",
    },
  ];

  return (
    <div>
      <Title>Accordions</Title>
      <div className="fade-in-up col-2">
        <Container title="Default Accordion">
          <Accordion items={accordionContent}></Accordion>
        </Container>
      </div>
    </div>
  );
}

export default AccordionPage;
