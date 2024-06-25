import { MenuCard } from "@/Components/menuCard/MenuCard";
import { noodleMenu } from "@/Data/noodleMenu";

const NoodleMenu = () => {
  return (
    <div className="ProductCardContainer">
      {noodleMenu.map((noodle) => (
        <MenuCard
          key={noodle.id}
          image={noodle.image}
          name={noodle.name}
          price={noodle.price}
          id={noodle.id}
        />
      ))}
    </div>
  );
};

export default NoodleMenu;
