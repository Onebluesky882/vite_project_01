import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export type MenuCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export const MenuCard = ({ id, name, image, price }: MenuCardProps) => {
  const { cart, setCart } = useContext(GlobalContext);

  const menuItem = cart.find((item) => item.name === name);
  const amount = menuItem?.amount ?? 0;

  const onAdd = () => {
    if (amount > 9) {
      return;
    }

    const newCart = [...cart];
    if (amount === 0) {
      newCart.push({
        id,
        name,
        image,
        price,
        amount: 1,
      });
      setCart(newCart);
      return;
    }

    const cartItem = newCart.find((item) => item.name === name);
    if (cartItem) {
      cartItem.amount++;
    }
    setCart(newCart);
  };

  const onMinus = () => {
    if (amount < 0) {
      return;
    }

    // สร้าง new cart
    const updateCart = [...cart];
    const removeCart = updateCart.filter((item) => item.name === name);

    // fillter unique name

    if (updateCart) {
      setCart(updateCart.map((item) => item));
    }

    // if (amount === 0) {

    // if (amount === 1) {

    // เอา item ออกจาก array

    // array.filter => new array

    // update with new array

    // ลด amount ใน item

    // find the cartItem

    // cartItem is exist then decrease amount

    // update with new cart
  };

  return (
    <div key={id} className="menu-card">
      <div style={{ marginBottom: "-30px" }}>
        <img style={{ ...imgStyle }} src={image} alt={image} width={160} />
      </div>
      <h3>{name}</h3>
      <p>{`ราคา : ${price} บาท`}</p>
      <div style={{ ...divOrder }}>
        <CiCircleMinus style={{ ...iconStyleLeft }} onClick={onMinus} />
        <p> {`จำนวน : ${amount}`}</p>
        <CiCirclePlus style={{ ...iconStyleRight }} onClick={onAdd} />
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
