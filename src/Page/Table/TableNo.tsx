import TableNoCard from "@/Components/Table/TableNoCard";
import { table as tableData } from "@/Data/TableData";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const TableNo = () => {
  const { tableNo } = useParams();

  const { table } = useContext(GlobalContext).tableProvider;

  const filterTable = tableData.filter((t) => t.tableNo === tableNo);

  return (
    <div>
      {filterTable.map((t) => (
        <TableNoCard key={t.tableNo} />
      ))}
    </div>
  );
};

export default TableNo;
