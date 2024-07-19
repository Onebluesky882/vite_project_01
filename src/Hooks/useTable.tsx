import { Table } from "@/types/TableOrder";
import { useState } from "react";

export const useTable = () => {
  const [table, useTable] = useState<Table[]>([]);

  /*   const comfirmOrder = ({ cart, no, setTable, status, tebleId }: Table) => {
    const newTable = [...]
 };
 */

  const cancelOrder = () => {};
};
