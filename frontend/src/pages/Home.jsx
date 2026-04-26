import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ lang }) {
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  const nav = useNavigate(); // ✅ এখন use হচ্ছে

  const subscribe = () => {
    if (!email) return alert("Enter email");

    localStorage.setItem("newsletter", email);
    alert("Subscribed ✅");
    setEmail("");
  };

  const t = {
    en: {
      welcome: "Welcome",
      company: "Monir and Sanzida Chemicals Works",
      shop: "Shop Now"
    },
    bn: {
      welcome: "স্বাগতম",
      company: "মনির ও সানজিদা কেমিক্যালস",
      shop: "কিনুন"
    }
  };

  const banners = [
    { img: "/images/1.jpg", title: "🔥 Chemical System" },
    { img: "/images/2.jpg", title: "⚡ Fast Delivery" },
    { img: "/images/3.jpg", title: "💰 Discount" }
  ];

  // ✅ FIXED
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div>

      <h2>{t[lang]?.welcome}</h2>
      <p>{t[lang]?.company}</p>

      <img src={banners[index].img} alt="" />

      <h1>{banners[index].title}</h1>

      {/* ✅ nav use করা হয়েছে */}
      <button onClick={() => nav("/products")}>
        {t[lang]?.shop}
      </button>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={subscribe}>Subscribe</button>

    </div>
  );
}