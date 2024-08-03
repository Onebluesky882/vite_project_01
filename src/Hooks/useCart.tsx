import { CartOrder } from "@/types/Order";
import { useState } from "react";

export const useCart = () => {
  //hook
  const [orders, setOrders] = useState<CartOrder[]>([]);

  // onAdd function
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
    const cart = [...orders];
    const cartItem = cart.find((item) => item.menuId === menuId);
    if (!cartItem) {
      return;
    }

    if (cartItem.amount > 1) {
      cartItem.amount--;
    } else {
      const index = cart.findIndex((item) => item.menuId === menuId);
      if (index > -1) {
        cart.splice(index, 1);
      }
    }
    setOrders(cart);
  };

  return { orders, setOrders, onAdd, onMinus };
};

export const defaultCartProvider = {
  orders: [],
  setOrders: () => null,
  onAdd: () => null,
  onMinus: () => null,
};
