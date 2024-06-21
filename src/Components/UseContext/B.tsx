import { useContext } from "react";
import C from "./C";
import { UserContext } from "./A";

export default function B() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>B</h1>
      <h2>{`step two ${user}`}</h2>
      <C />
    </div>
  );
}
