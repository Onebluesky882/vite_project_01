import { Table } from "@/types/TableOrder";

type TableNoProps = {
  tableNo: Table[];
  no: string;
  //   cartOrder: CartOrder[];
  id: string;
};

const TableNoCard = ({ no }: Pick<TableNoProps, "no">) => {
  const getTableNo = no;

  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <div style={{ display: "flex", margin: " auto" }}>
        {getTableNo ? `Table No: ${getTableNo}` : "Table not found"}
      </div>
    </div>
  );
};

export default TableNoCard;
