import Title from "../Components/Title";
import Container from "../Components/Container";
import Tooltip from "../Components/Tooltip";

function TooltipPage() {
  return (
    <div>
      <Title>Tooltips</Title>
      <div className="fade-in-up col-2">
        <Container title="Default Tooltip">
          <Tooltip>
            This is some content for the tooltip. The content is added as if
            this was a common <strong>HTML markup</strong>.
          </Tooltip>
        </Container>
      </div>
    </div>
  );
}

export default TooltipPage;
