import { Link } from "react-router-dom";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

interface Prop {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, price, image }: Prop) => {
  return (
    <div
      key={id}
      style={{
        boxShadow: "0 1px 10px #E1D3DF",
        borderRadius: "6px",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        to={image}
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
        <p
          style={{
            display: "flex",
            fontSize: "12px",
            color: "#5849C7",
            fontWeight: "normal",
            justifyContent: "center",
          }}
        >
          {name}
        </p>
      </Link>

      <p
        style={{ justifyContent: "center", display: "flex", color: "#1E1E20" }}
      >
        {price}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <CiCirclePlus style={{}} onClick={() => {}} />
        <CiCircleMinus onClick={() => {}} />
        <button
          style={{
            fontSize: "8px",
            borderStyle: "hidden",
            backgroundColor: "#F0E4B8",
            borderRadius: "8px",
            listStyle: "none",
            paddingRight: "10px",
            paddingLeft: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
          //onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
