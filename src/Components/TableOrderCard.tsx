import { getMenuItem } from "@/Data/menu";
import { Order } from "@/types/CartOrder";

type TableOrderCardProps = {
  order: Order;
};

export const TableOrderCard = ({ order }: TableOrderCardProps) => {
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
            <p style={{ color: "red", fontWeight: "bold" }}>{`฿${
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
            {order.status} {order.amount}
          </div>
        </div>
      </div>
    </div>
  );
};
