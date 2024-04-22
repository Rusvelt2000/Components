import { useState } from "react";
import Section from "../Components/Section";
import Title from "../Components/Title";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Container from "../Components/Container";
import CheckBox from "../Components/CheckBox";

function ListPage() {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);
  const inputRef = document.querySelector(".addItem");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setListItems([...listItems, inputValue]);
    }
    setInputValue("");
    inputRef.focus();
  };

  const renderItems = listItems.map((item, index) => {
    return <CheckBox key={index}>{item}</CheckBox>;
  });

  return (
    <div>
      <Title>Lists</Title>
      <Section col2>
        <Container title="Default list">
          <form onSubmit={addItem}>
            <Input
              size="sm"
              placeholder="Add an item to the list"
              label="Add"
              onChange={handleChange}
              value={inputValue}
              className="addItem"
            />
            <Button primary onClick={addItem}>
              Add item
            </Button>
          </form>
        </Container>
        <Container>{renderItems}</Container>
      </Section>
    </div>
  );
}

export default ListPage;
