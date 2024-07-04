import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MenuCardProps } from "./menuCard/MenuCard";

export const CartCard = ({ id, image, name, price }: MenuCardProps) => {
  const { cart, onAdd, onMinus } = useContext(GlobalContext).cartProvider;

  const menuItem = cart.find((item) => item.name === name);
  const amount = menuItem?.amount ?? 0;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        position: "relative",
      }}
      key={id}
    >
      <div
        style={{
          width: "400px",
          height: "120%",
          backgroundAttachment: "fixed",
          backgroundColor: "#fff9e6",
        }}
        key={id}
      >
        <div
          className="div-cart-list"
          style={{
            width: "400px",
            height: "120%",
            display: "flex",
          }}
          key={id}
        >
          <div>
            <img
              src={image}
              width={140}
              height={140}
              style={{
                objectFit: "cover",
                background: "white",
              }}
              key={id}
            />
          </div>

          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "16px",
            }}
          >
            <p key={id}>{name}</p>
            <p style={{ color: "red", fontWeight: "bold" }}>{`฿${
              price * amount
            }`}</p>
          </div>
          {/* <p>จำนวน</p> */}

          <div
            style={{
              position: "absolute",
              bottom: "8px",
              right: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <CiCircleMinus
              style={{ fontSize: "30" }}
              onClick={() => onMinus({ name })}
            />
            <p style={{ fontSize: "30" }}>{amount}</p>
            <CiCirclePlus
              style={{ fontSize: "30" }}
              onClick={() => onAdd({ id, name, image, price })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
