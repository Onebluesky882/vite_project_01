import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const table = () => {
  const { number } = useParams();

  return <div>hello</div>;
};

export default table;
