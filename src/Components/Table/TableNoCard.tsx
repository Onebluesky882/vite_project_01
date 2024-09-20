import { Table } from "@/types/TableOrder";
import { RightArrow } from "../Animations/RightArrow";
import { LeftArrow } from "../Animations/LeftArrow";

type TableNoProps = {
  tableNo: Table[];
  no: string;
  //   cartOrder: CartOrder[];
  id: string;
  status: string;
};

const TableNoCard = ({ no, status }: Partial<TableNoProps>) => {
  const getTableNo = no;

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
        <h1>โต๊ะ :</h1> <span style={{ marginLeft: "10px" }}></span>
        <h1>{getTableNo ? `  ${getTableNo}` : "Table not found"}</h1>
      </div>
      <div style={{ display: "flex", margin: " auto" }}>
        <p> {status}</p>
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
