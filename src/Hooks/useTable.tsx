import { Table } from "@/types/TableOrder";
import {
  transformKeysToCamelCase,
  transformKeysToSnakeCase,
} from "@/utils/string";
import supabase from "@/utils/supabase";
import { useEffect, useState } from "react";

const defaultTable: Table = {
  no: "A1",
  status: "AVAILABLE" as const,
  seat: 4,
};

export const useTable = () => {
  const [table, setTable] = useState<Table>(defaultTable);

  // get data from DB
  useEffect(() => {
    console.log("server running");

    getTable();
  }, []);

  //read
  const getTable = async () => {
    const { data, error } = await supabase
      .from("tables")
      .select()
      .eq("no", table.no)
      .single();

    const transformData = transformKeysToCamelCase(data);
    if (error) {
      console.log(error, "can't fetch the data");
      return;
    }
    if (data) {
      console.log(transformData, " ");
      setTable(transformData);
    }
  };

  // create

  //1. submit  to create table
  //2. variable tranform to snakeCase
  //3. setTable

  const submitTable = async (newTable: Table) => {
    const createTable = transformKeysToSnakeCase(newTable);

    await supabase.from("tables").insert(createTable).select();
    await setTable({ ...createTable });

    await getTable();
  };

  // update data

  return { table, setTable, submitTable };
};

export const defaultTableProvider = {
  table: defaultTable,
  setTable: () => null,
  submitTable: () => Promise.resolve(),
};
