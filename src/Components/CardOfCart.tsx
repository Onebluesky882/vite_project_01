import { MenuCartItem } from "@/types/MenuItem";

export const CardOfCart = ({
  id,
  image,
  name,
  price,
  amount,
}: MenuCartItem) => {
  return (
    <div
      style={{
        width: "100%",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#F6ECD2",
          padding: " 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img key={id} src={image} width={40} />
        </div>
        <p>{`ชื่อเมนู : ${name}`}</p>
        <p>{`ราคา : ${price}`}</p>
        <p>{`จำนวน : ${amount}`}</p>
      </div>
    </div>
  );
};
