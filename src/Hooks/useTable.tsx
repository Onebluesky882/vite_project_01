import { useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import { transformKeysToCamelCase } from "@/utils/string";

export type Orders = {
  id: string;
  menuId: string;
  createAt: string;
  status: "ORDERED" | "COOKING" | "DONE";
  amount: number;
  doneAt?: string;
};

export type Table = {
  id: number; // table no
  status: "AVAILABLE" | "OCCUPIED" | "BOOKED" | "CLEANING";
  seat: number;
};

export type CartOrder = {
  menuId: string;
  amount: number;
};

export const defaultTable = {
  id: 1,
  status: "AVAILABLE" as const,
  seat: 4,
};

export const useTable = () => {
  const [table, setTable] = useState<Table>(defaultTable);
  const [orders, setOrders] = useState<Orders[]>([]);

  // load data from BE => transform data into FE Format => update UI with the new data
  const loadOrders = async () => {
    const { data } = await supabase
      .from("orders")
      .select()
      .eq("table_id", table.id);

    if (data) {
      console.log("data", data);

      const camelKeyData = data.map((item) => transformKeysToCamelCase(item));
      setOrders(camelKeyData);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return { table, setTable, orders, setOrders };
};

export const defaultTableProvider = {
  table: defaultTable,
  setTable: () => null,
  orders: [],
  setOrders: () => null,
};
