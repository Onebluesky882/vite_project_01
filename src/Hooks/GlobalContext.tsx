import { MenuCartItem } from "@/types/MenuItem";
import { createContext, useState } from "react";

type GlobalContextType = {
  cart: MenuCartItem[];
  setCart: React.Dispatch<React.SetStateAction<MenuCartItem[]>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  cart: [],
  setCart: () => null,
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState<MenuCartItem[]>([]);

  return (
    <GlobalContext.Provider value={{ cart, setCart }}>
      {children}
    </GlobalContext.Provider>
  );
};
