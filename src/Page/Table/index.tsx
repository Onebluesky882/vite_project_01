import tableDetail from "@/Components/Table/TableData";
import TableLeftBar from "@/Components/Table/TableLeftBar";

const Tables = () => {
  const leftSide = tableDetail.filter((item) => item.potition === "right");
  const rightSide = tableDetail.filter((item) => item.potition === "left");
  return (
    <div
      style={{
        display: "flex",
        margin: " auto",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",

          padding: "50px",

          margin: "20px",
          borderRadius: "20px",
          background: "#F6ECD2",
          // Set the background to red here
        }}
      >
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Table
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {leftSide.map((table) => (
            <TableLeftBar
              key={table.no}
              no={table.no}
              status={
                table.status as "AVAILABLE" | "OCCUPIED" | "BOOKED" | "CLEANING"
              }
              slug={table.slug}
            />
          ))}
        </div>
        <div style={{}}>
          {rightSide.map((table) => (
            <TableLeftBar
              key={table.no}
              no={table.no}
              status={
                table.status as "AVAILABLE" | "OCCUPIED" | "BOOKED" | "CLEANING"
              }
              slug={table.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tables;
