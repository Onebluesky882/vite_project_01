import ProductCart from "../Components/ProductCart";
import { Menus } from "../Data";

const HomePage = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr) ",
          gridTemplateRows: "repeat(3,1fa)",
          columnGap: "2px",
          rowGap: "2px",
        }}
      >
        {Menus.map((menu, index) => (
          <ProductCart key={index} {...menu} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
