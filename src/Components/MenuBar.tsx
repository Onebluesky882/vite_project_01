import { Container } from "../Style/divColum";

export default function MenuBar() {
  const menulist = [
    "เมนูหลัก",
    "อาหารทานเล่น",
    "เมนูกับข้าว",
    "ของหวาน",
    "เครื่องดื่ม",
  ];

  return (
    <>
      <div style={Container}>
        <div
          style={{
            width: "50%",
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {menulist.map((menu) => (
            <li style={{ fontSize: "10px" }}>{menu}</li>
          ))}
        </div>
        <div style={{ width: "50%", display: "flex" }}>
          <p>hello</p>
        </div>
      </div>
    </>
  );
}
