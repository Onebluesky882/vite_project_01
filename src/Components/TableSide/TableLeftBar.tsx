import { TableStatus, TableType } from "./TableData";
import TableCard from "./TableBase";

const TableLeftBar = (props: TableType) => {
  return <TableCard {...props} side="left" />;
};
function ValidateStatus(status: string): TableStatus {
  if (Object.values(TableStatus).includes(status as TableStatus)) {
    return status as TableStatus;
  }
  throw new Error("Invalid status value");
}

export default TableLeftBar;
