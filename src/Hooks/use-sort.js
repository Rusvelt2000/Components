import { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";

function useSort({ data, config }) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortImage, setSortImage] = useState(<FaSort />);

  const setSortColumn = (label) => {
    setSortBy((current) => {
      if (current !== label) {
        setSortOrder("asc");
        setSortImage(<FaSortUp />);
      }
      return label;
    });

    if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortImage(<FaSortDown />);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortImage(<FaSort />);
    } else if (sortOrder === null) {
      setSortOrder("asc");
      setSortImage(<FaSortUp />);
    }
  };

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortableValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortableValue(a);
      const valueB = sortableValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortBy,
    sortOrder,
    sortImage,
    setSortColumn,
    sortedData,
  };
}

export default useSort;
