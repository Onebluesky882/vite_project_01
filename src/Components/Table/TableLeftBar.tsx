import { TableType } from "./TableData";
import TableCard from "./TableBase";

const TableLeftBar = (props: TableType) => {
  return <TableCard {...props} side="left" />;
};

export default TableLeftBar;
