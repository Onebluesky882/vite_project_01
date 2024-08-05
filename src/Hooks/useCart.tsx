import { CartOrder } from "@/types/Order";
import { useState } from "react";

export const useCart = () => {
  const [orders, setOrders] = useState<CartOrder[]>([]);

  const onAdd = ({ menuId }: Pick<CartOrder, "menuId">) => {
    const menuItem = orders.find((item) => item.menuId === menuId);
    const amount = menuItem?.amount ?? 0;

    if (amount > 9) {
      return;
    }

    const newOrder = [...orders];
    if (amount === 0) {
      newOrder.push({
        menuId,
        amount: 1,
      });
      setOrders(newOrder);
      return;
    }

    const cartItem = newOrder.find((item) => item.menuId === menuId);
    if (cartItem) {
      cartItem.amount++;
    }
    setOrders(newOrder);
  };

  const onMinus = ({ menuId }: Pick<CartOrder, "menuId">) => {
    const order = [...orders];
    const removeOrder = order.find((item) => item.menuId === menuId);

    if (!removeOrder) {
      return;
    }

    if (removeOrder.amount > 1) {
      removeOrder.amount--;
    } else {
      const index = order.findIndex((item) => item.menuId === menuId);
      if (index > -1) {
        order.splice(index, 1);
      }
    }
    setOrders(order);
  };

  return { orders, setOrders, onAdd, onMinus };
};

export const defaultCartProvider = {
  orders: [],
  setOrders: () => null,
  onAdd: () => null,
  onMinus: () => null,
};
