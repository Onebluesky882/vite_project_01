import { Link } from "react-router-dom";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

interface Prop {
  id: number;
  name: string;
  meat: Meat;
  price: Price;
  image: string;
  slug: string;
}

interface Meat {
  meat: string[];
}

interface Price {
  price: Number[];
}
const ProductCart = ({ id, name, meat, price, image, slug }: Prop) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        boxShadow: "0 1px 10px #E1D3DF",
        borderRadius: "6px",
        display: "grid",
      }}
    >
      <Link
        to={slug}
        style={{
          textDecoration: "none",
        }}
      >
        <img
          src={image}
          style={{
            width: "130px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <h3
          style={{
            display: "flex",
            fontSize: "12px",
            color: "#5849C7",
            fontWeight: "normal",
            justifyContent: "center",
          }}
        >
          {name}
        </h3>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CiCirclePlus
          style={{}}
          onClick={() => {
            setCount(count + 1);
          }}
        />
        <p style={{ fontWeight: "200", fontSize: "12px" }}>{count}</p>
        <CiCircleMinus
          onClick={() => {
            if (count === 0) {
              return;
            }
            setCount(count - 1);
          }}
        />
        <button
          style={{
            fontSize: "8px",
            borderStyle: "hidden",

            borderRadius: "8px",
            listStyle: "none",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
