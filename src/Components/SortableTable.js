import { useState } from "react";
import Table from "./Table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";

function SortableTable(props) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortImage, setSortImage] = useState(<FaSort />);
  const { config, data } = props;

  const handleClick = (label) => {
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

  const sortableConfig = config.map((column, index) => {
    if (column.sortableValue) {
      return {
        ...column,
        header: () => (
          <th key={index} onClick={() => handleClick(column.label)}>
            <div
              className={
                column.label === sortBy && sortOrder
                  ? "sortable active"
                  : "sortable"
              }
            >
              {column.label === sortBy ? sortImage : <FaSort />}
              {column.label}
            </div>
          </th>
        ),
      };
    } else {
      return column;
    }
  });

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

  return <Table {...props} data={sortedData} config={sortableConfig} />;
}

export default SortableTable;
