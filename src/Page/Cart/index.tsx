import { ButtonCartOrder } from "@/Components/ButtonCartOrder";
import { CartCard } from "@/Components/CartCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  const { cart } = useContext(GlobalContext).cartProvider;

  //const {table} = useContext()
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {cart.map((item) => (
        <CartCard
          key={item.name}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          category={item.category}
        />
      ))}
      <ButtonCartOrder />
    </div>
  );
};

export default Cart;
