import { useState } from "react";

// type
export type OrderItemType = {
  menuId: string;
  amount: number;
};

export const useCart = () => {
  const [orders, setOrders] = useState<OrderItemType[]>([]);

  // feature funtion
  const onAdd = ({ menuId }: Pick<OrderItemType, "menuId">) => {
    const menuItem = orders.find((item) => item.menuId === menuId);
    const amount = menuItem?.amount ?? 0;

    // condition safety over click
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

  const onMinus = ({ menuId }: Pick<OrderItemType, "menuId">) => {
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
