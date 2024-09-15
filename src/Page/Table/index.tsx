import {
  TableCard,
  TableContainer,
  TablesMap,
} from "@/Components/Table/Tables";
import { table } from "@/Data/TableData";

const Table = () => {
  const tablesLeftSide = table.filter((t) => t.position === "left");
  const tablesRightSide = table.filter((t) => t.position === "right");

  return (
    <TableContainer>
      <TableCard>
        {tablesRightSide.map((p) => (
          <TablesMap key={p.no} no={p.no} table={p.no} status={p.status} />
        ))}
      </TableCard>
      <TableCard>
        {tablesLeftSide.map((p) => (
          <TablesMap key={p.no} no={p.no} table={p.no} status={p.status} />
        ))}
      </TableCard>
    </TableContainer>
  );
};

export default Table;
