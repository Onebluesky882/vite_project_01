import { MenuCard } from "@/Components/menuCard/MenuCard";
import { meantballMenu } from "@/Data/meatballMenu";

const MeatballMenu = () => {
  return (
    <div className="ProductCardContainer">
      {meantballMenu.map((meantball) => (
        <MenuCard
          key={meantball.id}
          image={meantball.image}
          name={meantball.name}
          price={meantball.price}
          id={meantball.id}
        />
      ))}
    </div>
  );
};

export default MeatballMenu;
