import { MenuCard } from "@/Components/menuCard/MenuCard";
import { vegetableMenu } from "@/Data/vegetableMenu";

const VegetableMenu = () => {
  return (
    <div className="ProductCardContainer">
      {vegetableMenu.map((veget) => (
        <MenuCard
          key={veget.id}
          image={veget.image}
          name={veget.name}
          price={veget.price}
          id={veget.id}
        />
      ))}
    </div>
  );
};

export default VegetableMenu;
