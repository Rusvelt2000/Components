import Title from "../Components/Title";
import Section from "../Components/Section";
import Container from "../Components/Container";
import Tooltip from "../Components/Tooltip";

function TooltipPage() {
  return (
    <div>
      <Title>Tooltips</Title>
      <Section col2>
        <Container title="Default Tooltip">
          <Tooltip>
            This is some content for the tooltip. The content is added as if
            this was a common <strong>HTML markup</strong>.
          </Tooltip>
        </Container>
      </Section>
    </div>
  );
}

export default TooltipPage;
