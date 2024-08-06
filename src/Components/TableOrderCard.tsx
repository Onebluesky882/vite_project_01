import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/TableOrder";
import { useContext } from "react";

export type TableProps = {
  tables: Table[];
};

type TableNoProps = {
  tableNo: Table;
};

type TableStatusProps = {
  tableStatus: Table;
};

const TableOrderCard = ({ tables }: TableProps) => {
  // hook
  const { table } = useContext(GlobalContext).tableProvider;

  // find the table by id match with hook table id
  const selectedTable = tables.find((no) => no.id === table?.id);

  const tableStatus = selectedTable;

  return (
    <TableContainer>
      {selectedTable ? (
        <TableNo tableNo={selectedTable} />
      ) : (
        tableStatus && <TableStatus tableStatus={tableStatus} />
      )}
    </TableContainer>
  );
};

const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        margin: "auto",
        background: "blue",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};
const TableNo = ({ tableNo }: TableNoProps) => {
  return <p> {tableNo.id} </p>;
};

const TableStatus = ({ tableStatus }: TableStatusProps) => {
  return <h1>{tableStatus.status}</h1>;
};

export default TableOrderCard;
