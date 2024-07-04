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
    <div>
      <Link to={slug} key={id}>
        <li
          style={{
            listStyleType: "none",
            paddingTop: "60px",
            paddingBottom: "60px",
            paddingRight: "40px",
            paddingLeft: "40px",
            backgroundColor: "#f7e7bd",
            ...roundedStyle,
            marginTop: "10px",
          }}
          key={id}
        >
          <div style={{ position: "relative", display: "flex" }}>
            <img
              style={{
                position: "absolute",
                left: "0px",
                top: "-10px",
              }}
              src={img}
              width={80}
            />
          </div>
          <div>
            <nav>{name}</nav>
          </div>
        </li>
      </Link>
    </div>
  );
};
