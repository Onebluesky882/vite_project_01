import { SideBarItemProps } from "./SidebarItem";

export const SideBarItemBase = ({
  id,
  name,
  slug,
  img,
  position,
}: SideBarItemProps & { position: "left" | "right" }) => {
  let roundedStyle;
  if (position === "left") {
    roundedStyle = {
      borderTopRightRadius: "50px",
      borderBottomRightRadius: "50px",
    };
  } else {
    roundedStyle = {
      borderTopLeftRadius: "50px",
      borderBottomLeftRadius: "50px",
    };
  }

  return (
    <nav>
      <a
        key={id}
        style={{
          justifyContent: "center",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: "400",
        }}
        href={slug}
      >
        <li
          style={{
            listStyleType: "none",
            padding: "30px",
            backgroundColor: "#f7e7bd",
            ...roundedStyle,
            marginTop: "10px",
          }}
          key={id}
        >
          <img
            style={{
              position: "fixed",
              marginTop: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
            src={img}
            width={40}
          />
          {name}
        </li>
      </a>
    </nav>
  );
};
