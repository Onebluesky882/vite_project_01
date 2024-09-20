import { CartOrderCard } from "@/Components/CartOrderCard";
import { MenuCard } from "@/Components/menuCard/MenuCard";
import { Menu as menuCategory } from "@/Data/Menu";
import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { type } = useParams();
  const MenuPage = menuCategory.filter((item) => item.category === type);
  const { table } = useContext(GlobalContext).tableProvider;
  const { orders } = useContext(GlobalContext).cartProvider;

  const newTable = table.tableNo;
  console.log(table.tableNo);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Table : {newTable}</h1>
      <h2 style={{ textAlign: "center" }}>
        รายการอาหาร
        {orders.map((i) => (
          <CartOrderCard order={i} />
        ))}
      </h2>
      <div className="ProductCardContainer">
        {MenuPage.map((menu) => (
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
