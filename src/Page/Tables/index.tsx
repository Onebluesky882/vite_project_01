import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Tables = () => {
  const { orders: tableOrders } = useContext(GlobalContext).tableProvider;
  const { no } = useParams();
  const tableno = tableOrders.filter((table) => {});

  return <p>table {}</p>;
};

export default Tables;
