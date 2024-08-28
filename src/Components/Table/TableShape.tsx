import { getTableId } from "@/Data/TableData";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { Table } from "@/types/TableOrder";
import { useContext } from "react";
import { Link } from "react-router-dom";

const { table, isLoading, loadTable, setTable } =
  useContext(GlobalContext).tableProvider;

type TableShapeProps = {
  no: Table[];
  slug: string;
};

const TableShape = ({ slug, no }: TableShapeProps) => {
  const findTable = no.find((tables) => tables.no === table?.no);
  const getTableNo = findTable
    ? getTableId(findTable.no.toString())
    : undefined;

  if (!findTable) {
    return <div>No table data available.</div>;
  }
  return (
    <div style={TableLayout}>
      <Link
        style={{
          textDecoration: "none",
          color: "white",
          textAlign: "center",
        }}
        to={slug}
      >
        <h3>{getTableNo?.no}</h3>
        <p>{findTable.status}</p>
        <p>{findTable.seat}</p>
      </Link>
    </div>
  );
};

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
  ...getStatusStyles(findTable.status), // Apply styles based on status
};

export default TableShape;
