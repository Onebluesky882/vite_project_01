import { MenuCard } from "@/Components/menuCard/MenuCard";
import { porkMenu } from "../../Data/porkMenu";

const PorkMenu = () => {
  return (
    <div className="ProductCardContainer">
      {porkMenu.map((pork) => (
        <MenuCard
          key={pork.id}
          image={pork.image}
          name={pork.name}
          price={pork.price}
          id={pork.id}
        />
      ))}
    </div>
  );
};
export default PorkMenu;
