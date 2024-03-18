import Accordion from "./Components/Accordion";
import Button from "./Components/Button";

function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  const accordionContent = [
    {
      key: "kadjshf",
      label: "This is a title of an accordion",
      content: "This is the content of an accordion",
    },
    {
      key: "jkashd",
      label: "This is the second",
      content: "This is the content of an accordion",
    },
    {
      key: "jkghn",
      label: "This is the third and last title of an accordion",
      content: "This is the content of an accordion",
    },
  ];

  return (
    <div>
      <Accordion items={accordionContent} />
      <Button warning onClick={handleClick}>
        Outline
      </Button>
    </div>
  );
}

export default App;
