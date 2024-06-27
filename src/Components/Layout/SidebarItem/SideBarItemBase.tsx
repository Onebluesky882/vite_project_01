import { SideBarItemProps } from "./SidebarItem";
import { Link } from "react-router-dom";

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
    <nav className="nav-side-bar">
      <Link
        to={slug}
        key={id}
        style={{
          justifyContent: "center",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "400",
        }}
      >
        <li
          style={{
            listStyleType: "none",
            padding: "40px",
            backgroundColor: "#f7e7bd",
            ...roundedStyle,
            marginTop: "10px",
          }}
          key={id}
        >
          <img
            style={{
              position: "fixed",
              marginTop: "-30px",
              justifyContent: "center",
              alignItems: "center",
            }}
            src={img}
            width={50}
          />
          {name}
        </li>
      </Link>
    </nav>
  );
};
