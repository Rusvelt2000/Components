import Title from "../Components/Title";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Container from "../Components/Container";
import { useState } from "react";

function ListPage() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setListItems([...listItems, inputValue]);
    setInputValue("");
  };

  const renderItems = listItems.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  return (
    <div>
      <Title>Lists</Title>
      <div className="fade-in-up col-2">
        <Container title="Default list">
          <form onSubmit={addItem}>
            <Input
              size="sm"
              placeholder="Add an item to the list"
              label="Add"
              onChange={handleChange}
              value={inputValue}
            />
            <Button primary onClick={addItem}>
              Add item
            </Button>
          </form>
        </Container>
        <Container>
          <ul>{renderItems}</ul>
        </Container>
      </div>
    </div>
  );
}

export default ListPage;
