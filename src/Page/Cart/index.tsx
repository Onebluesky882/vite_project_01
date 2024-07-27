import { CartOrderCard } from "@/Components/CartOrderCard";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { ButtonCartOrder } from "@/Components/ButtonCartOrder";
import { TableOrderCard } from "@/Components/TableOrderCard";
const Cart = () => {
  const { orders } = useContext(GlobalContext).cartProvider;
  const { orders: tableOrders } = useContext(GlobalContext).tableProvider;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {orders.map((order) => (
        <CartOrderCard key={order.menuId} order={order} />
      ))}
      <ButtonCartOrder />
      ที่สังไป
      {tableOrders.map((order) => (
        <TableOrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Cart;
