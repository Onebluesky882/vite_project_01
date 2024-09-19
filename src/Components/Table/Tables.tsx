import { Link, useNavigate } from "react-router-dom";
import PopupStatus from "./PopupStatus";

type TableProps = {
  no: string;
  status: string;
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

export const TablesMap = ({ no, status }: TableProps) => {
  const navigate = useNavigate();
  // todo Link
  return (
    <div>
      <button
        //Link
        style={{
          textDecoration: "none",
          color: "black",
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
      <PopupStatus tableNo={no} />
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
