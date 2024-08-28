import { Table } from "@/types/TableOrder";
import supabase from "@/utils/supabase";
import { log } from "console";
import { useEffect, useState } from "react";

const defaultTable = {
  no: "A1" as const,
  status: "AVAILABLE" as const,
  seat: 4,
};

export const useTable = () => {
  const [table, setTable] = useState<Table>(defaultTable);
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("tables")
      .select(" no , status , seat")
      .eq("no", table.no);
    if (error) {
      console.error("error", error);
      setLoading(false);
      return;
    }
    if (data) {
      console.log(data);
      setTable(data[0]);
    }
    setLoading(false);
  };

  return { table, setTable, loadTable, isLoading };
};
export const defaultTableProvider = {
  table: defaultTable,
  isLoading: true,
  setTable: () => null,
  loadTable: () => Promise.resolve(),
};
