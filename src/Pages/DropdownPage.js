import { useEffect, useState } from "react";
import Section from "../Components/Section";
import Dropdown from "../Components/Dropdown";
import Title from "../Components/Title";
import Container from "../Components/Container";

function App() {
  const [selectedPasta, setSelectedPasta] = useState(null);
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedDessert, setSelectedDessert] = useState(null);

  useEffect(() => {}, [
    selectedPasta,
    selectedDrink,
    selectedDrink,
    selectedDessert,
  ]);

  const handleSelectedPasta = (selection) => {
    setSelectedPasta(selection);
  };
  const handleSelectedMain = (selection) => {
    setSelectedMain(selection);
  };
  const handleSelectedDrink = (selection) => {
    setSelectedDrink(selection);
  };
  const handleSelectedDessert = (selection) => {
    setSelectedDessert(selection);
  };

  const optionsPasta = [
    {
      label: "Penne alla carbonara",
      value: "penne",
    },
    {
      label: "Gnocchi ai funghi porcini",
      value: "gnocchi",
    },
    {
      label: "Spaghetti alla bolognese",
      value: "spaghetti",
    },
  ];
  const optionsMain = [
    {
      label: "200gr Steak",
      value: "steak",
    },
    {
      label: "Rump Stew",
      value: "rumpStew",
    },
    {
      label: "Chicken Stew",
      value: "chickenStew",
    },
    {
      label: "Lamb Skews",
      value: "lambSkews",
    },
  ];
  const optionsDrink = [
    {
      label: "Aperol Spritz",
      value: "spritz",
    },
    {
      label: "Martini on the rock",
      value: "martini",
    },
    {
      label: "White russian",
      value: "russian",
    },
  ];
  const optionsDessert = [
    {
      label: "Tiramisu'",
      value: "tiramisu",
    },
    {
      label: "Chocolate Brownie",
      value: "brownie",
    },
    {
      label: "Ice Cream",
      value: "iceCream",
    },
  ];

  return (
    <div>
      <Title>Dropdowns</Title>
      <Section>
        <Container className="col-4" title="Default Dropdowns">
          <Dropdown
            label="Pasta"
            value={selectedPasta}
            options={optionsPasta}
            onChange={handleSelectedPasta}
          >
            Select Pasta
          </Dropdown>
          <Dropdown
            label="Main"
            value={selectedMain}
            options={optionsMain}
            onChange={handleSelectedMain}
          >
            Select Main
          </Dropdown>
          <Dropdown
            label="Drink"
            value={selectedDrink}
            options={optionsDrink}
            onChange={handleSelectedDrink}
          >
            Select Drink
          </Dropdown>
          <Dropdown
            label="Dessert"
            value={selectedDessert}
            options={optionsDessert}
            onChange={handleSelectedDessert}
          >
            Select Dessert
          </Dropdown>
        </Container>
      </Section>
      <Section col2>
        <Container className="col-2" title="No Label Dropdowns">
          <Dropdown
            value={selectedPasta}
            options={optionsPasta}
            onChange={handleSelectedPasta}
          >
            Select Pasta
          </Dropdown>
          <Dropdown
            value={selectedDrink}
            options={optionsDrink}
            onChange={handleSelectedDrink}
          >
            Select Drink
          </Dropdown>
        </Container>
      </Section>
      <Section col2>
        <Container className="col-2" title="Dropdowns with tooltips">
          <Dropdown
            label="Pasta"
            tooltip="Pasta is only offered for lunch"
            value={selectedPasta}
            options={optionsPasta}
            onChange={handleSelectedPasta}
          >
            Select Pasta
          </Dropdown>
          <Dropdown
            label="Main "
            tooltip="Please select your desired main dish"
            value={selectedMain}
            options={optionsMain}
            onChange={handleSelectedMain}
          >
            Select Main
          </Dropdown>
        </Container>
      </Section>
    </div>
  );
}

export default App;
