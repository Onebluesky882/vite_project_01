import { GlobalContext } from "@/Hooks/GlobalContext";
import { useContext } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MenuCardProps } from "./menuCard/MenuCard";

export const CartCard = ({ id, image, name, price }: MenuCardProps) => {
  const { orders, onAdd, onMinus } = useContext(GlobalContext).cartProvider;

  const menuItem = orders.find((item) => item.menuId === id);
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
    >
      <div
        style={{
          width: "400px",
          height: "120%",
          backgroundAttachment: "fixed",
          backgroundColor: "#fff9e6",
        }}
      >
        <div
          className="div-cart-list"
          style={{
            width: "400px",
            height: "120%",
            display: "flex",
          }}
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
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingLeft: "16px",
            }}
          >
            <p>{name}</p>
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
              onClick={() => onMinus({ menuId: id })}
            />
            <p style={{ fontSize: "30" }}>{amount}</p>
            <CiCirclePlus
              style={{ fontSize: "30" }}
              onClick={() => onAdd({ menuId: id })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
