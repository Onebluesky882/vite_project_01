import { useParams } from "react-router-dom";
import { TableProps } from "./Tables";
const TableNoCard = ({ status }: Partial<TableProps>) => {
  // find table No
  const { no: tableNumber } = useParams<{ no: string }>();

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
          <button
            onClick={() => {
              // update supabase of table's status
              // navigate
              // change table
            }}
          >
            Confirm Table
          </button>
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

const no: string = "A1";

// const tableNo: Table["tableNo"] = no as unknown as Table["tableNo"];
// const tableNo: Table["tableNo"] = transformNo(no);

// function transformNo(no: string): Table["tableNo"] {
//   tableNo as string;
// }

// const tanfomNo = (no: string): Table["tableNo"] => {
//   tableNo as string;

//   return tableNo;
// };

// const stringNo: string = tableNo;

// type Index = 1 | 2 | 3;
// let index = 5;

// const someIndex: Index = index as Index;
