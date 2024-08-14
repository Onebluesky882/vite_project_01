import React from "react";
import { TableType } from "./TableData";

const TableNoCard = ({ no, slug, status }: TableType) => {
  return (
    <div>
      <h1>{no}</h1>
      <p>{status}</p>
      <p>{slug}</p>
    </div>
  );
};

export default TableNoCard;
