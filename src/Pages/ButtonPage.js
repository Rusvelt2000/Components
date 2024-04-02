import Button from "../Components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <h2 className="section-title">Buttons</h2>
      <div className="fade-in-up">
        <Button primary onClick={handleClick}>
          Primary
        </Button>
        <Button primary outline onClick={handleClick}>
          Outline
        </Button>
        <Button secondary onClick={handleClick}>
          Secondary
        </Button>
        <Button secondary outline onClick={handleClick}>
          Outline
        </Button>
        <Button warning onClick={handleClick}>
          Warning
        </Button>
        <Button warning outline onClick={handleClick}>
          Outline
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
