import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

// 🌍 সব টেক্সট এখানে (Google‑friendly)
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
    feature4: "Global Shipping",
    tata_headline: "Sleep Peacefully. Wake Refreshed.",
    tata_subhead: "Up to 8 Hours of Continuous Protection",
    tata_body: "One coil for the whole night. Dependable quality, made with care for your family.",
    tata_8hours: "8 Hours",
    tata_8desc: "All‑night coverage for worry‑free sleep",
    tata_formula: "Advanced Formula",
    tata_formuladesc: "Effective against common mosquitoes",
    tata_safe: "Safe for Daily Use",
    tata_safedesc: "When used as directed",
    tata_quality: "Trusted Quality",
    tata_qualitydesc: "Consistent performance in every pack",
    why_choose: "Why Choose TATA",
    why_body: "Quality that makes a real difference",
    card1_title: "10-Hour Protection",
    card1_desc: "Slow‑burn technology designed to provide consistent overnight coverage.",
    card2_title: "Research‑Based Formula",
    card2_desc: "Effective against dengue and malaria‑carrying mosquitoes, as well as common household mosquitoes.",
    card3_title: "Strict Quality Control",
    card3_desc: "Each batch is carefully tested. We never compromise on quality.",
    card4_title: "Safe When Used Properly",
    card4_desc: "Made with approved ingredients and clear usage instructions on every pack.",
    footer_about: "We provide high quality chemical products worldwide",
    footer_links: "🔗 Links",
    home: "Home",
    products: "Products",
    services: "Services",
    footer_contact: "📞 Contact",
    footer_email_label: "Email",
    footer_phone_label: "Phone",
    footer_location_label: "Location",
    footer_whatsapp_button: "💬 Chat on WhatsApp",
    footer_newsletter_title: "📩 Newsletter",
    footer_email_placeholder: "Enter your email",
    footer_subscribe_button: "Subscribe",
    footer_copyright: "© 2026 Chemical System | All Rights Reserved"
  },
  bn: {
    welcome: "স্বাগতম",
    company: "মনির ও সানজিদা কেমিক্যালস ওয়ার্কস",
    marquee: "উচ্চ মানের কেমিক্যাল, ২৪×৭ সাপোর্ট, দ্রুত ডেলিভারি।",
    explore: "প্রোডাক্ট ঘুরে দেখুন",
    contact: "যোগাযোগ",
    shop: "কিনুন এখনই",
    feature1: "দ্রুত ডেলিভারি",
    feature2: "সুরক্ষিত লেনদেন",
    feature3: "২৪×৭ সাপোর্ট",
    feature4: "আন্তর্জাতিক শিপিং",
    tata_headline: "শান্তিতে ঘুমান, প্রাণবন্ত হয়ে জাগুন।",
    tata_subhead: "৮ ঘণ্টা পর্যন্ত অব্যাহত সুরক্ষা",
    tata_body: "সারারাতের জন্য একটি কয়েল। নির্ভরযোগ্য মান, যা আপনার পরিবারের জন্য তৈরি।",
    tata_8hours: "৮ ঘণ্টা",
    tata_8desc: "চিন্তামুক্ত ঘুমের জন্য সারারাতের কভারেজ",
    tata_formula: "উন্নত ফর্মূলা",
    tata_formuladesc: "সাধারণ মশার বিরুদ্ধে কার্যকরী",
    tata_safe: "প্রতিদিন নিরাপদে ব্যবহার",
    tata_safedesc: "নির্দেশ অনুযায়ী ব্যবহার করুন",
    tata_quality: "বিশ্বস্ত মান",
    tata_qualitydesc: "প্রতিটি প্যাকে অপরিবর্তিত কর্মক্ষমতা",
    why_choose: "কেন TATA বেছে নেবেন",
    why_body: "যে মান আসল পার্থক্য তৈরি করে",
    card1_title: "১০ ঘণ্টার সুরক্ষা",
    card1_desc: "ধীরে পোড়ানো প্রযুক্তি, যা সারারাতের জন্য সঙ্গতিপূর্ণ কভারেজ দেয়।",
    card2_title: "গবেষণা‑ভিত্তিক ফর্মূলা",
    card2_desc: "ডেঙ্গু ও ম্যালেরিয়া‑বাহী মশা এবং সাধারণ ঘরের মশার বিরুদ্ধে কার্যকরী।",
    card3_title: "কঠোর গুণগত নিয়ন্ত্রণ",
    card3_desc: "প্রতিটি ব্যাচ নিয়মিত পরীক্ষা করা হয়। আমরা কখনোই মানের সঙ্গে আপোষ করি না।",
    card4_title: "সঠিকভাবে ব্যবহার করলে নিরাপদ",
    card4_desc: "অনুমোদিত উপাদান দিয়ে তৈরি এবং প্রতিটি প্যাকে স্পষ্ট ব্যবহার নির্দেশিকা।",
    footer_about: "আমরা বিশ্বব্যাপী উচ্চ মানের কেমিক্যাল সরবরাহ করি",
    footer_links: "🔗 লিংক",
    home: "হোম",
    products: "প্রোডাক্ট",
    services: "সার্ভিস",
    footer_contact: "📞 যোগাযোগ",
    footer_email_label: "ইমেইল",
    footer_phone_label: "ফোন",
    footer_location_label: "অবস্থান",
    footer_whatsapp_button: "💬 WhatsApp‑এ চ্যাট করুন",
    footer_newsletter_title: "📩 নিউজলেটার",
    footer_email_placeholder: "আপনার ইমেইল লিখুন",
    footer_subscribe_button: "সাবস্ক্রাইব",
    footer_copyright: "© ২০২৬ কেমিক্যাল সিস্টেম | সর্বস্বত্ব সংরক্ষিত"
  },

  jp: {
    welcome: "いらっしゃいませ",
    company: "モニール＆サンジダ化学工場",
    marquee: "高品質な化学製品、24時間365日のサポート、迅速な配送。",
    explore: "製品を調べる",
    contact: "お問い合わせ",
    shop: "Shop Now",
    feature1: "Fast Delivery",
    feature2: "Secure Transactions",
    feature3: "24×7 Support",
    feature4: "Global Shipping",
    tata_headline: "Sleep Peacefully. Wake Refreshed.",
    tata_subhead: "Up to 8 Hours of Continuous Protection",
    tata_body: "One coil for the whole night. Dependable quality, made with care for your family.",
    tata_8hours: "8 Hours",
    tata_8desc: "All‑night coverage for worry‑free sleep",
    tata_formula: "Advanced Formula",
    tata_formuladesc: "Effective against common mosquitoes",
    tata_safe: "Safe for Daily Use",
    tata_safedesc: "When used as directed",
    tata_quality: "Trusted Quality",
    tata_qualitydesc: "Consistent performance in every pack",
    why_choose: "Why Choose TATA",
    why_body: "Quality that makes a real difference",
    card1_title: "10-Hour Protection",
    card1_desc: "Slow‑burn technology designed to provide consistent overnight coverage.",
    card2_title: "Research‑Based Formula",
    card2_desc: "Effective against dengue and malaria‑carrying mosquitoes, as well as common household mosquitoes.",
    card3_title: "Strict Quality Control",
    card3_desc: "Each batch is carefully tested. We never compromise on quality.",
    card4_title: "Safe When Used Properly",
    card4_desc: "Made with approved ingredients and clear usage instructions on every pack.",
    footer_about: "We provide high quality chemical products worldwide",
    footer_links: "🔗 Links",
    home: "Home",
    products: "Products",
    services: "Services",
    footer_contact: "📞 Contact",
    footer_email_label: "Email",
    footer_phone_label: "Phone",
    footer_location_label: "Location",
    footer_whatsapp_button: "💬 Chat on WhatsApp",
    footer_newsletter_title: "📩 Newsletter",
    footer_email_placeholder: "Enter your email",
    footer_subscribe_button: "Subscribe",
    footer_copyright: "© 2026 Chemical System | All Rights Reserved"
  },
  
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
      {/* 🌍 Google Translate – UI না, কাজ করবে */}
      <div
        id="google_translate_element"
        style={{ padding: "10px 0", textAlign: "center", display: "none" }}
      ></div>

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

      {/* BRAND FEATURE – Tata Mosquito Coil */}
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
              {langText.tata_headline}
            </h1>

            <p className="sub-head">
              {langText.tata_subhead}
            </p>

            <p className="body-text">
              {langText.tata_body}
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
                  <span className="feature-title">{langText.tata_8hours}</span>
                  <span className="feature-desc">{langText.tata_8desc}</span>
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
                  <span className="feature-title">{langText.tata_formula}</span>
                  <span className="feature-desc">{langText.tata_formuladesc}</span>
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
                  <span className="feature-title">{langText.tata_safe}</span>
                  <span className="feature-desc">{langText.tata_safedesc}</span>
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
                  <span className="feature-title">{langText.tata_quality}</span>
                  <span className="feature-desc">{langText.tata_qualitydesc}</span>
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
          <h2>{langText.why_choose}</h2>
          <p>{langText.why_body}</p>
        </div>

        <div className="tata-cards-grid">
          {/* CARD 1 – 10-Hour Protection */}
          <div className="tata-card">
            <div className="tata-card-icon clock-icon">🕐</div>
            <h3>{langText.card1_title}</h3>
            <p>{langText.card1_desc}</p>
          </div>

          {/* CARD 2 – Research-Based Formula */}
          <div className="tata-card">
            <div className="tata-card-icon flask-icon">🧪</div>
            <h3>{langText.card2_title}</h3>
            <p>{langText.card2_desc}</p>
          </div>

          {/* CARD 3 – Strict Quality Control */}
          <div className="tata-card">
            <div className="tata-card-icon quality-icon">✅</div>
            <h3>{langText.card3_title}</h3>
            <p>{langText.card3_desc}</p>
          </div>

          {/* CARD 4 – Safe When Used Properly */}
          <div className="tata-card">
            <div className="tata-card-icon safety-icon">🛡️</div>
            <h3>{langText.card4_title}</h3>
            <p>{langText.card4_desc}</p>
          </div>
        </div>
      </div>

      {/* 🔥 FOOTER */}
      <footer className="home-footer">
        <div className="footer-grid">
          <div className="footer-col">
            <h2>🏢 {langText.company}</h2>
            <p>{langText.footer_about}</p>
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
            <h3>{langText.footer_links}</h3>
            <ul>
              <li onClick={() => nav("/")}>{langText.home}</li>
              <li onClick={() => nav("/products")}>{langText.products}</li>
              <li onClick={() => nav("/services")}>{langText.services}</li>
              <li onClick={() => nav("/contact")}>{langText.contact}</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{langText.footer_contact}</h3>
            <p>{langText.footer_email_label}: info@chemical.com</p>
            <p>{langText.footer_phone_label}: +880123456789</p>
            <p>{langText.footer_location_label}: Bangladesh</p>
            <button
              className="whatsapp-btn"
              onClick={() =>
                window.open("https://wa.me/8801854242461", "_blank")
              }
            >
              {langText.footer_whatsapp_button}
            </button>
          </div>

          <div className="footer-col">
            <h3>{langText.footer_newsletter_title}</h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={langText.footer_email_placeholder}
            />
            <button onClick={subscribe}>
              {langText.footer_subscribe_button}
            </button>
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
          <p>{langText.footer_copyright}</p>
        </div>
      </footer>
    </div>
  );
}