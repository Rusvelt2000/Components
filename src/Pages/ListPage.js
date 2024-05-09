import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGroceryItem,
  removeGroceryItem,
  emptyGroceryList,
  addTravelItem,
  emptyTravelList,
  removeTravelItem,
} from "../store";
import Section from "../Components/Section";
import Title from "../Components/Title";
import Input from "../Components/Input";
import Button from "../Components/Button";
import ActionRow from "../Components/ActionRow";
import Container from "../Components/Container";

function ListPage() {
  const dispatch = useDispatch();
  const [groceryValue, setGroceryValue] = useState("");
  const [travelValue, setTravelValue] = useState("");
  const groceryList = useSelector((state) => {
    return state.groceryList;
  });
  const travelList = useSelector((state) => {
    return state.travelList;
  });
  const groceryListInput = document.querySelector(".addGrocery input");
  const travelListInput = document.querySelector(".addTravelItem input");
  const handleGroceryChange = (event) => {
    setGroceryValue(event.target.value);
  };

  const handleTravelChange = (event) => {
    setTravelValue(event.target.value);
  };

  const handleAddGrocery = (event) => {
    event.preventDefault();
    if (groceryValue.trim() !== "") {
      dispatch(addGroceryItem(groceryValue));
      groceryListInput.focus();
    }
    setGroceryValue("");
  };

  const handleAddTravelItem = (event) => {
    event.preventDefault();
    if (travelValue.trim() !== "") {
      dispatch(addTravelItem(travelValue));
      travelListInput.focus();
    }
    setTravelValue("");
  };

  const handleEmptyGroceryList = () => {
    dispatch(emptyGroceryList());
    setGroceryValue("");
    groceryListInput.focus();
  };

  const handleEmptyTravelList = () => {
    dispatch(emptyTravelList());
    travelListInput.focus();
  };

  const handleDeleteGroceryListItem = (index) => {
    dispatch(removeGroceryItem(index));
  };

  const handleDeleteTravelItem = (index) => {
    dispatch(removeTravelItem(index));
  };

  const renderGroceryItems = groceryList.map((item, index) => {
    return (
      <ActionRow
        key={item + index}
        deleteAction={() => handleDeleteGroceryListItem(index)}
      >
        <p>{item}</p>
      </ActionRow>
    );
  });

  const renderTravelItems = travelList.map((item, index) => {
    return (
      <ActionRow
        key={item + index}
        deleteAction={() => handleDeleteTravelItem(index)}
      >
        <p>{item}</p>
      </ActionRow>
    );
  });

  return (
    <div>
      <Title>Lists</Title>
      <Section col4>
        <Container title="Grocery list">
          <form onSubmit={handleAddGrocery}>
            <Input
              placeholder="e.g. milk"
              label="Add grocery"
              onChange={handleGroceryChange}
              value={groceryValue}
              className="addGrocery"
            />
            <div className="flex">
              <Button span primary onClick={handleAddGrocery}>
                Add item
              </Button>
              <Button span alert onClick={handleEmptyGroceryList}>
                Empty list
              </Button>
            </div>
          </form>
          <div>
            {renderGroceryItems.length > 0 && (
              <div>
                <hr />
                <h4>Grocery List</h4>
              </div>
            )}
            {renderGroceryItems}
          </div>
        </Container>
        <Container title="Travel list">
          <form onSubmit={handleAddTravelItem}>
            <Input
              label="Add travel item"
              placeholder="e.g. toothpaste"
              onChange={handleTravelChange}
              value={travelValue}
              className="addTravelItem"
            ></Input>
            <div className="flex">
              <Button span primary onClick={handleAddTravelItem}>
                Add item
              </Button>
              <Button span alert onClick={handleEmptyTravelList}>
                Empty list
              </Button>
            </div>
          </form>
          <div>
            {renderTravelItems.length > 0 && (
              <div>
                <hr />
                <h4>Travel List</h4>
                {renderTravelItems}
              </div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default ListPage;
