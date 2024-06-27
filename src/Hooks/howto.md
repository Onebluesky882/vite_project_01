# hook state

การทำ hook globalState useContext
ให้มอง เป็น node (ราก ) จะเข้าไปเก็บข้อมูลแต่ละ node ได้ จะต้องมีการเปิดช่องทางการสื่อสาร

1. สร้าง Globalprovider เปิดช่องทางการสื่อสาร เพื่อเรียกดู state
   export const GlobalProvider = createContext<GlobalContext>

2. บรรทัดที่ 48 useContext

```tsx
// ส่วนที่ 1 createContxt
import { MenuCartItem } from "@/types/MenuItem";
import { createContext, useState } from "react";

type GlobalContextType = {
  cart: MenuCartItem[];
  setCart: React.Dispatch<React.SetStatAction<MenuCartItem[]>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  cart: [],
  setCart: () => null,
});

const GlobalProvider = () => {
    return (
        <GlobalContext.Provider value= {{cart , setCart}}>
        {children}
        <GlobalContext.Provider>
    );
}
```

```tsx
import { MenuCartItem } from "@/types/MenuItem";
import { createContext, useState } from "react";

// ส่วนที่ 2 useContext


const MenuCard = ({ id, name, image, price }: MenuCardProps) => {
  const { cart, setCart } = useContext(GlobalContext);

  return;
};
```
