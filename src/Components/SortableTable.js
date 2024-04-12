import { useState } from "react";
import Table from "./Table";

function SortableTable(props) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const { config } = props;
  const handleClick = (label) => {
    setSortBy((current) => {
      if (current !== label) {
        setSortOrder("asc");
      }
      return label;
    });

    if (sortOrder === "asc") {
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortOrder(null);
    } else if (sortOrder === null) {
      setSortOrder("asc");
    }
  };

  const sortableConfig = config.map((column, index) => {
    if (column.isSortable) {
      return {
        ...column,
        header: () => (
          <th
            className="sortable"
            key={index}
            onClick={() => handleClick(column.label)}
          >
            {column.label}
          </th>
        ),
      };
    } else {
      return column;
    }
  });

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} config={sortableConfig} />
    </div>
  );
}

export default SortableTable;
