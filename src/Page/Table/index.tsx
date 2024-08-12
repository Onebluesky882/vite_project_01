import NineTables, { TableProps } from "@/Components/tempTable";

const tables: TableProps[] = [
  {
    id: "A1",
    status: "Available",
  },
  {
    id: "A2",
    status: "reserved",
  },
  {
    id: "A3",
    status: "Available",
  },
];

const Tables = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "absolute" }}>
        {tables.map((table) => (
          <NineTables key={table.id} status={table.status} />
        ))}
      </div>
    </div>
  );
};

export default Tables;
