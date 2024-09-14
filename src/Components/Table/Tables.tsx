import { Table } from "@/types/TableOrder";
import { Link } from "react-router-dom";

type TableProps = {
  no: string;
  tables?: Table[];
};

export const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      <div
        style={{ display: "flex", background: "white", borderRadius: "10px" }}
      >
        {children}
      </div>
    </div>
  );
};

export const TableCard = ({ children }: React.PropsWithChildren) => {
  return (
    <div style={{ padding: "0px" }}>
      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};

export const TablesMap = ({ no, tables }: TableProps) => {
  // todo Link
  return (
    <Link style={{ textDecoration: "none", color: "black" }} to={"blank"}>
      <div
        style={{
          padding: "25px",
          borderRadius: "999px",
          margin: "10px",
        }}
      >
        <p
          style={{ fontSize: "18px", fontWeight: "bold", textAlign: "center" }}
        >
          {no}{" "}
        </p>
        <p style={{ textAlign: "center", fontSize: "14px" }}></p>
      </div>
    </Link>
  );
};

export const GetStatusStyles = (status: string): React.CSSProperties => {
  switch (status) {
    case "AVAILABLE":
      return { backgroundColor: "#B2D3AC" };
    case "BOOKED":
      return { backgroundColor: "#E6A946" };
    case "CLEANING":
      return { backgroundColor: "#DCD3C1" };
    default:
      return {
        backgroundColor: "white",
      };
  }
};
