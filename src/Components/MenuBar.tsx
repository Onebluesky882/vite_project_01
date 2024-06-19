import { menulist } from "./Navbar";

export default function MenuBar() {
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
          <li style={{ fontSize: "10px" }}>{menu.name}</li>
        ))}
      </div>
    </>
  );
}
