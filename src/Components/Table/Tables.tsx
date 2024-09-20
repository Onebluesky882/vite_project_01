import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type TableProps = {
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

  const [confirm, setConfirm] = useState(false);

  // find item what do you want to find ? match with ?

  const handleConfirm = () => {
    setConfirm(true);
    if (confirm) {
      setConfirm(true);
      console.log("Confirmed table:", no);

      navigate(`/tables/${no.toLowerCase()}`);
    }
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
        onClick={
          handleConfirm
          // # Strategy 1
          // call some action
          // update the table status => call supabase
          // navigate to next page

          // # Strategy 2
          // Call popup
          // openPopup()
        }
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
