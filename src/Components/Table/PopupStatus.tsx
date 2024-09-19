import { IoIosCloseCircle } from "react-icons/io";

type PopupStatusProps = {
  tableNo: string;
};

const PopupStatus = ({ tableNo }: PopupStatusProps) => {
  return (
    <div style={popupOverlayStyle}>
      <div style={popupContentStyle}>
        <IoIosCloseCircle
          onClick={() => {}}
          style={{
            fontSize: "50px",
            position: "absolute",
            right: "35px",
            top: "35px",
            transform: "translate(100%, -100%)",
          }}
        />
        <h2>Change Status for Table {tableNo}</h2>
        <p>Select the new status:</p>
        <select style={{ padding: "10px" }}>
          <option value="AVAILABLE">AVAILABLE</option>
          <option value="BOOKED">BOOKED</option>
          <option value="CLEANING">CLEANING</option>
        </select>
        <div style={{ marginTop: "20px" }}>
          <button
            style={{ ...buttonStyle, backgroundColor: "#f44336" }}
            onClick={() => {}}
          >
            Cancel
          </button>
          <button style={buttonStyle} onClick={() => {}}></button>
        </div>
      </div>
    </div>
  );
};

const popupOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupContentStyle: React.CSSProperties = {
  position: "relative",
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginRight: "10px",
};
export default PopupStatus;
