import {
  SideBarItemLeft,
  leftMenuList,
} from "./Layout/SidebarItem/SidebarItem";

export default function SidebarLeft() {
  return (
    <div style={{ position: "fixed", top: "220px", left: "0px" }}>
      {leftMenuList.map((left) => (
        <SideBarItemLeft
          key={left.id}
          id={left.id}
          name={left.name}
          slug={left.slug}
          img={left.img}
        />
      ))}
    </div>
  );
}
