import { createContext } from "react";
import { useCart, defaultCartProvider } from "./useCart";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();
  // const orderProvider = useOrder();
  // type OrderProvider = { orders, updateOrders }

  return (
    <GlobalContext.Provider value={{ cartProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
