import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const HomePage = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: "30px" }}>Homepage</h1>
      {cart.map((carts) => (
        <p>{carts.amount}</p>
      ))}
    </>
  );
};
export default HomePage;
