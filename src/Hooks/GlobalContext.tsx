import { createContext } from "react";
import { useCart, defaultCartProvider } from "@/Hooks/useCart";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
};
export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();
  return (
    <GlobalContext.Provider value={{ cartProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
