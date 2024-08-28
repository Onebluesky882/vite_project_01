import { Table } from "@/types/TableOrder";

export const table = [
  {
    no: "A1",
    status: "AVAILABLE",
    slug: "a1",
    potition: "left",
    id: "16d34ab0-09f8-414b-a889-05ce0d4de8e9",
  },
  {
    no: "A2",
    status: "AVAILABLE",
    slug: "a2",
    potition: "left",
    id: "55f09959-8670-4915-9edb-ddfa1f8f581c",
  },
  {
    no: "A3",
    status: "AVAILABLE",
    slug: "a3",
    potition: "left",
    id: "c09928b5-be99-4a6e-8693-76e69d76fbf5",
  },
  {
    no: "A4",
    status: "AVAILABLE",
    slug: "a4",
    potition: "left",
    id: "77bb6e32-5fef-40e0-bd88-d9e11cff276e",
  },
  {
    no: "A5",
    status: "AVAILABLE",
    slug: "a5",
    potition: "left",
    id: "6ea517a4-2b02-4b83-90e9-6ae351eee758",
  },
  {
    no: "B1",
    status: "AVAILABLE",
    slug: "b1",
    potition: "right",
    id: "4e5cf68d-bc4e-41f4-90a7-5d7f7c2cfb27",
  },
  {
    no: "B2",
    status: "AVAILABLE",
    slug: "b2",
    potition: "right",
    id: "d3118368-de2f-4584-bb39-4af13164c11c",
  },
  {
    no: "B3",
    status: "AVAILABLE",
    slug: "b3",
    potition: "right",
    id: "a3736228-2590-4943-a821-e018e10f8706",
  },
  {
    no: "B4",
    status: "AVAILABLE",
    slug: "b4",
    potition: "right",
    id: "3c88ee97-7293-455d-8327-00052aafce71",
  },
];

export const getTableId = (id: string) => {
  return table.find((item) => item.id === id) ?? ({} as Table);
};

export default table;
