import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

// 🌍 SIMPLE LANGUAGE OBJECT
const t = {
  en: {
    welcome: "Welcome to Chemical System",
    company: "Monir & Sanzida Chemicals Works",
    marquee: "High quality chemical products, 24×7 support, fast delivery.",
    explore: "Explore Products",
    contact: "Contact Us",
    shop: "Shop Now",
    feature1: "Fast Delivery",
    feature2: "Secure Transactions",
    feature3: "24×7 Support",
    feature4: "Global Shipping"
  },
  bn: {
    welcome: "Chemical System এ স্বাগতম",
    company: "Monir & Sanzida Chemicals Works",
    marquee: "উচ্চ মানের কেমিক্যাল, ২৪×৭ সাপোর্ট, দ্রুত ডেলিভারি।",
    explore: "প্রোডাক্ট ঘুরে দেখুন",
    contact: "যোগায়োগ",
    shop: "কিনুন এখনই",
    feature1: "দ্রুত ডেলিভারি",
    feature2: "সুরক্ষিত লেনদেন",
    feature3: "২৪×৭ সাপোর্ট",
    feature4: "আন্তর্জাতিক শিপিং"
  }
};

export default function Home({ lang = "en" }) {
  const [email, setEmail] = useState("");
  const [index, setIndex] = useState(0);
  const nav = useNavigate();

  const subscribe = () => {
    if (!email) return alert("Enter email");

    localStorage.setItem("newsletter", email);
    alert("Subscribed ✅");
    setEmail("");
  };

  const currentLang = t[lang] ? lang : "en";
  const langText = t[currentLang];

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
          <h2 className="typing">{langText.welcome}</h2>
          <p className="company-name">{langText.company}</p>
          <div className="marquee">
            <span>🔥 {langText.marquee}</span>
          </div>
          <div className="banner-buttons">
            <button
              className="explore-btn"
              onClick={() => nav("/products")}
            >
              {langText.explore}
            </button>
            <button
              className="contact-btn"
              onClick={() => nav("/contact")}
            >
              {langText.contact}
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
          <button
            className="shop-btn"
            onClick={() => nav("/products")}
          >
            {langText.shop}
          </button>
        </div>
      </div>

      {/* BRAND FEATURE – ব্যানারের নিচে Tata Coil */}
      <div className="home-feature-section">
        <div className="feature-container">
          {/* LEFT COLUMN – লেখা + লোগো */}
          <div className="col-left fade-in-left">
            <div className="logo-tag-wrap">
              <div className="tata-logo-box">
                <span className="tata-logo">TATA</span>
                <span className="tata-sub">Mosquito Coil</span>
              </div>
              <div className="hero-tag">
                A Trusted Mosquito Coil in Bangladesh
              </div>
            </div>

            <h1 className="headline">
              Sleep Peacefully. Wake Refreshed.
            </h1>

            <p className="sub-head">
              Up to 8 Hours of Continuous Protection
            </p>

            <p className="body-text">
              One coil for the whole night. Dependable quality, made with care for your family.
            </p>

            <div className="features-list">
              {/* 8 HOURS – ঘড়ি আইকন */}
              <div className="feature-item">
                <span className="feature-icon clock">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-clock"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="7" x2="12" y2="12" />
                    <line x1="12" y1="12" x2="15" y2="12" />
                  </svg>
                </span>
                <div className="feature-text">
                  <span className="feature-title">8 Hours</span>
                  <span className="feature-desc">
                    All‑night coverage for worry‑free sleep
                  </span>
                </div>
              </div>

              {/* Advanced Formula – leaf আইকন */}
              <div className="feature-item">
                <span className="feature-icon leaf">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-leaf"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  >
                    <path
                      d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2.5 6 6 6 3.5 0 6-2.5 6-6 0-3.5-2.5-6-6-6z M12 4v4 M12 10v4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <div className="feature-text">
                  <span className="feature-title">Advanced Formula</span>
                  <span className="feature-desc">
                    Effective against common mosquitoes
                  </span>
                </div>
              </div>

              {/* Safe for Daily Use – shield আইকন */}
              <div className="feature-item">
                <span className="feature-icon shield">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-shield"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  >
                    <path
                      d="M12 2l-8 3.2v6.5c0 6 6 10 8 10 2 0 8-4 8-10V5.2l-8-3.2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="feature-text">
                  <span className="feature-title">Safe for Daily Use</span>
                  <span className="feature-desc">
                    When used as directed
                  </span>
                </div>
              </div>

              {/* Trusted Quality – star আইকন */}
              <div className="feature-item">
                <span className="feature-icon star">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon-star"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  >
                    <polygon points="12,2 15,8.5 22,9 16.5,13.5 18,20 12,16.5 6,20 7.5,13.5 2,9 9,8.5" />
                  </svg>
                </span>
                <div className="feature-text">
                  <span className="feature-title">Trusted Quality</span>
                  <span className="feature-desc">
                    Consistent performance in every pack
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – ছবির কার্ড */}
          <div className="col-right fade-in-right">
            <div className="image-card">
              <div className="card-container">
                <img
                  src="/images/coil-family.jpg"
                  alt="Family with Tata mosquito coil burning"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHEMICAL FEATURES – 4 CARD পাশাপাশি */}
      <div className="feature-container">
        <div className="feature-card">⚡ {langText.feature1}</div>
        <div className="feature-card">🔐 {langText.feature2}</div>
        <div className="feature-card">📦 {langText.feature3}</div>
        <div className="feature-card">🌐 {langText.feature4}</div>
      </div>

      {/* WHY CHOOSE TATA – 4 CARD */}
      <div className="tata-features-section">
        <div className="tata-heading">
          <h2>Why Choose TATA</h2>
          <p>Quality that makes a real difference</p>
        </div>

        <div className="tata-cards-grid">
          {/* CARD 1 – 10-Hour Protection */}
          <div className="tata-card">
            <div className="tata-card-icon clock-icon">🕐</div>
            <h3>10-Hour Protection</h3>
            <p>Slow‑burn technology designed to provide consistent overnight coverage.</p>
          </div>

          {/* CARD 2 – Research-Based Formula */}
          <div className="tata-card">
            <div className="tata-card-icon flask-icon">🧪</div>
            <h3>Research‑Based Formula</h3>
            <p>
              Effective against dengue and malaria‑carrying mosquitoes, as well as common household mosquitoes.
            </p>
          </div>

          {/* CARD 3 – Strict Quality Control */}
          <div className="tata-card">
            <div className="tata-card-icon quality-icon">✅</div>
            <h3>Strict Quality Control</h3>
            <p>Each batch is carefully tested. We never compromise on quality.</p>
          </div>

          {/* CARD 4 – Safe When Used Properly */}
          <div className="tata-card">
            <div className="tata-card-icon safety-icon">🛡️</div>
            <h3>Safe When Used Properly</h3>
            <p>Made with approved ingredients and clear usage instructions on every pack.</p>
          </div>
        </div>
      </div>

      {/* 🔥 FOOTER */}
      <footer className="home-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h2>🏢 {langText.company}</h2>
            <p>
              {currentLang === "bn"
                ? "আমরা উচ্চ মানের কেমিক্যাল সরবরাহ করি বিশ্বব্যাপী"
                : "We provide high quality chemical products worldwide"}
            </p>
            <div className="social-icons">
              <span
                onClick={() => window.open("https://facebook.com", "_blank")}
              >
                📘
              </span>
              <span
                onClick={() => window.open("https://youtube.com", "_blank")}
              >
                ▶️
              </span>
              <span
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                🐦
              </span>
              <span
                onClick={() => window.open("https://google.com", "_blank")}
              >
                🌍
              </span>
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
              onClick={() =>
                window.open("https://wa.me/8801854242461", "_blank")
              }
            >
              💬 Chat on WhatsApp
            </button>
          </div>

          <div className="footer-col">
            <h3>📩 Newsletter</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          src="https://www.google.com/maps?q=Bangladesh&output=embed"
          title="map"
        />

        <div className="footer-bottom-advanced">
          <p>© 2026 Chemical System | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}