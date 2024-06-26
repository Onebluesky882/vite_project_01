import { MenuCard } from "@/Components/menuCard/MenuCard";
import { drink } from "@/Data/drink";

const DrinkMenu = () => {
  return (
    <div className="ProductCardContainer">
      {drink.map((drink) => (
        <MenuCard
          key={drink.id}
          image={drink.image}
          name={drink.name}
          price={drink.price}
          id={drink.id}
        />
      ))}
    </div>
  );
};

export default DrinkMenu;
