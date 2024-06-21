import { useState } from "react";

export default function Footer() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        display: "flex",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        background: "#F3EACC",
      }}
    >
      <p style={{ color: "#fff7e4" }}>
        <button onClick={() => setCount(count)}>{count}</button>
      </p>
    </div>
  );
}
