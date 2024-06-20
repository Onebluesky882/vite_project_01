import ProductCard from "../Components/ProductCard";
import { Pork } from "../Data/pork";

const PorkPage = () => {
  return (
    <div className="ProductCardContainer">
      {Pork.map((meat) => (
        <ProductCard
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
