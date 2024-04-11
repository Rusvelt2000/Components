import Table from "./Table";

function SortableTable(props) {
  const { config } = props;
  const sortableConfig = config.map((column, index) => {
    if (column.isSortable) {
      return {
        ...column,
        header: () => <th key={index}>{column.label} is sortable</th>,
      };
    } else {
      return column;
    }
  });

  return <Table {...props} config={sortableConfig} />;
}

export default SortableTable;
