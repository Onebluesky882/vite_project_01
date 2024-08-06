import TableOrderCard from "@/Components/TableOrderCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/TableOrder";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const TableSystem = () => {
  const { table } = useContext(GlobalContext).tableProvider;

  return (
    <p>
      {table.map((no) => (
        <TableOrderCard key={no.id} tables={table} />
      ))}
    </p>
  );
};

export default TableSystem;
