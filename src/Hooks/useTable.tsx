import { CartOrder, Order } from "@/types/Order";
import { Table } from "@/types/TableOrder";
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

  // const cancelOrder = () => {};

  const loadOrders = async () => {
    // load data from BE => transform data into FE Format => update UI with the new data
    // load data from BE
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_id", table.id);
    // console.log("data", data);
    if (data) {
      // transform data into FE Format
      const camelKeyData = data.map((item) => transformKeysToCamelCase(item));
      // console.log("camelKeyData", camelKeyData);
      // update UI with the new data
      setOrders(camelKeyData);
    }
  };
  // load order from be
  useEffect(() => {
    loadOrders();

    // passive interaction, trigger based on changes of the order relate to this table
    const channels = supabase
      .channel("subscribe-order-table-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "orders",
          filter: `table_id=eq.${table.id}`,
        },
        (payload) => {
          //   console.log("payload", payload);
          loadOrders();
        }
      )
      .subscribe();
    // console.log("subscribe");

    return () => {
      channels.unsubscribe();
    };
  }, []);

  const submitCart = async (submitOrders: CartOrder[]) => {
    // Description: action to push data from FE to BE so we can store permanenet data.
    // get cart order from ui => push this to BE <- not practical, planning
    // ---
    // get cart order from ui => *** => push this to BE <- What need to be done to make it possible, excuting
    // get cart order from ui => prepare up data => transform the data => push this to BE => Update UI <- final conclusion, excuting

    // get & prepare data from cart order in UI
    const preparedOrders: Order[] = submitOrders.map((order) => ({
      ...order,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      tableId: table.id,
      status: "ORDERED",
    }));

    // trasnform data
    const snakeCasePreparedOrders = preparedOrders.map((order) =>
      transformKeysToSnakeCase(order)
    );
    console.log("snakeCasePreparedOrders", snakeCasePreparedOrders);

    // push to BE
    await supabase.from("orders").insert(snakeCasePreparedOrders).select();

    // update UI
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
