import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ lang }) {
  const [email, setEmail] = useState("");

  const subscribe = () => {
    if (!email) return alert("Enter email");

    localStorage.setItem("newsletter", email);
    alert("Subscribed ✅");
    setEmail("");
  };

  const [index, setIndex] = useState(0);
  const nav = useNavigate();

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
    },
    jp: {
      welcome: "ようこそ",
      company: "モニール＆サンジダ化学工業",
      marquee: "最高品質の化学製品 | 高速配送 | 大割引実施中",
      explore: "製品を見る",
      contact: "お問い合わせ",
      shop: "購入する",
      feature1: "高速システム",
      feature2: "安全なログイン",
      feature3: "製品アップロード",
      feature4: "多言語"
    },
    cn: {
      welcome: "欢迎",
      company: "Monir 和 Sanzida 化工厂",
      marquee: "高质量化学品 | 快速交付 | 大折扣进行中",
      explore: "查看产品",
      contact: "联系我们",
      shop: "立即购买",
      feature1: "快速系统",
      feature2: "安全登录",
      feature3: "产品上传",
      feature4: "多语言"
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

  // ✅ FIXED WARNING
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div>

      <div className="top-banner">
        <div className="banner-box">

          <h2 className="typing">{t[lang].welcome}</h2>

          <p className="company-name">{t[lang].company}</p>

          <div className="marquee">
            <span>🔥 {t[lang].marquee}</span>
          </div>

          <div className="banner-buttons">
            <button onClick={() => nav("/products")}>
              {t[lang].explore}
            </button>

            <button onClick={() => nav("/contact")}>
              {t[lang].contact}
            </button>
          </div>

        </div>
      </div>

      <div className="slider">
        <div className="slider-overlay"></div>

        <img src={banners[index].img} className="slider-img" alt="banner" />

        <div className="slider-content">
          <h1>{banners[index].title}</h1>
          <p>{banners[index].desc}</p>

          <button onClick={() => nav("/products")}>
            {t[lang].shop}
          </button>
        </div>
      </div>

      <div className="feature-container">
        <div>⚡ {t[lang].feature1}</div>
        <div>🔐 {t[lang].feature2}</div>
        <div>📦 {t[lang].feature3}</div>
        <div>🌐 {t[lang].feature4}</div>
      </div>

      <footer className="home-footer">

        <div className="footer-grid">

          <div>
            <h2>{t[lang].company}</h2>
          </div>

          <div>
            <h3>Links</h3>
            <ul>
              <li onClick={() => nav("/")}>Home</li>
              <li onClick={() => nav("/products")}>Products</li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
          </div>

          <div>
            <h3>Newsletter</h3>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={subscribe}>Subscribe</button>

            <p>🕒 {new Date().toLocaleTimeString()}</p>
          </div>

        </div>

      </footer>

    </div>
  );
}