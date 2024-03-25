import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";

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
    <div style={{ display: "flex", gap: "32px" }}>
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
  );
}

export default App;
