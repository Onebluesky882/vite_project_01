import {
  SideBarItemRight,
  rightMenuList,
} from "./Layout/SidebarItem/SidebarItem";

export default function SidebarRight() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        position: "fixed",
        top: "220px",
        right: "0px",
      }}
    >
      {rightMenuList.map((right) => (
        <SideBarItemRight
          key={right.id}
          id={right.id}
          name={right.name}
          slug={right.slug}
          img={right.img}
        />
      ))}
    </div>
  );
}
