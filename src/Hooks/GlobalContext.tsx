import { createContext } from "react";
import { defaultCartProvider, useCart } from "@/Hooks/useCart";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
  submitCart: () => void;
  clearCart: () => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,

  submitCart: () => null,
  clearCart: () => null,
});
export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();

  const submitCart = () => {
    const submitOrders = cartProvider.submitCart();
  };
  const clearCart = () => {
    cartProvider.removeCart();
  };
  return (
    <GlobalContext.Provider value={{ cartProvider, submitCart, clearCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
