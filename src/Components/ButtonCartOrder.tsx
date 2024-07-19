import { log } from "console";

export const ButtonCartOrder = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        margin: "10px",
      }}
    >
      <button
        onClick={() => {
          console.log("click");
        }}
        style={{
          backgroundColor: "#ED7773",
          paddingRight: "40px",
          paddingLeft: "40px",
          paddingTop: "25px",
          paddingBottom: "25px",
          marginRight: "5px",
          borderRadius: "12px",
          borderStyle: "none",
          color: "white",
        }}
      >
        ยกเลิกทั้งหมด
      </button>
      <button
        style={{
          backgroundColor: "#57BAAD",
          paddingRight: "40px",
          paddingLeft: "40px",
          paddingTop: "25px",
          paddingBottom: "25px",
          marginLeft: "5px",
          borderRadius: "12px",
          color: "white",
          borderStyle: "none",
        }}
      >
        ยืนยัน
      </button>
    </div>
  );
};
