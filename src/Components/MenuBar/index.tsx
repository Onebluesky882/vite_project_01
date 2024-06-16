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
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        {menulist.map((menu) => (
          <li style={{ fontSize: "10px" }}>{menu}</li>
        ))}
      </div>
    </>
  );
}
