import Button from "./Components/Button";

function App() {
  const handleClick = () => {
    console.log("Clicked");
  };

  const handleMouseEnter = () => {
    console.log("Mouse Entered");
  };

  return (
    <div>
      <Button primary onClick={handleClick}>
        Primary
      </Button>
      <Button secondary onMouseEnter={handleMouseEnter}>
        Secondary
      </Button>
      <Button rounded>Rounded</Button>
      <Button secondary outline>
        Outline
      </Button>
    </div>
  );
}

export default App;
