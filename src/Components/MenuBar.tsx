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
      <div
        style={{
          width: "100%",
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "-15px",
        }}
      >
        {menulist.map((menu) => (
          <li style={{ fontSize: "10px" }}>{menu}</li>
        ))}
      </div>
    </>
  );
}
