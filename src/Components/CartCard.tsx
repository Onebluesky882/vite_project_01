import { MenuCartItem } from "@/types/MenuItem";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export const CartCard = ({ id, image, name, price, amount }: MenuCartItem) => {
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
            <p
              key={id}
              style={{ color: "red", fontWeight: "bold" }}
            >{`฿${price}`}</p>
          </div>
          {/* <p>จำนวน</p> */}

          <div
            key={id}
            style={{
              position: "absolute",
              bottom: "8px",
              right: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <CiCirclePlus key={id} />
            {amount}
            <CiCircleMinus />
          </div>
        </div>
      </div>
    </div>
  );
};
