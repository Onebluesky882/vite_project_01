import { Table } from "@/types/TableOrder";
import { RightArrow } from "../Animations/RightArrow";
import { LeftArrow } from "../Animations/LeftArrow";
import { TableProps } from "./Tables";
import { useParams } from "react-router-dom";

const TableNoCard = ({ status, no }: Partial<TableProps>) => {
  // find table No
  const { no: tableNumber } = useParams<{ no: string }>();

  // confirm Table
  const defaultTable: Table = {
    status: "OCCUPIED",
    tableNo: "A1",
    seat: 4,
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
          <LeftArrow />
          Categories
          <RightArrow />
        </div>
      </h2>
    </div>
  );
};

export default TableNoCard;
