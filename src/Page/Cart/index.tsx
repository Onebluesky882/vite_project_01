import ButtonCartOrder from "@/Components/ButtonCartOrder";
import { CartOrderCard } from "@/Components/CartOrderCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Cart = () => {
  const { orders } = useContext(GlobalContext).cartProvider;
  // const { orders: tabeleOrders } = useContext(GlobalContext).tableProvider;
  // console.log('tabeleOrders', tabeleOrders)
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {orders.map((order) => (
        <CartOrderCard key={order.menuId} order={order} />
      ))}

      <ButtonCartOrder />
      {/* {tabeleOrders.map((order) => (
        <TableOrderCard order={order} key={order.id} />
      ))} */}
    </div>
  );
};

export default Cart;
