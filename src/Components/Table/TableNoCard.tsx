import { useParams } from "react-router-dom";
import { transformKeysToSnakeCase } from "../../utils/string";
import supabase from "@/utils/supabase";
import { TableProps } from "./Tables";

export type Table = {
  tableNo: "A1" | "A2" | "A3" | "A4" | "A5" | "B1" | "B2" | "B3" | "B4";
  seat?: number;
  status: "AVAILABLE" | "OCCUPIED" | "RESERVED" | "CLEANING";
  position?: string;
};

const TableNoCard = ({ status, no }: Partial<TableProps>) => {
  // find table No
  const { no: tableNumber } = useParams<{ no: string }>();

  // confirm Table

  // get table data from ui -> to BE  -> update

  // Confirm table status - define function to handle the confirm button click

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
        <h1>โต๊ะ :</h1> <span style={{ marginLeft: "10px" }}></span>
        <h1>
          {tableNumber ? ` ${tableNumber.toUpperCase()}` : "Table not found"}
        </h1>
      </div>
      {/*  // table status */}
      <div
        style={{
          display: "flex",
          margin: " auto",
          flexDirection: "column",
        }}
      >
        <p> {status}</p>

        {/*  // confirm to booking */}
        <div style={{ justifyContent: "center", display: "flex" }}>
          <button onClick={() => {}}>Confirm Table</button>
        </div>
      </div>

      <h2 style={{ textAlign: "center" }}>
        <div>
          <h3>เลือกเมนูอาหาร</h3>
        </div>
      </h2>
    </div>
  );
};

export default TableNoCard;
