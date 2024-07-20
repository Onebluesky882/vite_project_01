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

    const newCart = [...orders];
    if (amount === 0) {
      newCart.push({
        menuId,
        amount: 1,
      });
      setOrders(newCart);
      return;
    }

    const cartItem = newCart.find((item) => item.menuId === menuId);
    if (cartItem) {
      cartItem.amount++;
    }
    setOrders(newCart);
  };

  const onMinus = ({ menuId }: Pick<CartOrder, "menuId">) => {
    const menuItem = orders.find((item) => item.menuId === menuId);
    const amount = menuItem?.amount ?? 0;
    if (amount === 0) {
      return;
    }

    const newCart = [...orders];
    const cartItemIndex = newCart.findIndex((item) => item.menuId === menuId);
    const cartItemExist = cartItemIndex !== -1;

    if (cartItemExist) {
      // Decrease amount
      newCart[cartItemIndex].amount--;

      // Remove item if amount reaches zero
      if (newCart[cartItemIndex].amount === 0) {
        newCart.splice(cartItemIndex, 1);
      }

      setOrders(newCart);
    }
  };

  const submitCart = () => {
    const submitOrders = orders;

    // clear orders in cart
    setOrders([]);

    // return orders
    return submitOrders;
  };

  return { orders, setOrders, onAdd, onMinus, submitCart };
};

export const defaultCartProvider = {
  orders: [],
  setOrders: () => null,
  onAdd: () => null,
  onMinus: () => null,
  submitCart: () => [],
};
