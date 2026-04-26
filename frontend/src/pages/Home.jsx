import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ lang }) {
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  const nav = useNavigate();

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
      marquee: "Best Quality Chemicals | Fast Delivery | Big Discount Available Now",
      explore: "Explore Products",
      contact: "Contact Us",
      shop: "Shop Now",
      feature1: "Fast System",
      feature2: "Secure Login",
      feature3: "Product Upload",
      feature4: "Multi Language"
    },
    bn: {
      welcome: "স্বাগতম",
      company: "মনির ও সানজিদা কেমিক্যালস ওয়ার্কস",
      marquee: "সেরা মানের কেমিক্যাল | দ্রুত ডেলিভারি | বড় ডিসকাউন্ট চলছে",
      explore: "পণ্য দেখুন",
      contact: "যোগাযোগ করুন",
      shop: "কিনুন",
      feature1: "দ্রুত সিস্টেম",
      feature2: "নিরাপদ লগইন",
      feature3: "পণ্য আপলোড",
      feature4: "বহুভাষা"
    }
  };

  const banners = [
    { img: "/images/1.jpg", title: "🔥 Chemical System", desc: "Best quality chemical products" },
    { img: "/images/2.jpg", title: "⚡ Fast Delivery", desc: "We deliver products very fast" },
    { img: "/images/3.jpg", title: "💰 Big Discount", desc: "Get amazing offers today" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); // ✅ FIXED

  return (
    <div>

      <h2>{t[lang]?.welcome}</h2>
      <p>{t[lang]?.company}</p>

      <img src={banners[index].img} alt="" />

      <h1>{banners[index].title}</h1>
      <p>{banners[index].desc}</p>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <button onClick={subscribe}>Subscribe</button>

    </div>
  );
}