import { MenuCard } from "@/Components/menuCard/MenuCard";
import { seafoodMenu } from "@/Data/seafoodMenu";

const SeafoodMenu = () => {
  return (
    <div className="ProductCardContainer">
      {seafoodMenu.map((meat) => (
        <MenuCard
          key={meat.id}
          image={meat.image}
          name={meat.name}
          price={meat.price}
          id={meat.id}
        />
      ))}
    </div>
  );
};

export default SeafoodMenu;
