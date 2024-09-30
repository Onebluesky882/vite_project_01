import { menuList } from "@/Data/MenuCategory";
import { SideBarItemRight } from "./Layout/SidebarItem/SideBarItemRight";

export default function SidebarRight() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        position: "fixed",
        top: "180px",
        right: "0px",
      }}
    >
      {menuList.map((menu) => (
        <SideBarItemRight
          key={menu.id}
          name={menu.name}
          img={menu.img}
          id={menu.id}
          position={menu.position}
        />
      ))}
    </div>
  );
}
