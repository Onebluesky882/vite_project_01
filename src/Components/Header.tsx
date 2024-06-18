import { Link } from "react-router-dom";
import Logo from "/src/assets/arroy_dee_logo.png";
import cart from "/src/assets/cart_icons.png";
import { FaHome } from "react-icons/fa";
import MenuBar from "./MenuBar";

export default function Header() {
  return (
    <header>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",

          background:
            " linear-gradient(0deg, rgba(254,247,235,1) 0%, rgba(255,215,230,0.39420572916666663) 100%",
          marginBottom: "-5px",
          borderRadius: " 10px",
        }}
      >
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
        <div
          style={{
            width: "30%",

            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={Logo} alt="logoname" style={{ height: 70 }} />
        </div>
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
            <img src={cart} style={{ width: "20px", height: "20px" }} />
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
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {<MenuBar />}
      </div>
    </header>
  );
}
