import { CartOrderCard } from "@/Components/CartOrderCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  const { orders } = useContext(GlobalContext).cartProvider;
  return (
    <div>
      {orders.map((item) => (
        <CartOrderCard key={item.menuId} order={item} />
      ))}
    </div>
  );
};

export default Cart;
