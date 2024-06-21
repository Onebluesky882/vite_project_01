import { useContext } from "react";
import { UserContext } from "./A";

export default function D() {
  const count = useContext(UserContext);
  return (
    <div className="box">
      <h1>D</h1>
      <p>{count}</p>
    </div>
  );
}
