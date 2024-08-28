import {
  TableCard,
  TableLeftSide,
  TableRightSide,
} from "@/Components/Table/TableCard";
import tableDetail from "@/Data/TableData";
import TableShape from "@/Components/Table/TableShape";
import path from "path";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

const { table } = useContext(GlobalContext).tableProvider;

const Tables = () => {
  const leftSide = tableDetail.filter((item) => item.potition === "right");
  const rightSide = tableDetail.filter((item) => item.potition === "left");

  return (
    <TableCard>
      <TableLeftSide>{table.no}</TableLeftSide>
      <TableRightSide>
        {rightSide.map((table) => (
          <TableShape key={table.id} slug={table.slug} />
        ))}
      </TableRightSide>
    </TableCard>
  );
};

export default Tables;
