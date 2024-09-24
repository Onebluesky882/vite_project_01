import TableNoCard from "@/Components/Table/TableNoCard";
import table from "@/Data/TableData";
import { useParams } from "react-router-dom";

const TableNo = () => {
  const { tableNo } = useParams<string>();
  const tables = table.filter((t) => t.tableNo === tableNo);
  console.log(tables);

  return (
    <div>
      {tables.map((t) => (
        <TableNoCard key={t.tableNo} />
      ))}
    </div>
  );
};

export default TableNo;
