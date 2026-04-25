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

    alert("Added to cart");
  };

  return (
    <div>

      <button onClick={() => nav(-1)}>Back</button>

      <img src={mainImg || product.img} alt="product" />

      <img src="..." alt="product image" />
      <img src="..." alt="product image" />
      <img src="..." alt="product image" />

      <h1>{product.name}</h1>
      <button onClick={addToCart}>Add to Cart</button>

    </div>
  );
}