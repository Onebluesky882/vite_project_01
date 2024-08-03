import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/Table";
import { useContext } from "react";

const Table = ({ id, seat, status }: Table) => {
  const { table, setTable } = useContext(GlobalContext).tableProvider;
  const tableId = table.find(item => item.)
  return <div></div>;
};
