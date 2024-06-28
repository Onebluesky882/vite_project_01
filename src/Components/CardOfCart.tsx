import { MenuCartItem } from "@/types/MenuItem";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export const CardOfCart = ({
  id,
  image,
  name,
  price,
  amount,
}: MenuCartItem) => {
  return (
    <div
      key={id}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} width={75} />

          <p>{`ชื่อเมนู : ${name}`}</p>
          <p>{`ราคา : ${price}`}</p>
          <p>จำนวน</p>
          <div>
            <CiCirclePlus style={{ textAlign: "center" }} />
            {` ${amount}`}
            <CiCircleMinus style={{ textAlign: "center" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
