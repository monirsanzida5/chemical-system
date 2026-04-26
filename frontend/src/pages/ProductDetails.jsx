import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { allProducts } from "./Products";

export default function ProductDetails({ cart, setCart }) {

  const { id } = useParams();
  const location = useLocation();
  const nav = useNavigate();

  let product = location.state;
  if (!product) {
    product = allProducts.find(p => p.id === parseInt(id));
  }

  const [mainImg] = useState(product?.img || "");

  if (!product) {
    return <h2>Not Found</h2>;
  }

  const addToCart = () => {
    const exists = cart.find(i => i.id === product.id);

    if (exists) {
      const updated = cart.map(i =>
        i.id === product.id ? { ...i, qty: (i.qty || 1) + 1 } : i
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    alert("Added");
  };

  return (
    <div>

      <button onClick={() => nav(-1)}>Back</button>

      <img src={mainImg || product.img} alt="product" />

      <div>
        <img src="..." alt="thumb1" />
        <img src="..." alt="thumb2" />
        <img src="..." alt="thumb3" />
      </div>

      <h1>{product.name}</h1>
      <button onClick={addToCart}>Add</button>

    </div>
  );
}