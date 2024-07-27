import { CartOrderCard } from "@/Components/CartOrderCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  const { orders } = useContext(GlobalContext).cartProvider;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {orders.map((order) => (
        <CartOrderCard key={order.menuId} order={order} />
      ))}
    </div>
  );
};

export default Cart;
