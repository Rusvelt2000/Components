import Accordion from "../Components/Accordion";

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
      <Accordion items={accordionContent}></Accordion>
    </div>
  );
}

export default AccordionPage;
