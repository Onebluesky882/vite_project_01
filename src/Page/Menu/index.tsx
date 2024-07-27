import { useParams } from "react-router-dom";
import { Menu as MenuData } from "@/Data/menu";
import { MenuCard } from "@/Components/menuCard/MenuCard";
("@/Data/menu");

const Menu = () => {
  const { type } = useParams();
  const fitterMenu = MenuData.filter((item) => item.category === type);
  return (
    <div className="ProductCardContainer">
      {fitterMenu.map((menu) => (
        <MenuCard
          id={menu.id}
          image={menu.image}
          name={menu.name}
          price={menu.price}
          key={menu.id}
          category={""}
        />
      ))}
    </div>
  );
};

export default Menu;
