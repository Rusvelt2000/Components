import { useState } from "react";
import Title from "../Components/Title";
import Container from "../Components/Container";
import Input from "../Components/Input";
import CheckBox from "../Components/CheckBox";
import Radio from "../Components/Radio";

function InputPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    if (e.target.value !== "") {
      setErrorMessage("Error message will override helper text");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <Title>Inputs</Title>
      <div className="fade-in-up">
        <Container direction={"horizontal"} title="Inputs by type">
          <Input
            size="sm"
            label="Default text input"
            placeholder="Text goes here"
          ></Input>
          <Input
            size="sm"
            label="Input with tooltip"
            tooltip="This input is for common text"
            placeholder="Text goes here"
          ></Input>
          <Input
            type={"number"}
            size="xs"
            label="Default number"
            placeholder="12345"
          ></Input>
          <Input
            type={"password"}
            size="sm"
            label="Hidden password"
            placeholder="• • • • •"
          ></Input>
          <Input
            type={"range"}
            size="sm"
            label="Default number"
            tooltip="This is the default range input"
          ></Input>
        </Container>
      </div>
      <div className="fade-in-up col-2">
        <Container direction={"horizontal"} title={"Checkboxes"}>
          <CheckBox>This is some content for the checkbox</CheckBox>
          <CheckBox>This another checkbox</CheckBox>
        </Container>
        <Container direction={"horizontal"} title={"Radio buttons"}>
          <Radio name="Options" value="Option 1">
            Option 1
          </Radio>
          <Radio name="Options" value="Option 2">
            Option 2
          </Radio>
          <Radio name="Options" value="Option 3">
            Option 3
          </Radio>
        </Container>
      </div>
      <div className="fade-in-up">
        <Container direction={"horizontal"} title={"Input helpers and errors"}>
          <Input
            size="md"
            label="Input with helper text"
            placeholder="Placeholder text"
            helperText="Helper text to provide more information"
            errorText=""
          ></Input>
          <Input
            size="md"
            label="Input with error text"
            placeholder="Type to see changes"
            helperText="Try to type something here"
            errorText={errorMessage}
            onChange={handleChange}
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
