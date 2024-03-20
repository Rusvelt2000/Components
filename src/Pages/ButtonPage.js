import Button from "../Components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <Button warning onClick={handleClick}>
        Outline
      </Button>
    </div>
  );
}

export default ButtonPage;
