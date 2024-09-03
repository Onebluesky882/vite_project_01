import { useParams } from "react-router-dom";

import { Table } from "@/types/TableOrder";

type TableNoProps = {
  tableNo: Table[];
  no: string;
  //   cartOrder: CartOrder[];
  id: string;
};

const TableNoCard = ({ tableNo }: TableNoProps) => {
  const { no } = useParams<string>();
  const matchTable = tableNo.find((t) => t.no.toLowerCase() === no);

  const getTableNo = matchTable?.no;

  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <div style={{ display: "flex", margin: " auto" }}>
        {getTableNo ? `Table No: ${getTableNo}` : "Table not found"}
      </div>
    </div>
  );
};

export default TableNoCard;
