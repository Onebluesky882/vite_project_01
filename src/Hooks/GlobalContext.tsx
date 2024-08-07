import { createContext } from "react";
import { defaultCartProvider, useCart } from "@/Hooks/useCart";
import { defaultTableProvider, useTable } from "./useTable";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
  tableProvider: ReturnType<typeof useTable>;
  submitCart: () => void;
  clearCart: () => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
  tableProvider: defaultTableProvider,
  submitCart: () => null,
  clearCart: () => null,
});
export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();
  const tableProvider = useTable();

  const submitCart = () => {
    const submitOrders = cartProvider.submitCart();
    tableProvider.submitCart(submitOrders);
  };
  const clearCart = () => {
    cartProvider.removeCart();
  };
  return (
    <GlobalContext.Provider
      value={{ cartProvider, tableProvider, submitCart, clearCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
