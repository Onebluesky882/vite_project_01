import {
  TableCard,
  TableLeftSide,
  TableRightSide,
} from "@/Components/Table/TableCard";
import tableDetail from "@/Data/TableData";
import TableShape from "@/Components/Table/TableShape";

const Tables = () => {
  const leftSide = tableDetail.filter((item) => item.potition === "right");
  const rightSide = tableDetail.filter((item) => item.potition === "left");

  return (
    <TableCard>
      <TableLeftSide>
        {leftSide.map((table) => (
          <TableShape
            key={table.id}
            no={table.no}
            status={table.status}
            slug={table.slug}
          />
        ))}
      </TableLeftSide>
      <TableRightSide>
        {rightSide.map((table) => (
          <TableShape
            key={table.id}
            no={table.no}
            status={table.status}
            slug={table.slug}
          />
        ))}
      </TableRightSide>
    </TableCard>
  );
};

export default Tables;
