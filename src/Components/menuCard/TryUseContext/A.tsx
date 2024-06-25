import { createContext } from "react";

const MyContext = createContext("");
export default function A() {
  let aa = "nasdf";
  return (
    <MyContext.Provider value={aa}>
      <p>name : {aa}</p>
    </MyContext.Provider>
  );
}
``;
