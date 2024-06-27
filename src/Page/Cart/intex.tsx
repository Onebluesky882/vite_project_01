import { CardOfCart } from "@/Components/CardOfCart";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <div>
      {cart.map((item) => (
        <CardOfCart
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          amount={item.amount}
        />
      ))}
    </div>
  );
};

export default Cart;
