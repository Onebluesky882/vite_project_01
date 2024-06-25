import { MenuCard } from "@/Components/menuCard/MenuCard";
import { beefMenu } from "@/Data/beefMenu";

const BeefMenu = () => {
  return (
    <div className="ProductCardContainer">
      {beefMenu.map((beef) => (
        <MenuCard
          key={beef.id}
          image={beef.image}
          name={beef.name}
          price={beef.price}
          id={beef.id}
        />
      ))}
    </div>
  );
};

export default BeefMenu;
