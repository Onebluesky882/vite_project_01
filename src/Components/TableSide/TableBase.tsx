import React from "react";
import { Link } from "react-router-dom";
import { TableType } from "./TableData";

const TableCard = ({
  no,
  slug,
  status,
}: TableType & { side: "left" | "right" }) => {
  const TableLayout: React.CSSProperties = {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    margin: "30px",
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
        </Link>
      </div>
    </div>
  );
};

// bg condition change bg color status
const getStatusStyles = (status: string): React.CSSProperties => {
  switch (status) {
    case "Available":
      return { backgroundColor: "green" };
    case "Reserved":
      return { backgroundColor: "#B08C5D" };
    case "Occupied":
      return { backgroundColor: "#D7444A" };
    default:
      return { backgroundColor: "#BC6A6C" };
  }
};

export default TableCard;
