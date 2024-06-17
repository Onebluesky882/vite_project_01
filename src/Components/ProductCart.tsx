import { Link } from "react-router-dom";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

interface Prop {
  id: number;
  name: string;
  meat: string;
  price: number;
  image: string;
  slug: string;
}

const ProductCart = ({ id, name, meat, price, image, slug }: Prop) => {
  /*const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  const carts = useSelector((menu) => menu.cart.items);
  */

  const [count, setCount] = useState(0);

  return (
    <div
      key={id}
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
          {name + meat}
        </h3>
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
          //onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
