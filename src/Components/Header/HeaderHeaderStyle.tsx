import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeaderStyle() {
  return <></>;
}

export function HomeIcon() {
  return (
    <div
      style={{
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          fontSize: "16px",
          color: "#5B48CE",
        }}
        to={"/"}
      >
        <FaHome
          style={{
            display: "flex",
            alignItems: "center",
          }}
        />
      </Link>
    </div>
  );
}

export function Logo() {
  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={"/mmd_logo_1.png"} alt="logoname" style={{ height: 70 }} />
    </div>
  );
}

export function OrderList() {
  return (
    <div
      style={{
        display: "flex",
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img
          src={"/cart_icons.png"}
          style={{ width: "20px", height: "20px" }}
        />
        <span
          style={{
            position: "absolute",
            top: "15px",
            left: "7px",
            fontSize: "6px",
            color: "red",
            display: "flex",
            background: "white",
            borderRadius: "10px",
            padding: "1px",
            borderStyle: "solid",
            borderColor: "#F6F6F6",
            paddingRight: "2px",
            paddingLeft: "2px",
          }}
        >
          0
        </span>
      </div>
    </div>
  );
}
