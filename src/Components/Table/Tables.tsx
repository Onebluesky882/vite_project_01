import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export type TableStatus = "AVAILABLE" | "OCCUPIED" | "RESERVED" | "CLEANING";
export type TableNo =
  | "A1"
  | "A2"
  | "A3"
  | "A4"
  | "A5"
  | "B1"
  | "B2"
  | "B3"
  | "B4";

export type TableProps = {
  tableNo: TableNo;
  status: TableStatus;
  seat: number;
};

type TableCardProps = {
  position: string;
};

export const TablesMap = ({ tableNo, status, seat }: TableProps) => {
  const { table, submitTable } = useContext(GlobalContext).tableProvider;
  const navigate = useNavigate();

  const handleSubmit = () => {
    submitTable({ tableNo: tableNo, status: status, seat: seat });
    navigate(`/${tableNo}`);
  };
  return (
    <div>
      <button
        //Link
        style={{
          textDecoration: "none",
          color: "black",
          borderStyle: "none",
          backgroundColor: "Background",
        }}
        onClick={handleSubmit}
      >
        {" "}
        <div
          style={{
            ...GetStatusStyles(status),
            padding: "25px",
            borderRadius: "999px",
            margin: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {tableNo} {seat}{" "}
          </p>
          <p style={{ textAlign: "center", fontSize: "14px" }}>{status}</p>
        </div>
      </button>
    </div>
  );
};

export const GetStatusStyles = (status: TableStatus): React.CSSProperties => {
  switch (status) {
    case "AVAILABLE":
      return { backgroundColor: "#B2D3AC" };
    case "OCCUPIED":
      return { backgroundColor: "#E6A946" };
    case "CLEANING":
      return { backgroundColor: "#DCD3C1" };
    default:
      return {
        backgroundColor: "white",
      };
  }
};

export const TableContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      style={{
        display: "flex",
        margin: "auto",
        padding: "20px",
        justifyContent: "center",
        background: "#F2F2F2",
        flexDirection: "column",
      }}
    >
      <h1 style={{ textAlign: "center" }}>ด้านหน้า</h1>
      <div
        style={{
          display: "flex",
          background: "white",
          borderRadius: "10px",
          margin: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const TableCard = ({
  children,
  position,
}: React.PropsWithChildren<TableCardProps>) => {
  return (
    <div style={{ padding: "0px" }}>
      <p style={{ textAlign: "center", margin: "-20px", marginTop: "20px" }}>
        {position}
      </p>
      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};
