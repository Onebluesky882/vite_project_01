import { Table } from "@/types/TableOrder";

export type MenuGroup = {
  id: string;
  name: string;
  img: string;
  position: string;
};

export const table = [
  {
    tableNo: "A1",
    status: "BOOKED",
    slug: "a1",
    position: "left",
  },
  {
    tableNo: "A2",
    status: "CLEANING",
    slug: "a2",
    position: "left",
  },
  {
    tableNo: "A3",
    status: "AVAILABLE",
    slug: "a3",
    position: "left",
  },
  {
    tableNo: "A4",
    status: "AVAILABLE",
    slug: "a4",
    position: "left",
  },
  {
    tableNo: "A5",
    status: "AVAILABLE",
    slug: "a5",
    position: "left",
  },
  {
    tableNo: "B1",
    status: "AVAILABLE",
    slug: "b1",
    position: "right",
  },
  {
    tableNo: "B2",
    status: "AVAILABLE",
    slug: "b2",
    position: "right",
  },
  {
    tableNo: "B3",
    status: "AVAILABLE",
    slug: "b3",
    position: "right",
  },
  {
    tableNo: "B4",
    status: "AVAILABLE",
    slug: "b4",
    position: "right",
  },
];
export const getTableId = (tableNo: string) => {
  return table.find((item) => item.tableNo === tableNo) ?? ({} as Table);
};

export default table;
