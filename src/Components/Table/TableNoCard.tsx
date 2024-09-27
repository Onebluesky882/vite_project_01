import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { menu as menuCategory } from "@/Data/Menu";
import { MenuCard } from "../menuCard/MenuCard";
import { log } from "console";
import { div } from "framer-motion/client";

const TableNoCard = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = () => {
    setConfirm(true);
    console.log(confirm);
  };
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        flexDirection: "column",
        margin: "auto",
        justifyContent: "center",
      }}
    >
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
      <div>{confirm && <CallMenu />}</div>
    </div>
  );
};

// function to  set value  return (goal)
// useState to set
const CallMenu = () => {
  const showMenu = menuCategory.filter((type) => type.category === "beef");

  return (
    <div style={{ display: "flex", margin: "auto", justifyContent: "center" }}>
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
  );
};

export default TableNoCard;
