import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, emptyList } from "../store";
import Section from "../Components/Section";
import Title from "../Components/Title";
import Input from "../Components/Input";
import Button from "../Components/Button";
import ActionRow from "../Components/ActionRow";
import Container from "../Components/Container";

function ListPage() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const listItems = useSelector((state) => {
    return state.list;
  });
  const listInput = document.querySelector(".addItem input");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch(addItem(inputValue));
      listInput.focus();
    }
    setInputValue("");
  };

  const handleEmptyList = () => {
    dispatch(emptyList());
    setInputValue("");
    listInput.focus();
  };

  const handleDelete = (index) => {
    dispatch(removeItem(index));
  };

  const renderItems = listItems.map((item, index) => {
    return (
      <ActionRow key={index} deleteAction={() => handleDelete(index)}>
        <p>{item}</p>
      </ActionRow>
    );
  });

  return (
    <div>
      <Title>Lists</Title>
      <Section col4>
        <Container title="Default list">
          <form onSubmit={handleAddItem}>
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
            <Button alert onClick={handleEmptyList}>
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
