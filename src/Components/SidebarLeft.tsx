import {
  SideBarItemLeft,
  leftMenuList,
} from "./Layout/SidebarItem/SidebarItem";

export default function SidebarLeft() {
  return (
    <div style={{ position: "fixed", top: "180px", left: "0px" }}>
      {leftMenuList.map((menu) => (
        <SideBarItemLeft
          key={menu.id}
          id={menu.id}
          name={menu.name}
          slug={menu.slug}
          img={menu.img}
        />
      ))}
    </div>
  );
}
