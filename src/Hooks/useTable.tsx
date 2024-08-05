import { Table } from "@/types/TableOrder";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";
import { transformKeysToSnakeCase, camelToSnake } from "../utils/string";
const defaultTable = {
  id: 1,
  status: "AVAILABLE" as const,
  seat: 4,
};

export type CartOrder = {
  menuId: string;
  amount: number;
};

export type Order = {
  id: string;
  menuId: string;
  status: "ORDERED" | "COOKING" | "DONE";
  amount: number;
  createAt: string;
  doneAt?: string;
};

export const useTable = () => {
  const [table, setTable] = useState<Table>(defaultTable);
  const [orders, setOrders] = useState<Order[]>([]);

  const loadOrder = async () => {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_id", table.id);
    if (data) {
      const loadData = data.map((item) => item);
      setOrders(loadData);
    }
  };

  useEffect(() => {
    loadOrder();
  }, []);

  //submit item to BE
  //Description: action to push data from FE to BE so we can store permanenet data.

  // 1. planning  ::  get cart order from ui => push to BE
  // ---------------- ! ----------------

  // 2. get cart order from ui => *** push this to BE

  const submitCart = async (submitOrder: CartOrder[]) => {
    // function  // get & prepare data from cart order in UI
    const prepareOrders: Order[] = submitOrder.map((order) => ({
      ...order,
      id: crypto.randomUUID(),
      createAt: new Date().toISOString(),
      tableId: table.id,
      status: "ORDERED",
    }));

    // trasnform data
    const snakeCasePrepareOrders = prepareOrders.map((order) =>
      transformKeysToSnakeCase(order)
    );
    // checkign
    console.log(snakeCasePrepareOrders);

    // push to DB
    await supabase.from("orders").insert(snakeCasePrepareOrders).select();

    // update UI
    await loadOrder();

    setOrders([...orders, ...prepareOrders]);
  };

  const confirmOrder = async (
    cartOrders: CartOrder[],
    tableId: number,
    status: "ORDERED" | "COOKING" | "DONE"
  ) => {
    // Prepare the confirmed orders
    const confirmedOrders: Order[] = cartOrders.map((order) => ({
      ...order,
      id: crypto.randomUUID(),
      createAt: new Date().toISOString(),
      tableId,
      status,
    }));

    // trasnform data
    const snakeCaseConfirmedOrders = confirmedOrders.map((order) =>
      transformKeysToSnakeCase(order)
    );

    // push to DB
    await supabase.from("orders").insert(snakeCaseConfirmedOrders);

    await supabase.from("tables").select().eq("id", tableId);
  };

  return { table, setTable, orders, setOrders, submitCart, confirmOrder };
};

export const defaultTableProvider = {
  table: defaultTable,
  setTable: () => null,
  orders: [],
  setOrders: () => null,
  submitCart: () => Promise.resolve(),
  confirmOrder: () => Promise.resolve(),
};
