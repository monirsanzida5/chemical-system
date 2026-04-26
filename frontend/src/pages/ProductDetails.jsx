import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { allProducts } from "./Products";

export default function ProductDetails({ cart, setCart }) {

  const { id } = useParams();
  const location = useLocation();
  const nav = useNavigate();

  // 🔥 product resolve (SAFE)
  let product = location.state;
  if (!product) {
    product = allProducts.find(p => p.id === parseInt(id));
  }

  const safeProduct = product || { img: "", name: "", price: "", category: "" };

  const [mainImg, setMainImg] = useState(safeProduct.img);

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>❌ No product found</h2>;
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

    alert("Added to cart ✅");
  };

  return (
    <div className="details-page">

      <button onClick={() => nav(-1)}>⬅ Back</button>

      <div className="details-container">

        {/* IMAGE */}
        <div className="details-images">

          <img
            src={mainImg || product.img}
            alt="main product image"
            className="main-img"
          />

          <div className="thumbs">
            <img
              src={product.img}
              alt="product thumbnail 1"
              onClick={() => setMainImg(product.img)}
            />
            <img
              src="/images/green.jpg"
              alt="product thumbnail green"
              onClick={() => setMainImg("/images/green.jpg")}
            />
            <img
              src="/images/purple.jpg"
              alt="product thumbnail purple"
              onClick={() => setMainImg("/images/purple.jpg")}
            />
          </div>

        </div>

        {/* INFO */}
        <div className="details-info">

          <h1>{product.name}</h1>
          <p>💰 Price: ${product.price}</p>
          <p>📦 Category: {product.category}</p>

          <button onClick={addToCart}>
            🛒 Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}