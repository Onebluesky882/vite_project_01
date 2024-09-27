import { useContext, useState } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { log } from "console";
import { MenuCard } from "../menuCard/MenuCard";
import { CartOrderCard } from "../CartOrderCard";

type TableNoProps = {
  tableNo: string;
  status: string;
};
const TableNoCard = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const [confirm, setConfirm] = useState(false);

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
      {/*  //table */}
      <div style={{ display: "flex", margin: " auto" }}>
        <h1>โต๊ะ : {table.tableNo}</h1>{" "}
      </div>
      <div style={{ display: "flex", margin: "auto" }}>
        <button
          style={{ padding: " 10px", margin: "20px" }}
          onClick={() => setConfirm(true)}
        >
          confirm to seat
        </button>
      </div>
      {confirm}
    </div>
  );
};

// function to  set value  return (goal)
// useState to set
export const TableStatus = () => {
  console.log("hello");

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default TableNoCard;
