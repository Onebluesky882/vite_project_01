import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { menu as menuCategory } from "@/Data/Menu";
import { MenuCard } from "../menuCard/MenuCard";
import { div } from "framer-motion/client";
import SidebarRight from "../SidebarRight";
import SidebarLeft from "../SidebarLeft";

const TableNoCard = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = () => {
    setConfirm(true);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
      }}
    >
      <SidebarRight />
      <SidebarLeft />
      <div style={{ display: "flex", margin: " auto" }}>
        <h1>โต๊ะ : {table.tableNo}</h1>{" "}
      </div>
      <div style={{ display: "flex", margin: "auto" }}>
        <button
          style={{ padding: " 10px", margin: "20px" }}
          onClick={handleConfirm}
        >
          confirm
        </button>
      </div>

      <div style={{ backgroundColor: "blue", display: "flex" }}></div>
      <CallMenu />
    </div>
  );
};

const CallMenu = () => {
  const showMenu = menuCategory.filter((type) => type.category === "beef");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 5 equal-width columns
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showMenu.map((menu) => (
          <MenuCard
            key={menu.id}
            image={menu.image}
            name={menu.name}
            price={menu.price}
            id={menu.id}
            category={menu.category}
          />
        ))}
      </div>
    </div>
  );
};

export default TableNoCard;
