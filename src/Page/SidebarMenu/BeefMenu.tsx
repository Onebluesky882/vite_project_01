import { MenuCard } from "@/Components/menuCard/MenuCard";
import { Menu } from "@/Data/menu";

const Beef = Menu.filter((item) => item.category === "beef");
const BeefMenu = () => {
  return (
    <div className="ProductCardContainer">
      {Beef.map((beef) => (
        <MenuCard
          key={beef.id}
          image={beef.image}
          name={beef.name}
          price={beef.price}
          category={beef.category}
          id={0}
        />
      ))}
    </div>
  );
};

export default BeefMenu;
