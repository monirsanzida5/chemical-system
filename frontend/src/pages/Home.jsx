import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ lang }) {

  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  const nav = useNavigate();

  const banners = [
    { img: "/images/1.jpg", title: "🔥 Chemical System", desc: "Best quality products" },
    { img: "/images/2.jpg", title: "⚡ Fast Delivery", desc: "Fast service" },
    { img: "/images/3.jpg", title: "💰 Big Discount", desc: "Offers available" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); // ✅ FIXED

  const subscribe = () => {
    if (!email) return alert("Enter email");
    localStorage.setItem("newsletter", email);
    setEmail("");
    alert("Subscribed");
  };

  return (
    <div>

      <h1>{banners[index].title}</h1>
      <p>{banners[index].desc}</p>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={subscribe}>Subscribe</button>

    </div>
  );
}