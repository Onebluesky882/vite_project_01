import { createContext } from "react";
import { useCart, defaultCartProvider } from "./useCart";
import { defaultTableProvider, useTable } from "./useTable";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
  tableProvider: ReturnType<typeof useTable>;
  submitCart: () => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
  tableProvider: defaultTableProvider,
  submitCart: () => null,
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

  return (
    <GlobalContext.Provider value={{ cartProvider, tableProvider, submitCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
