import { AiFillGift } from "react-icons/ai";
import { FaClipboardList, FaHome } from "react-icons/fa";
import { PiCallBellFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "100px",
        justifyContent: "center",
        textAlign: "center",
        bottom: "0",
        position: "sticky",
        alignItems: "center",
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",
          border: "1",
          borderStyle: "solid",
          borderColor: "#DDC879",
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      >
        <nav style={{ ...navStyle }}>
          <li style={{ listStyleType: "none" }}>
            <FaHome {...iconStyle} />
          </li>
          Home
        </nav>
        <nav style={{ ...navStyle }}>
          <li style={{ listStyleType: "none" }}>
            <AiFillGift {...iconStyle} />
          </li>
          Promotion
        </nav>
        <nav style={{ ...navStyle }}>
          <li style={{ listStyleType: "none" }}>
            <FaClipboardList {...iconStyle} />
          </li>
          Order
        </nav>
        <nav style={{ ...navStyle }}>
          <li style={{ listStyleType: "none" }}>
            <PiCallBellFill {...iconStyle} />
          </li>
          Home
        </nav>
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
};

const iconStyle = {
  size: "50",
  color: "#E1B86F",
};
