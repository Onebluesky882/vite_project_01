import TableNoCard from "@/Components/Table/TableNoCard";
import table from "@/Data/TableData";
import { useParams } from "react-router-dom";

const TableNo = () => {
  const { no } = useParams<string>();

  const tableNo = table.filter((t) => t.no.toLowerCase() === no);
  return (
    <div>
      {tableNo.map((t) => (
        <TableNoCard tableNo={table} no={t.no} id={t.no} />
      ))}
    </div>
  );
};

export default TableNo;
