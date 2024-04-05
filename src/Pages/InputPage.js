import Title from "../Components/Title";
import Container from "../Components/Container";
import Input from "../Components/Input";

function InputPage() {
  return (
    <div>
      <Title>Inputs</Title>
      <div className="fade-in-up">
        <Container direction={"horizontal"} title="Inputs by type">
          <Input
            size="xs"
            label="Default text input"
            tooltip="This input is for common text"
            placeholder="Text goes here"
          ></Input>
          <Input
            type={"number"}
            size="xxs"
            label="Default number"
            tooltip="This input is for numbers"
            placeholder="12345"
          ></Input>
          <Input
            type={"password"}
            size="xs"
            label="Hidden password"
            tooltip="This input won't display the content"
            placeholder="• • • • •"
          ></Input>
          <Input
            type={"range"}
            size="xs"
            label="Default number"
            tooltip="This is the default range input"
          ></Input>
        </Container>
      </div>
      <div className="fade-in-up">
        <Container title={"Input helpers and errors"}>
          <Input
            size="md"
            label="Input with helper text"
            tooltip={"This input has helper text"}
            placeholder="e.g: Average size input field"
            helperText="Helper text"
            errorText="This is a message of error"
          ></Input>
        </Container>
      </div>
      <div className="fade-in-up">
        <Container title="Inputs by dimension">
          <Input
            size="xs"
            label="Extra small"
            placeholder="e.g: Smaller than small"
          ></Input>
          <Input
            size="sm"
            label="Small"
            placeholder="e.g: Smaller than medium"
          ></Input>
          <Input
            size="md"
            label="Medium"
            placeholder="e.g: Average size input field"
          ></Input>
          <Input
            size="lg"
            label="Large"
            placeholder="e.g: Larger than medium"
          ></Input>
          <Input
            size="xl"
            label="Extra large"
            placeholder="e.g: Larger than large"
          ></Input>
          <Input
            label="Defined by container"
            placeholder="e.g: This will span the whole parent container"
          ></Input>
        </Container>
      </div>
    </div>
  );
}

export default InputPage;
