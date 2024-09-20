import { Table } from "@/types/TableOrder";
import { RightArrow } from "../Animations/RightArrow";
import { LeftArrow } from "../Animations/LeftArrow";
import { useState } from "react";
import { Console } from "console";
import TableNo from "@/Page/Table/TableNo";

type TableNoProps = {
  table: Table[];
  no: string;
  //   cartOrder: CartOrder[];
  id: string;
  status: string;
};

const TableNoCard = ({ status, table, no }: Partial<TableNoProps>) => {
  // find table No
  const tableNo = table?.find((t) => t.tableNo === no);
  console.log(tableNo);
  // log(find table)
  // submit table to db

  // const [tableList, setTableList] = useState<Table[]>([]);
  // const addTable = ({ tableNo: no }: Partial<Table>) => {
  //   const tables = tableList.find((t) => t.tableNo === no);
  //   console.log(tables);
  //   setTableList(tableList);
  // };

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
        <h1>{tableNo ? `  ${tableNo}` : "Table not found"}</h1>
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
