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
    return <h2>No product found</h2>;
  }

  const addToCart = () => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      const updated = cart.map(item =>
        item.id === product.id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    alert("Added");
  };

  return (
    <div>

      <img src={mainImg || product.img} alt="" />

      <div>
        <img src="..." alt="" />
        <img src="..." alt="" />
        <img src="..." alt="" />
      </div>

      <h1>{product.name}</h1>
      <p>{product.price}</p>

      <button onClick={addToCart}>Add</button>

    </div>
  );
}