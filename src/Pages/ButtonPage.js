import Button from "../Components/Button";
import Title from "../Components/Title";
import { GoCheckCircleFill, GoBookmarkFill, GoAlertFill } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <Title>Buttons</Title>
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
        <Button primary onClick={handleClick}>
          <GoCheckCircleFill className="icon" />
          Icon button
        </Button>
        <Button secondary onClick={handleClick}>
          <GoBookmarkFill className="icon" />
          Icon button
        </Button>
        <Button warning outline onClick={handleClick}>
          <GoAlertFill className="icon" />
          Outline
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
