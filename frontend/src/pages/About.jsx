import React from "react";
import { motion } from "framer-motion";

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
      stats: "Our Achievements",
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
      stats: "আমাদের অর্জন",
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
      stats: "実績",
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
      stats: "我们的成就",
      intro: "公司介绍",
      company: "Monir 和 Sanzida 化工厂"
    }
  };

  // 🔥 SAFE FALLBACK
  const t = text[lang] || text.en;

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="about-premium">

      {/* 🌈 HERO */}
      <motion.div
        className="about-hero-premium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay-premium">

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t.title}
          </motion.h1>

          <motion.h3
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t.company}
          </motion.h3>

          <p>{t.desc}</p>

        </div>
      </motion.div>

      {/* 🧊 MISSION / VISION */}
      <div className="grid-2">

        <motion.div
          className="glass-card-premium"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>🎯 {t.mission}</h2>
          <p>{t.missionText}</p>
        </motion.div>

        <motion.div
          className="glass-card-premium"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>🚀 {t.vision}</h2>
          <p>{t.visionText}</p>
        </motion.div>

      </div>

      {/* 📊 STATS */}
      <motion.div
        className="stats-premium"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="stat-card">🔥 <h2>50+</h2><p>Products</p></div>
        <div className="stat-card">🌍 <h2>100+</h2><p>Clients</p></div>
        <div className="stat-card">🏆 <h2>10+</h2><p>Countries</p></div>
      </motion.div>

      {/* 📜 TIMELINE */}
      <div className="timeline-premium">

        <h2>📜 {t.history}</h2>

        <motion.div className="timeline-item" whileHover={{ scale: 1.05 }}>
          <span>2018</span>
          <p>Company Founded</p>
        </motion.div>

        <motion.div className="timeline-item" whileHover={{ scale: 1.05 }}>
          <span>2020</span>
          <p>Global Expansion</p>
        </motion.div>

        <motion.div className="timeline-item" whileHover={{ scale: 1.05 }}>
          <span>2023</span>
          <p>100+ International Clients</p>
        </motion.div>

      </div>

      {/* 🎥 VIDEO */}
      <motion.div
        className="video-premium"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2>🎥 {t.intro}</h2>

        <iframe
          src="https://www.youtube.com/embed/m5MnxgU8pnM"
          title="company video"
          allowFullScreen
        />
      </motion.div>

      {/* 👥 TEAM */}
      <div className="team-premium">

        <h2>👥 {t.team}</h2>

        <div className="team-grid-premium">

          <motion.div whileHover={{ scale: 1.1 }} className="team-card">
            <img src="https://via.placeholder.com/150" alt="" />
            <h3>CEO</h3>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="team-card">
            <img src="https://via.placeholder.com/150" alt="" />
            <h3>Engineer</h3>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="team-card">
            <img src="https://via.placeholder.com/150" alt="" />
            <h3>Marketing</h3>
          </motion.div>

        </div>

      </div>

    </div>
  );
}