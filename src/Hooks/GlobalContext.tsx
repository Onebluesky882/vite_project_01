import { createContext } from "react";
import { defaultCartProvider, useCart } from "@/Hooks/useCart";
import { defaultTableProvider, useTable } from "./useTable";

type GlobalContextType = {
  cartProvider: ReturnType<typeof useCart>;
  tableProvider: ReturnType<typeof useTable>;
};

export const GlobalContext = createContext<GlobalContextType>({
  cartProvider: defaultCartProvider,
  tableProvider: defaultTableProvider,
});
export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const cartProvider = useCart();
  const tableProvider = useTable();
  return (
    <GlobalContext.Provider value={{ cartProvider, tableProvider }}>
      {children}
    </GlobalContext.Provider>
  );
};
