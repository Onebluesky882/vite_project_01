import { MenuCard } from "@/Components/menuCard/MenuCard";
import { Menu as MenuData } from "@/Data/menu";
import { useParams } from "react-router-dom";

const Menu = () => {
  let { type } = useParams();
  const menus = MenuData.filter((item) => item.category === type);
  return (
    <div className="ProductCardContainer">
      {menus.map((menu) => (
        <MenuCard
          key={menu.id}
          image={menu.image}
          name={menu.name}
          price={menu.price}
          category={menu.category}
          id={menu.id}
        />
      ))}
    </div>
  );
};

export default Menu;
