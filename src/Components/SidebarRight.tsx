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
      {menuList.map((right) => (
        <SideBarItemRight
          key={right.id}
          name={right.name}
          img={right.img}
          id={0}
        />
      ))}
    </div>
  );
}
