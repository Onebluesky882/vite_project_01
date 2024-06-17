import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px",
        margin: "0px",
      }}
    >
      <Link
        style={{ textDecoration: "none", fontSize: "12px", color: "#5B48CE" }}
        to={"/"}
      >
        Home
      </Link>
      <img
        src={"src/assets/arroy_dee_logo.png"}
        alt="logoname"
        style={{ height: 40 }}
      />
      <div
        style={{
          width: "10px",
          height: "10px",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src="src/assets/cart_icons.png"
          style={{ width: "30px", height: "30px" }}
        />
        <span
          style={{
            position: "absolute",
            top: "25px",
            left: "14px",
            fontSize: "8px",
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
    </header>
  );
}
