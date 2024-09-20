import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "../Animations/Alert";
import table from "../../Data/TableData";
import { Table } from "@/types/TableOrder";

type TableProps = {
  no: string;
  status: string;
};

type TableCardProps = {
  position: string;
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

export const TablesMap = ({ no, status }: TableProps) => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [table, setOrders] = useState<Table[]>([]);
  const [confirm, setConfirm] = useState(false);

  const defaultTable: Table = {
    status: "AVAILABLE",
    tableNo: "A1" as const,
    seat: 3,
  };
  // find item what do you want to find ? match with ?
  const submitTable = ({ tableNo: no }: Pick<Table, "tableNo">) => {
    const tableItem = table.find((t) => t.tableNo === no);

    const handleConfirm = () => {
      if (confirm) {
        setConfirm(true);
        const newTable = [...table];
      }
    };
  };
  // todo Link
  return (
    <div>
      {showAlert && (
        <Alert
          message="confirm to booking"
          onClose={() => setShowAlert(false)}
        />
      )}
      <button
        //Link
        style={{
          textDecoration: "none",
          color: "black",
          borderStyle: "none",
          backgroundColor: "Background",
        }}
        onClick={() => {
          // # Strategy 1
          // call some action
          // update the table status => call supabase
          // navigate to next page

          navigate(no.toLowerCase());

          // # Strategy 2
          // Call popup
          // openPopup()
        }}
      >
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
            {no}{" "}
          </p>
          <p style={{ textAlign: "center", fontSize: "14px" }}>{status}</p>
        </div>
      </button>
    </div>
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
