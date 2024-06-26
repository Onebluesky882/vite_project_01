import { AiFillGift } from "react-icons/ai";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        marginTop: "200px",
        position: "sticky",
        bottom: "0px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          bottom: "0",
          position: "fixed",
          display: "flex",
          border: "1",
          borderStyle: "solid",
          borderColor: "#DDC879",
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
          textAlign: "center",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <FaHome {...iconStyle} />
            </li>
            Home
          </nav>
        </a>

        <a href="/promotion" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <AiFillGift {...iconStyle} />
            </li>
            Promotion
          </nav>
        </a>
        <a href="/order" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <FaClipboardList {...iconStyle} />
            </li>
            Order
          </nav>
        </a>
        <a href="/waiter" style={{ textDecoration: "none" }}>
          <nav style={{ ...navStyle }}>
            <li style={{ listStyleType: "none" }}>
              <PiCallBellFill {...iconStyle} />
            </li>
            Waiter
          </nav>
        </a>
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
