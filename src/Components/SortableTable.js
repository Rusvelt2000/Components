import Table from "./Table";
import { FaSort } from "react-icons/fa6";
import useSort from "../Hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortImage, setSortColumn, sortedData } = useSort({
    config,
    data,
  });

  const sortableConfig = config.map((column, index) => {
    if (column.sortableValue) {
      return {
        ...column,
        header: () => (
          <th key={index} onClick={() => setSortColumn(column.label)}>
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

  return <Table {...props} data={sortedData} config={sortableConfig} />;
}

export default SortableTable;
