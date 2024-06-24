import { MenuCard } from "@/Components/menuCard/MenuCard";
import { porkMenu } from "../Data/porkMenu";

const PorkPage = () => {
  return (
    <div className="ProductCardContainer">
      {porkMenu.map((meat) => (
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
export default PorkPage;
