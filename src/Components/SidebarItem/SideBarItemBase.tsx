import { SideBarItemProps } from ".";

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
    <nav className="sidebar-item">
      <div>
        <img src={img} />
      </div>
      <a
        key={id}
        style={{
          justifyContent: "center",
          textAlign: "center",
          textDecoration: "none",
          fontSize: "10px",
          fontWeight: "200",
        }}
        href={slug}
      >
        <li
          style={{
            listStyleType: "none",
            padding: "20px",
            backgroundColor: "#f7e7bd",
            ...roundedStyle,
            marginTop: "10px",
            marginLeft: "-10px",
          }}
          key={id}
        >
          {name}
        </li>
      </a>
    </nav>
  );
};
