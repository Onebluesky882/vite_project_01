import { useContext, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { MenuCard } from "../menuCard/MenuCard";
import { SidebarLeft, SidebarRight } from "../Sidebar";
import { menu } from "@/Data/Menu";
import Menu from "@/Page/Menu";
import { MenuProps } from "../Layout/SidebarItem/SideBarItemBase";

type MenuBarPrp = {
  submit: (cat: string) => null;
};

const TableNoCard = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const [confirm, setConfirm] = useState(false);

  const [menubar, setMenubar] = useState<string>("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", margin: " auto" }}>
        <h1>โต๊ะ : {table.tableNo}</h1>{" "}
      </div>
      <div style={{ display: "flex", margin: "auto" }}>
        <button style={{ padding: " 10px", margin: "20px" }}>confirm</button>
      </div>

      <div style={{ backgroundColor: "blue", display: "flex" }}></div>
      <h3> หน้า : {menubar}</h3>
      <Menu />
    </div>
  );
};

export const MenuCategory = ({ submit }: MenuProps) => {
  return <div>{}</div>;
};

export default TableNoCard;
