import { MenuCartItem, MenuItem } from "@/types/MenuItem";
import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState<MenuCartItem[]>([]);

  const onAdd = ({ id, name, image, price, category }: MenuItem) => {
    const menuItem = cart.find((item) => item.name === name);
    const amount = menuItem?.amount ?? 0;

    if (amount > 9) {
      return;
    }

    const newCart = [...cart];
    if (amount === 0) {
      newCart.push({
        id,
        name,
        image,
        price,
        category,
        amount: 1,
      });
      setCart(newCart);
      return;
    }

    const cartItem = newCart.find((item) => item.name === name);
    if (cartItem) {
      cartItem.amount++;
    }
    setCart(newCart);
  };

  const onMinus = ({ name }: Pick<MenuItem, "name">) => {
    const menuItem = cart.find((item) => item.name === name);
    const amount = menuItem?.amount ?? 0;
    if (amount === 0) {
      return;
    }

    const newCart = [...cart];
    const cartItemIndex = newCart.findIndex((item) => item.name === name);
    const cartItemExist = cartItemIndex !== -1;

    if (cartItemExist) {
      // Decrease amount
      newCart[cartItemIndex].amount--;

      // Remove item if amount reaches zero
      if (newCart[cartItemIndex].amount === 0) {
        newCart.splice(cartItemIndex, 1);
      }

      setCart(newCart);
    }
  };

  return { cart, setCart, onAdd, onMinus };
};

export const defaultCartProvider = {
  cart: [],
  setCart: () => null,
  onAdd: () => null,
  onMinus: () => null,
};
