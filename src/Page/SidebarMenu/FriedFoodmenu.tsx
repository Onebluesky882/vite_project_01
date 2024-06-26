import { MenuCard } from "@/Components/menuCard/MenuCard";
import { friedFoodJapan, friedFoodThai } from "@/Data/friedFood";

const FriedFoodMenu = () => {
  return (
    <>
      <div style={{}}>
        <h2 style={{ ...headerStyle, textAlign: "center" }}>
          อาหารทานสไตล์ญี่ปุ่น
        </h2>
        <div className="ProductCardContainer">
          {friedFoodJapan.map((japanfood) => (
            <MenuCard
              key={japanfood.id}
              image={japanfood.image}
              name={japanfood.name}
              price={japanfood.price}
              id={japanfood.id}
            />
          ))}
        </div>
      </div>
      <div style={{}}>
        <h2 style={{ ...headerStyle, textAlign: "center" }}>
          อาหารทานสไตล์ไทย
        </h2>
        <div className="ProductCardContainer">
          {friedFoodThai.map((thaifood) => (
            <MenuCard
              key={thaifood.id}
              image={thaifood.image}
              name={thaifood.name}
              price={thaifood.price}
              id={thaifood.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const headerStyle = {
  fontSize: "25px",
};
export default FriedFoodMenu;
