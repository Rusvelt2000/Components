import Container from "../Components/Container";
import Button from "../Components/Button";
import Title from "../Components/Title";
import DefaultThumb from "../Assets/Thumbs/defaultThumb.svg";

import {
  GoCheckCircleFill,
  GoBookmarkFill,
  GoAlertFill,
  GoHeartFill,
  GoMoveToBottom,
  GoMute,
  GoRocket,
} from "react-icons/go";
import CardButtonLink from "../Components/CardButtonLink";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <Title>Buttons</Title>
      <div className="fade-in-up col-2">
        <Container title="Default">
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
        </Container>
        <Container title="Warning and Alert">
          <Button warning onClick={handleClick}>
            Warning
          </Button>
          <Button warning outline onClick={handleClick}>
            Outline
          </Button>
          <Button alert onClick={handleClick}>
            Alert
          </Button>
          <Button alert outline onClick={handleClick}>
            Outline
          </Button>
        </Container>
        <Container title="Icon Buttons">
          <Button primary onClick={handleClick}>
            <GoCheckCircleFill className="icon" />
            Icon button
          </Button>
          <Button secondary onClick={handleClick}>
            <GoBookmarkFill className="icon" />
            Icon button
          </Button>
          <Button warning onClick={handleClick}>
            <GoAlertFill className="icon" />
            Outline
          </Button>
        </Container>
        <Container title="Favicon">
          <Button primary favicon>
            <GoHeartFill />
          </Button>
          <Button secondary favicon>
            <GoMoveToBottom />
          </Button>
          <Button primary outline favicon>
            <GoMute />
          </Button>
          <Button secondary outline favicon>
            <GoRocket />
          </Button>
        </Container>
      </div>
      <div className="fade-in-up col-2">
        <Container className={"col-2"} title={"Button Cards"}>
          <CardButtonLink
            caption={"Some descriptive text goes here"}
            title={"Card Button"}
            image={DefaultThumb}
            to={"/button"}
          />
          <CardButtonLink
            caption={"Some descriptive text goes here"}
            title={"Card Button"}
            image={DefaultThumb}
            to={"/button"}
          />
        </Container>
      </div>
    </div>
  );
}

export default ButtonPage;
