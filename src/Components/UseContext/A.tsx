import { useState, createContext } from "react";
import B from "./B";

export const UserContext = createContext<number>(0);

export default function A() {
  const [count, setUser] = useState(0);
  return (
    <div className="box">
      <h1>A</h1>

      <UserContext.Provider value={count}>
        <B />

        <p>{`number : ${count}`}</p>
        <button onClick={() => setUser(count + 1)}>{` count`}</button>
      </UserContext.Provider>
    </div>
  );
}
