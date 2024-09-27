import { CartOrderCard } from "@/Components/CartOrderCard";
import { MenuCard } from "@/Components/menuCard/MenuCard";
import { menu as menuCategory } from "@/Data/Menu";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";

const Menu = () => {
  const { table } = useContext(GlobalContext).tableProvider;
  const { orders } = useContext(GlobalContext).cartProvider;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Table : {table.tableNo}</h1>
      <h2 style={{ textAlign: "center" }}>
        รายการอาหาร
        {orders.map((i) => (
          <CartOrderCard order={i} />
        ))}
      </h2>
      <div className="ProductCardContainer">
        {menuCategory.map((menu) => (
          <MenuCard
            key={menu.id}
            image={menu.image}
            name={menu.name}
            price={menu.price}
            id={menu.id}
            category={menu.category}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
