import { useContext } from "react";
import { Mycontext } from "../menuCard/TestContext";

export default function CartOrder() {
  const UseContext = useContext(Mycontext);
  return <p>{`${UseContext}`}</p>;
}
