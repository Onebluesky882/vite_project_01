import { CartOrder, Order } from "@/types/Order";
import { Table } from "@/types/TableOrder";
import {
  transformKeysToCamelCase,
  transformKeysToSnakeCase,
} from "@/utils/string";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const defaultTable: Table = {
  status: "AVAILABLE",
  tableNo: "A1",
  seat: 3,
};

const useTable = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [table, setTable] = useState<Table>(defaultTable);

  const submitTable = async ({ seat, status, tableNo }: Table) => {
    const newTable: Table = {
      status,
      tableNo,
      seat,
    };
    const transformKey = transformKeysToSnakeCase(newTable);

    await supabase.from("tables").insert([transformKey]);
    await supabase.from("tables").select();
    setTable(newTable);
  };

  useEffect(() => {
    loadOrder();

    // passive interaction, trigger based on changes of the order relate to this table
    const channels = supabase
      .channel("subscribe-order-table-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "orders",
          filter: `table_id=eq.${table.tableNo}`,
        },
        (payload: any) => {
          console.log("payload", payload);
          loadOrder();
        }
      )
      .subscribe();
    // console.log("subscribe");

    return () => {
      channels.unsubscribe();
    };
  }, []);

  const loadOrder = async () => {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_no", table.tableNo);

    if (data) {
      const camelData = data.map((i) => transformKeysToCamelCase(i));
      setOrders(camelData);
    }
  };

  const submitCart = async (submitOrder: CartOrder[]) => {
    const prepareOrder: Order[] = submitOrder.map((order) => ({
      ...order,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: "ORDERED",
    }));

    const transformKeys = prepareOrder.map((i) => transformKeysToSnakeCase(i));

    await supabase.from("orders").insert(transformKeys);

    await loadOrder();

    setOrders([...orders, ...prepareOrder]);
  };

  return {
    orders,
    setOrders,
    submitCart,
    table,
    setTable,
    submitTable,
  };
};

export const defaultTableProvider = {
  table: defaultTable,
  orders: [],
  setOrders: () => null,
  submitCart: () => Promise.resolve(),
  setTable: () => null,
  submitTable: () => null,
};
export default useTable;
