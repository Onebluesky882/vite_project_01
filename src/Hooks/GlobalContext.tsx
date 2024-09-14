import { createContext } from "react";
import { useCart, defaultCartProvider } from "./useCart";
import useTable, { defaultTableProvider } from "./useTable";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
  tableProvider: ReturnType<typeof useTable>;
  submitCart: () => void;
  resetOrders: () => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
  tableProvider: defaultTableProvider,
  submitCart: () => null,
  resetOrders: () => null,
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();
  const tableProvider = useTable();
  // const orderProvider = useOrder();
  // type OrderProvider = { orders, updateOrders }

  const submitCart = () => {
    const submitOrders = cartProvider.submitCart();
    tableProvider.submitCart(submitOrders);
  };

  const resetOrders = () => {
    cartProvider.resetOrder();
  };

  return (
    <GlobalContext.Provider
      value={{ cartProvider, tableProvider, submitCart, resetOrders }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
