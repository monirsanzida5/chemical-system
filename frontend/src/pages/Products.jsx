import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ NEW (ADD)
import useTranslate from "../hooks/useTranslate";

// 🔥 IMPORTANT: allProducts বাইরে নিতে হবে
export const allProducts = [
  {
    id: 1,
    name: "TATA COIL",
    price: 50,
    category: "GREEN",
    img: "/images/green.jpg"
  },
  {
    id: 2,
    name: "Chemical B",
    price: 200,
    category: "Powder",
    img: "/images/purple.jpg"
  },
  {
    id: 3,
    name: "Chemical C",
    price: 150,
    category: "Gas",
    img: "/images/red.jpg"
  },
  {
    id: 4,
    name: "Chemical D",
    price: 300,
    category: "Liquid",
    img: "/images/green.jpg"
  }
];

export default function Products({ lang = "en", cart, setCart }) {

  const nav = useNavigate();

  // ✅ NEW (ADD)
  const tData = useTranslate(lang);

  const text = {
    en: {
      title: "Our Products",
      search: "Search product...",
      buy: "Add to Cart",
      price: "Price",
      category: "Category",
      wishlist: "Wishlist"
    },
    bn: {
      title: "আমাদের পণ্য",
      search: "পণ্য খুঁজুন...",
      buy: "কার্টে যোগ করুন",
      price: "দাম",
      category: "ক্যাটাগরি",
      wishlist: "পছন্দ"
    }
  };

  // ✅ NEW SAFE FALLBACK (ADD)
  const tFinal = tData?.title ? tData : text[lang];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      const updated = cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    alert("Added to cart ✅");
  };

  // ❤️ WISHLIST
  const toggleWishlist = (product) => {
    const exists = wishlist.find(p => p.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter(p => p.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // FILTER
  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || p.category === category)
  );

  return (
    <div className="product-page">

      {/* HERO */}
      <div className="product-hero">
        <h1>{tFinal.title}</h1>
        <p>Premium Chemical Products Store</p>
      </div>

      {/* STATUS */}
      <h3 style={{ textAlign: "center" }}>
        🛒 Cart: {cart.length} | ❤️ Wishlist: {wishlist.length}
      </h3>

      {/* CONTROLS */}
      <div className="product-controls">

        <input
          placeholder={tFinal.search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">{tFinal.category}</option>
          <option value="Liquid">Liquid</option>
          <option value="Powder">Powder</option>
          <option value="Gas">Gas</option>
        </select>

      </div>

      {/* PRODUCTS */}
      <div className="product-grid">

        {filtered.map((p) => {

          const liked = wishlist.find(w => w.id === p.id);

          return (
            <div className="product-card" key={p.id}>

              <div className="product-img-box">
                <img
                  src={p.img}
                  alt="product"
                  onClick={() =>
                    nav(`/product/${p.id}`, { state: p })
                  }
                  style={{ cursor: "pointer" }}
                />
              </div>

              <div className="product-info">

                <h3>{p.name}</h3>

                <span className="tag">{p.category}</span>

                <p>💰 {tFinal.price}: ${p.price}</p>

                {/* BUTTONS */}
                <button onClick={() => addToCart(p)}>
                  🛒 {tFinal.buy}
                </button>

                <button
                  onClick={() => toggleWishlist(p)}
                  style={{
                    background: liked ? "red" : "#444",
                    marginTop: "5px"
                  }}
                >
                  ❤️ {tFinal.wishlist}
                </button>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}