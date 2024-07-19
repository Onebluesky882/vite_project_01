import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export type MenuCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
};

export const MenuCard = ({
  id,
  name,
  image,
  price,
  category = "",
}: MenuCardProps) => {
  const { cart, onAdd, onMinus } = useContext(GlobalContext).cartProvider;

  const menuItem = cart.find((item) => item.name === name);
  const amount = menuItem?.amount ?? 0;

  return (
    <div key={id} className="menu-card">
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <div style={{ position: "relative" }}>
        <img style={{ ...imgStyle }} src={image} alt={image} width={160} />
      </div>
      <div style={{ position: "relative" }}>
        <h3>{name}</h3>
      </div>
      <p>{`ราคา : ${price} บาท`}</p>
      <div style={{ ...divOrder }}>
        <CiCircleMinus
          style={{ ...iconStyleLeft }}
          onClick={() => onMinus({ name })}
        />
        <p> {`จำนวนสินค้า : ${amount}`}</p>
        <CiCirclePlus
          style={{ ...iconStyleRight }}
          onClick={() => onAdd({ id, name, image, price, category })}
        />
      </div>
    </div>
  );
};

//styles
const imgStyle = {
  justifyContent: "center",
  alignItems: "center",
};

const iconStyleLeft = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40",
  color: "#A78C84",
  paddingRight: "20",
};

const iconStyleRight = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40",
  color: "#A78C84",
  paddingLeft: "20",
};

const divOrder = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
