interface Props {
  id: number;
  name: string;
  slug: string;
  img: string;
}
export default function SideBar({ id, name, slug, img }: Props) {
  return (
    <div className="sidebar">
      <nav className="nav-left">
        <div>
          <svg viewBox="0 0 10 10">{img}</svg>
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
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              marginTop: "10px",
              marginLeft: "-10px",
            }}
            key={id}
          >
            {name}
          </li>
        </a>
      </nav>
      <nav className="nav-right">
        <div>
          <svg viewBox="0 0 10 10">{img}</svg>
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
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              marginTop: "10px",
              marginLeft: "-10px",
            }}
            key={id}
          >
            {name}
          </li>
        </a>
      </nav>
    </div>
  );
}
