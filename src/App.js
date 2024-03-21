import { useEffect, useState } from "react";
import Dropdown from "./Components/Dropdown";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {}, [selectedOption]);

  const handleSelectedItem = (selection) => {
    setSelectedOption(selection);
  };

  const options = [
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

  return (
    <div>
      <Dropdown
        selectedOption={selectedOption}
        options={options}
        onSelection={handleSelectedItem}
      ></Dropdown>
    </div>
  );
}

export default App;
