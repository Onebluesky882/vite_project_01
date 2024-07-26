import { GlobalContext } from "@/Hooks/GlobalContext";
import SidebarLeft from "../../SidebarLeft";
import SidebarRight from "../../SidebarRight";
import { HomeIcon, Logo, OrderList } from "./headerStyle";
import { useContext } from "react";

export default function Header() {
  const { table } = useContext(GlobalContext).tableProvider;
  return (
    <header className="header">
      <div>
        <HomeIcon />
        {table.id}
      </div>
      <Logo />
      <OrderList />
      <SidebarLeft />
      <SidebarRight />
    </header>
  );
}
