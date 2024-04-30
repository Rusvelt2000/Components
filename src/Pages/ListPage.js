import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store";
import Section from "../Components/Section";
import Title from "../Components/Title";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Container from "../Components/Container";
import CheckBox from "../Components/CheckBox";

function ListPage() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const listItems = useSelector((state) => {
    return state.list;
  });
  const inputRef = document.querySelector(".addItem input");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      dispatch(addItem(inputValue));
    }
    setInputValue("");
    inputRef.focus();
  };

  const emptyList = () => {
    //this will empty the list
  };

  const renderItems = listItems.map((item, index) => {
    return <CheckBox key={index}>{item}</CheckBox>;
  });

  return (
    <div>
      <Title>Lists</Title>
      <Section col4>
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
            <Button primary onClick={handleAddItem}>
              Add item
            </Button>
            <Button alert onClick={emptyList}>
              Empty list
            </Button>
          </form>
        </Container>
        <Container>{renderItems}</Container>
      </Section>
    </div>
  );
}

export default ListPage;
