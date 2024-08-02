import { MenuCard } from "@/Components/menuCard/MenuCard";
import { Menu as MenuData } from "@/Data/Menu";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { type } = useParams();
  const MenuPage = MenuData.filter((item) => item.category === type);
  return (
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
  );
};

export default Menu;
