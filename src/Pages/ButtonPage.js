import Button from "../Components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <h2 className="section-title">Buttons</h2>
      <Button warning onClick={handleClick}>
        Warning
      </Button>
      <Button primary outline onClick={handleClick}>
        Outline
      </Button>
    </div>
  );
}

export default ButtonPage;
