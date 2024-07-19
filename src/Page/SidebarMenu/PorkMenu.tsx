import { MenuCard } from "@/Components/menuCard/MenuCard";
import { Menu } from "@/Data/menu";

const Pork = Menu.filter((item) => item.category === "pork");
const PorkMenu = () => {
  return (
    <div className="ProductCardContainer">
      {Pork.map((pork) => (
        <MenuCard
          key={pork.id}
          image={pork.image}
          name={pork.name}
          price={pork.price}
          category={pork.category}
          id={0}
        />
      ))}
    </div>
  );
};

export default PorkMenu;
