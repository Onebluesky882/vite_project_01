import { Table } from "@/types/TableOrder";
import { Link } from "react-router-dom";

type TableShapeProps = {
  no: string;
  status: string;
  seat?: number;
  slug: string;
};

const TableShape = ({ no, status, seat, slug }: TableShapeProps) => {
  const TableLayout: React.CSSProperties = {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    margin: "20px",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    width: "6rem",
    borderRadius: "9999px",
    ...getStatusStyles(status),
  };

  return (
    <div style={{}}>
      <div style={{ ...TableLayout }}>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            textAlign: "center",
          }}
          to={slug}
        >
          <h3>{no}</h3>
          <p>{status}</p>
          <p>{seat}</p>
        </Link>
      </div>
    </div>
  );
};
//"AVAILABLE" | "OCCUPIED" | "BOOKED" | "CLEANING";
// bg condition change bg color status
const getStatusStyles = (status: string): React.CSSProperties => {
  switch (status) {
    case "AVAILABLE":
      return { backgroundColor: "green" };
    case "BOOKED":
      return { backgroundColor: "#B08C5D" };
    case "OCCUPIED":
      return { backgroundColor: "#D7444A" };
    case "CLEANING":
      return { backgroundColor: "#A4A8B6" };
    default:
      return { backgroundColor: "#BC6A6C" };
  }
};

export default TableShape;
