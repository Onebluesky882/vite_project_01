import { leftMenuList } from "./SidebarItem/LeftMenu";
import { SideBarItemLeft } from "./SidebarItem";

export default function SidebarStyle() {
  return (
    <div style={{ position: "fixed", top: "100px", left: "0px" }}>
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
