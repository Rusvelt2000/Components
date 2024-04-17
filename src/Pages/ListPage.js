import Title from "../Components/Title";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Container from "../Components/Container";
import { useState } from "react";

function ListPage() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <Title>Lists</Title>
      <div className="fade-in-up col-2">
        <Container title="Default list">
          <Input
            size="sm"
            placeholder="Add an item to the list"
            label="Add"
            onChange={handleChange}
            value={inputValue}
          />
          <Button primary>Add item</Button>
        </Container>
      </div>
    </div>
  );
}

export default ListPage;
