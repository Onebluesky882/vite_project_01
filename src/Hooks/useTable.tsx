import { CartOrder, Order } from "@/types/CartOrder";
import { Table } from "@/types/Table";
import {
  transformKeysToCamelCase,
  transformKeysToSnakeCase,
} from "@/utils/string";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const defaultTable = {
  id: 1,
  status: "AVAILABLE" as const,
  seat: 4,
};
export const useTable = () => {
  const [table, setTable] = useState<Table>(defaultTable);
  const [orders, setOrders] = useState<Order[]>([]);

  /*   const comfirmOrder = ({ cart, no, setTable, status, tebleId }: Table) => {
    const newTable = [...]
 };
 */

  async function loadOrders() {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_id", table.id);

    if (data) {
      const camelKeyData = data.map((item) => transformKeysToCamelCase(item));
      // console.log("camelKeyData", camelKeyData);
      setOrders(camelKeyData);
    }
  }
  useEffect(() => {
    loadOrders();
  }, []);

  const submitCart = async (submitOrders: CartOrder[]) => {
    const preparedOrders: Order[] = submitOrders.map((order) => ({
      ...order,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      tableId: table.id,
      status: "ORDERED",
    }));

    const snakeCasePreparedOrders = preparedOrders.map((order) =>
      transformKeysToSnakeCase(order)
    );
    console.log("snakeCasePreparedOrders", snakeCasePreparedOrders);

    await supabase.from("orders").insert(snakeCasePreparedOrders).select();

    await loadOrders();
    // setOrders([...orders, ...preparedOrders]);
  };

  return { table, setTable, orders, setOrders, submitCart };
};

export const defaultTableProvider = {
  table: defaultTable,
  setTable: () => null,
  orders: [],
  setOrders: () => null,
  submitCart: () => Promise.resolve(),
};
