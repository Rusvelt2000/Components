import Table from "./Table";

function SortableTable(props) {
  const { config } = props;
  const handleClick = (label) => {
    console.log(label);
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

  return <Table {...props} config={sortableConfig} />;
}

export default SortableTable;
