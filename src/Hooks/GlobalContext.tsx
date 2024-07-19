import { createContext } from "react";
import { useCart, defaultCartProvider } from "./useCart";
import { useTable } from "./useTable";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
  // tableProvider: ReturnType<typeof useTable>;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
  // tableProvider: defaultTableProvider,
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();
  const tableProvider = useTable();
  // const orderProvider = useOrder();
  // type OrderProvider = { orders, updateOrders }

  return (
    <GlobalContext.Provider value={{ cartProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
