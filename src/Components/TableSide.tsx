import React from "react";
import styled, { css } from "styled-components";
import { Table } from "../types/TableOrder";
import { Link } from "react-router-dom";
type TableType = {
  no: "A1" | "A2" | "A3" | "A4" | "A5" | "B1" | "B2" | "B3" | "B4";
  status: "Available" | "Reserved" | "Occupied";
  slug: string;
};

const Table = ({
  no,
  side,
  slug,
  status,
}: TableType & { side: "left" | "right" }) => {
  const TableLayout: React.CSSProperties = {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    margin: "20px",
    padding: "20px",
    ...getStatusStyles(status),
  };

  return (
    <div style={{}}>
      <div style={{ ...TableLayout }}>
        <Link style={{ textDecoration: "none" }} to={slug}>
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
      return { backgroundColor: "green" };
    case "Occupied":
      return { backgroundColor: "green" };
    default:
      return { backgroundColor: "green" };
  }
};

export default Table;
