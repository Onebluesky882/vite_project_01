import { TableType } from "./TableData";
import TableCard from "./TableBase";

const TableRightBar = (props: TableType) => {
  return <TableCard side={"right"} {...props} />;
};

export default TableRightBar;
