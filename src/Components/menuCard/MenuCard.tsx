import { createContext, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export type CounterContextType = {
  counter: number;
  setNumber?: React.Dispatch<React.SetStateAction<number>>;
};

export interface MenuCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}
export const CounterContext = createContext<CounterContextType>({
  counter: 0,
});

export const MenuCard = ({ id, name, image, price }: MenuCardProps) => {
  const [counter, setNumber] = useState(0);
  //const [menu, setMenu] = useState("");
  const contextValue = {
    counter,
    setNumber,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      <div key={id} className="menuCard">
        <div style={{ marginBottom: "-30px" }}>
          <img style={{ ...imgStyle }} src={image} alt={image} width={160} />
        </div>
        <h3>{name}</h3>
        <p>{`ราคา : ${price} บาท`}</p>
        <div style={{ ...divOrder }}>
          <CiCircleMinus
            style={{ ...iconStyleLeft }}
            onClick={() => counter === 0 || setNumber(counter - 1)}
          />
          <p> {`จำนวน : ${counter}`}</p>
          <CiCirclePlus
            style={{ ...iconStyleRight }}
            onClick={() => counter === 10 || setNumber(counter + 1)}
          />
        </div>
      </div>
    </CounterContext.Provider>
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
