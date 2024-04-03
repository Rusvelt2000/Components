import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Title from "../Components/Title";

function App() {
  const [selectedDish, setSelectedDish] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);

  useEffect(() => {}, [selectedDish, selectedDrink]);

  const handleSelectedDish = (selection) => {
    setSelectedDish(selection);
  };
  const handleSelectedDrink = (selection) => {
    setSelectedDrink(selection);
  };

  const optionsFood = [
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

  return (
    <div>
      <Title>Dropdowns</Title>
      <div className="DropdownContainer fade-in-up">
        <Dropdown
          value={selectedDish}
          options={optionsFood}
          onChange={handleSelectedDish}
        >
          Select a dish
        </Dropdown>
        <Dropdown
          value={selectedDrink}
          options={optionsDrink}
          onChange={handleSelectedDrink}
        >
          Select a drink
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
