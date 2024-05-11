import Container from "../Components/Container";
import Button from "../Components/Button";
import Section from "../Components/Section";
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
  return (
    <div>
      <Title>Buttons</Title>
      <Section col2>
        <Container title="Default">
          <Button primary>Primary</Button>
          <Button primary outline>
            Outline
          </Button>

          <Button secondary>Secondary</Button>
          <Button secondary outline>
            Outline
          </Button>
        </Container>
        <Container title="Warning and Alert">
          <Button warning>Warning</Button>
          <Button warning outline>
            Outline
          </Button>
          <Button alert>Alert</Button>
          <Button alert outline>
            Outline
          </Button>
        </Container>
      </Section>
      <Section>
        <Container title="Icon Buttons">
          <div className="flex">
            <Button primary>
              <GoCheckCircleFill className="icon" />
              Accept
            </Button>
            <Button secondary>
              <GoBookmarkFill className="icon" />
              Bookmark
            </Button>
            <Button warning>
              <GoAlertFill className="icon" />
              Warning
            </Button>
          </div>
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

        <Container className={"col-2"} title={"Button Cards"}>
          <CardButtonLink
            caption={"Some descriptive text goes here"}
            title={"Card Button"}
            image={DefaultThumb}
            to={"/Home/Components/Button"}
          />
          <CardButtonLink
            caption={"Some descriptive text goes here"}
            title={"Card Button"}
            image={DefaultThumb}
            to={"/Home/Components/Button"}
          />
        </Container>
      </Section>
    </div>
  );
}

export default ButtonPage;
