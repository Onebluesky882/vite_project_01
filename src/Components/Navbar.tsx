export const menulist = [
  { id: 0, name: "เมนูหลัก", slug: "" },
  { id: 1, name: "Pork", slug: "desert" },
  { id: 2, name: "เครื่องดื่ม", slug: "drink" },
  { id: 3, name: "รายละเอียด", slug: "information" },
];

interface Props {
  id: number;
  name: string;
  slug: string;
}

export const Navbar = ({ id, name, slug }: Props) => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          width: "100%",
        }}
      >
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
          <li style={{ listStyleType: "none", padding: "20px" }}>{name}</li>
        </a>
      </nav>
    </>
  );
};
