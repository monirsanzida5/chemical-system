import React from "react";
import "../css/about.css";

export default function About({ lang = "en" }) {
  const text = {
    en: {
      title: "About Us",
      desc: "We are a modern global chemical company delivering innovation and quality worldwide.",
      mission: "Our Mission",
      missionText: "Deliver safe, innovative chemical solutions globally.",
      vision: "Our Vision",
      visionText: "Become a world-leading chemical industry brand.",
      team: "Our Team",
      history: "Our Journey",
      intro: "Company Introduction",
      company: "Monir & Sanzida Chemicals Works"
    },

    bn: {
      title: "আমাদের সম্পর্কে",
      desc: "আমরা একটি আধুনিক গ্লোবাল কেমিক্যাল কোম্পানি, বিশ্বব্যাপী মানসম্মত সেবা প্রদান করি।",
      mission: "আমাদের লক্ষ্য",
      missionText: "নিরাপদ ও উদ্ভাবনী কেমিক্যাল সেবা বিশ্বব্যাপী প্রদান করা।",
      vision: "আমাদের ভিশন",
      visionText: "বিশ্বমানের কেমিক্যাল কোম্পানি হিসেবে প্রতিষ্ঠিত হওয়া।",
      team: "আমাদের টিম",
      history: "আমাদের যাত্রা",
      intro: "কোম্পানি পরিচিতি",
      company: "মনির ও সানজিদা কেমিক্যালস ওয়ার্কস"
    },

    jp: {
      title: "私たちについて",
      desc: "私たちは革新と品質を世界中に提供する現代的な化学会社です。",
      mission: "私たちの使命",
      missionText: "安全で革新的な化学ソリューションを提供する。",
      vision: "私たちのビジョン",
      visionText: "世界をリードする化学企業になる。",
      team: "チーム",
      history: "歴史",
      intro: "会社紹介",
      company: "モニール＆サンジダ化学工業"
    },

    cn: {
      title: "关于我们",
      desc: "我们是一家现代化的全球化工公司，提供创新和高质量服务。",
      mission: "我们的使命",
      missionText: "提供安全和创新的化学解决方案。",
      vision: "我们的愿景",
      visionText: "成为世界领先的化工企业。",
      team: "我们的团队",
      history: "发展历程",
      intro: "公司介绍",
      company: "Monir 和 Sanzida 化工厂"
    }
  };

  const t = text[lang] || text.en;

  return (
    <div className="about-page">

      {/* HERO */}
      <div className="about-hero-premium">
        <h1>{t.title}</h1>
        <h3>{t.company}</h3>
        <p>{t.desc}</p>
      </div>

      {/* MISSION / VISION */}
      <div className="grid-2">
        <div className="glass-card-premium">
          <h2 className="text-center">🎯 {t.mission}</h2>
          <p className="text-center">{t.missionText}</p>
        </div>

        <div className="glass-card-premium">
          <h2 className="text-center">🚀 {t.vision}</h2>
          <p className="text-center">{t.visionText}</p>
        </div>
      </div>

      {/* JOURNEY (TIMELINE) */}
      <div className="timeline-premium">
        <h2 className="text-center">📜 {t.history}</h2>

        <div className="timeline-row">
          <div className="timeline-item hover-card">
            <span>2018</span>
            <p>{t["history"]}: Company Founded</p>
          </div>

          <div className="timeline-item hover-card">
            <span>2020</span>
            <p>{t["history"]}: Global Expansion</p>
          </div>

          <div className="timeline-item hover-card">
            <span>2023</span>
            <p>{t["history"]}: 100+ International Clients</p>
          </div>
        </div>
      </div>

      {/* COMPANY INTRO (VIDEOS) */}
      <div className="video-premium">
        <h2 className="text-center">🎥 {t.intro}</h2>

        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/m5MnxgU8pnM"
            title={t["intro"] + " - 1"}
            allowFullScreen
          />

          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title={t["intro"] + " - 2"}
            allowFullScreen
          />

          <iframe
            src="https://www.youtube.com/embed/iRNl0iWE490"
            title={t["intro"] + " - 3"}
            allowFullScreen
          />
        </div>
      </div>

      {/* TEAM */}
      <div className="team-premium">
        <h2 className="team-title">{t.team}</h2>

        <div className="team-grid-premium">
          <div className="team-card hover-card">
            <img
              src="/images/ceo.jpg"
              alt="CEO"
              loading="lazy"
            />
            <h3>CEO</h3>
          </div>

          <div className="team-card hover-card">
            <img
              src="/images/engineer.jpg"
              alt="Engineer"
              loading="lazy"
            />
            <h3>Engineer</h3>
          </div>

          <div className="team-card hover-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Marketing"
              loading="lazy"
            />
            <h3>Marketing</h3>
          </div>
        </div>
      </div>

      {/* ADDED: COMPANY STATS (GLOBAL) */}
      <div className="stats-premium">
        <div className="stat-card">
          <h2 className="text-center">🏭</h2>
          <p className="text-center">5K+</p>
          <p className="text-center">Products</p>
        </div>

        <div className="stat-card">
          <h2 className="text-center">🌍</h2>
          <p className="text-center">60+</p>
          <p className="text-center">Countries</p>
        </div>

        <div className="stat-card">
          <h2 className="text-center">⭐</h2>
          <p className="text-center">4.9</p>
          <p className="text-center">Rating</p>
        </div>

        <div className="stat-card">
          <h2 className="text-center">🛡️</h2>
          <p className="text-center">100%</p>
          <p className="text-center">Safety First</p>
        </div>
      </div>

    </div>
  );
}