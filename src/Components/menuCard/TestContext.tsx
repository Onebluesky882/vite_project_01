import { createContext, useState } from "react";

export const Mycontext = createContext("");
export default function UseContext() {
  const [count, setCount] = useState<string>("");

  return (
    <Mycontext.Provider value={""}>
      <p>{count}</p>
      <button onClick={() => setCount("john")}>click</button>
    </Mycontext.Provider>
  );
}
