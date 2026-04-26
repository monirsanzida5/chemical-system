import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ lang = "en" }) {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    if (!email) return alert("Enter email");
    localStorage.setItem("newsletter", email);
    alert("Subscribed ✅");
    setEmail("");
  };

  const [index, setIndex] = useState(0);
  const nav = useNavigate();

  // 🌐 TEXT
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
    }
  };

  const banners = [
    {
      img: "/images/1.jpg",
      title: "🔥 Chemical System",
      desc: "Best quality chemical products"
    },
    {
      img: "/images/2.jpg",
      title: "⚡ Fast Delivery",
      desc: "We deliver products very fast"
    },
    {
      img: "/images/3.jpg",
      title: "💰 Big Discount",
      desc: "Get amazing offers today"
    }
  ];

  // ✅ FIX (eslint warning remove)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div>

      {/* 🔥 TOP BANNER */}
      <div className="top-banner">
        <div className="banner-box">

          <h2 className="typing">{t[lang].welcome}</h2>

          <p className="company-name">
            {t[lang].company}
          </p>

          <div className="marquee">
            <span>🔥 {t[lang].marquee}</span>
          </div>

          <div className="banner-buttons">
            <button className="explore-btn" onClick={() => nav("/products")}>
              {t[lang].explore}
            </button>

            <button className="contact-btn" onClick={() => nav("/contact")}>
              {t[lang].contact}
            </button>
          </div>

        </div>
      </div>

      {/* 🔥 SLIDER */}
      <div className="slider">

        <div className="slider-overlay"></div>

        <img
          src={banners[index].img}
          className="slider-img"
          alt="banner"
        />

        <div className="slider-content">
          <h1>{banners[index].title}</h1>
          <p>{banners[index].desc}</p>

          <button className="shop-btn" onClick={() => nav("/products")}>
            {t[lang].shop}
          </button>
        </div>

      </div>

      {/* FEATURES */}
      <div className="feature-container">
        <div className="feature-card">⚡ {t[lang].feature1}</div>
        <div className="feature-card">🔐 {t[lang].feature2}</div>
        <div className="feature-card">📦 {t[lang].feature3}</div>
        <div className="feature-card">🌐 {t[lang].feature4}</div>
      </div>

      {/* 🔥 FOOTER */}
      <footer className="home-footer">

        <div className="footer-grid">

          <div className="footer-col">
            <h2>🏢 {t[lang].company}</h2>
            <p>We provide high quality chemical products worldwide</p>

            <div className="social-icons">
              <span onClick={()=>window.open("https://facebook.com","_blank")}>📘</span>
              <span onClick={()=>window.open("https://youtube.com","_blank")}>▶️</span>
              <span onClick={()=>window.open("https://twitter.com","_blank")}>🐦</span>
              <span onClick={()=>window.open("https://google.com","_blank")}>🌍</span>
            </div>
          </div>

          <div className="footer-col">
            <h3>🔗 Links</h3>
            <ul>
              <li onClick={() => nav("/")}>Home</li>
              <li onClick={() => nav("/products")}>Products</li>
              <li onClick={() => nav("/services")}>Services</li>
              <li onClick={() => nav("/contact")}>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>📞 Contact</h3>
            <p>Email: info@chemical.com</p>
            <p>Phone: +880123456789</p>
            <p>Location: Bangladesh</p>

            <button
              className="whatsapp-btn"
              onClick={() => window.open("https://wa.me/8801854242461", "_blank")}
            >
              💬 Chat on WhatsApp
            </button>
          </div>

          <div className="footer-col">
            <h3>📩 Newsletter</h3>

            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <button onClick={subscribe}>Subscribe</button>

            <p className="live-time">
              🕒 {new Date().toLocaleTimeString()}
            </p>
          </div>

        </div>

        <iframe
          className="footer-map"
          src="https://maps.google.com/maps?q=bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
          title="map"
        />

        <div className="footer-bottom-advanced">
          <p>© 2026 Chemical System | All Rights Reserved</p>
        </div>

      </footer>

    </div>
  );
}