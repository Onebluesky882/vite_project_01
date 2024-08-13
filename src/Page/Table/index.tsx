import tableLeftBar, {
  tableRightBar,
  TableType,
} from "@/Components/TableSide/TableData";
import TableLeftBar from "@/Components/TableSide/TableLeftBar";

const Tables = () => {
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
          {tableRightBar.map((table) => (
            <TableLeftBar
              key={table.no}
              no={table.no}
              status={table.status}
              slug={table.slug}
            />
          ))}
        </div>
        <div style={{}}>
          {tableLeftBar.map((table) => (
            <TableLeftBar
              key={table.no}
              no={table.no}
              status={table.status}
              slug={table.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tables;
