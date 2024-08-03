import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/Table";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const table = () => {
  const { table, setTable } = useContext(GlobalContext).tableProvider;
  const { number } = useParams();

  const tableId = [...table];
  tableId.filter((item) => item.id === number);

  return <div>hello</div>;
};

export default table;
