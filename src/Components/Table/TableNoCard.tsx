import { useContext, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import Menu from "@/Page/Menu";

const TableNoCard = () => {
  const { table } = useContext(GlobalContext).tableProvider;

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

      <Menu />
    </div>
  );
};

export default TableNoCard;
