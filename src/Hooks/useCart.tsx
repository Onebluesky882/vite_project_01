import { CartOrder } from "@/types/CartOrder";
import { useState } from "react";

export const useCart = () => {
  const [orders, setOrders] = useState<CartOrder[]>([]);

  const onAdd = ({ menuId }: Pick<CartOrder, "menuId">) => {
    const menuItem = orders.find((item) => item.menuId === menuId);
    const amount = menuItem?.amount ?? 0;

    // เคสที่ 1 จำนวนออเดอร์ มากกว่า 9
    if (amount > 9) {
      return;
    }

    // ไม่สามารถเข้าไปแก้ object orders ได้ ตัวเก่าวิธีแก้คือต้องประกาศ ตัวแปรใหม่ temp รับค่า
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
    const cartItem = newCart.find((item) => item.menuId === menuId);

    if (cartItem) {
      cartItem.amount--;
    }

    if (cartItem?.amount === 0) {
      const cartItemIndex = newCart.indexOf(cartItem);
      newCart.splice(cartItemIndex, 1);
    }
    setOrders(newCart);
  };
  const submitCart = () => {
    const submitOrders = orders;
    //clear orders in cart
    setOrders([]);

    //return orders
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
