import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { CartOrder } from "@/types/CartOrder";
import { getMenuItem } from "@/Data/menu";
import { useContext } from "react";
import { GlobalContext } from "@/Hooks/GlobalContext";

type CartOrderCardProps = {
  order: CartOrder;
};

export const CartOrderCard = ({ order }: CartOrderCardProps) => {
  const { onAdd, onMinus } = useContext(GlobalContext).cartProvider;
  const menuItem = getMenuItem(order.menuId);
  const amount = order.amount;
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
              src={menuItem.image}
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
            <p>{menuItem.name}</p>
            <p style={{ color: "red", fontWeight: "bold" }}>{`{${
              menuItem.price * amount
            }`}</p>
          </div>

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
              onClick={() => onMinus({ menuId: order.menuId })}
            />
            <p style={{ fontSize: "30" }}>{}</p>
            <CiCirclePlus
              style={{ fontSize: "30" }}
              onClick={() => onAdd({ menuId: order.menuId })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
