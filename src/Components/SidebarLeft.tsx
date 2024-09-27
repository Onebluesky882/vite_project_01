import { menuList, SideBarItemLeft } from "./Layout/SidebarItem/SidebarItem";

export default function SidebarLeft() {
  return (
    <div style={{ position: "fixed", top: "180px", left: "0px" }}>
      {menuList.map((menu) => (
        <SideBarItemLeft key={menu.id} name={menu.name} img={menu.img} id={0} />
      ))}
    </div>
  );
}
