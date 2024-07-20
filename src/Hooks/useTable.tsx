import { CartOrder, Order } from "@/types/Order";
import { Table } from "@/types/TableOrder";
import { useState } from "react";

const defaultTable = {
  id: 1,
  status: "AVAILABLE" as const,
  seat: 4,
};

export const useTable = () => {
  const [table, useTable] = useState<Table>(defaultTable);
  const [orders, useOrders] = useState<Order[]>([]);

  /*   const comfirmOrder = ({ cart, no, setTable, status, tebleId }: Table) => {
    const newTable = [...]
 };
 */

  // const cancelOrder = () => {};

  const submitCart = (submitOrders: CartOrder[]) => {
    const preparedOrders: Order[] = submitOrders.map((order) => ({
      ...order,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "ORDERED",
    }));
    useOrders([...orders, ...preparedOrders]);
  };

  return { table, useTable, orders, useOrders, submitCart };
};

export const defaultTableProvider = {
  table: defaultTable,
  useTable: () => null,
  orders: [],
  useOrders: () => null,
  submitCart: () => null,
};
