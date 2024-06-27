import SidebarLeft from "../../SidebarLeft";
import SidebarRight from "../../SidebarRight";
import { HomeIcon, Logo, OrderList } from "./headerStyle";

export default function Header() {
  return (
    <header className="header">
      <HomeIcon />
      <Logo />
      <OrderList />
      <SidebarLeft />
      <SidebarRight />
    </header>
  );
}
