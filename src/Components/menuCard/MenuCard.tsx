import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export type CounterContextType = {
  counter: number;
  setCounter?: React.Dispatch<React.SetStateAction<number>>;
};

export interface MenuCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

export const MenuCard = ({ id, name, image, price }: MenuCardProps) => {
  const [counter, setnumber] = useState(0);

  return (
    <div key={id} className="menuCard">
      <div>
        <img style={{ ...imgStyle }} src={image} alt={image} width={160} />
      </div>
      <h3>{name}</h3>
      <p>{`ราคา : ${price} บาท`}</p>
      <div style={{ ...divOrder }}>
        <CiCirclePlus
          style={{ ...iconStyleRight }}
          onClick={() => counter === 10 || setnumber(counter + 1)}
        />

        <p> {`จำนวน : ${counter}`}</p>

        <CiCircleMinus
          style={{ ...iconStyleLeft }}
          onClick={() => counter === 0 || setnumber(counter - 1)}
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

const iconStyleRight = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40",
  color: "#A78C84",
  paddingRight: "30",
};

const iconStyleLeft = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40",
  color: "#A78C84",
  paddingLeft: "30",
};

const divOrder = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
