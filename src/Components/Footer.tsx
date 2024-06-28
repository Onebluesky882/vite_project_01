import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { AiFillGift } from "react-icons/ai";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  const { cart } = useContext(GlobalContext);

  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.amount));

  return (
    <div className="div-container-nav">
      <div className="div-section-nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <FaHome {...iconStyle} />
            </li>
            Home
            <h1> </h1>
          </nav>
        </Link>

        <Link to="/promotion" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <AiFillGift {...iconStyle} />
            </li>
            Promotion
          </nav>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", display: "inline" }}>
          <nav style={{ ...navStyle }}>
            <span className="nav-span-order">
              <p
                style={{
                  color: "white",
                  borderRadius: "10px",
                  background: "#ECC153",
                  padding: "3px",
                }}
              >
                {totalAmount}
              </p>
            </span>
            <li style={{ listStyleType: "none" }}>
              <FaClipboardList {...iconStyle} />
            </li>
            Order
          </nav>
        </Link>
        <Link to="/waiter" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <PiCallBellFill {...iconStyle} />
            </li>
            Waiter
          </nav>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
// nav styles
const navStyle = {
  paddingRight: "40px",
  paddingLeft: "45px",
  paddingTop: "10px",
  paddingBottom: "10px",
  color: "#C6723A",
  fontSize: "10px",
};

const iconStyle = {
  size: "30",
  color: "#E1B86F",
};
