import { CartCard } from "@/Components/CartCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  const { orders } = useContext(GlobalContext).cartProvider;

  return (
    <div>
      {orders.map((item) => (
        <CartCard
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Cart;
