import { Table } from "@/types/TableOrder";

export const TableNoCard = ({ no, status }: Table) => {
  return (
    <>
      <h1>{no}</h1>
      <p>{status}</p>
    </>
  );
};
