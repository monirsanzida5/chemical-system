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
    }
  };

  const t = text[lang];

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

        <motion.div
          className="timeline-item"
          whileHover={{ scale: 1.05 }}
        >
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
            <img src="https://via.placeholder.com/150" />
            <h3>CEO</h3>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="team-card">
            <img src="https://via.placeholder.com/150" />
            <h3>Engineer</h3>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="team-card">
            <img src="https://via.placeholder.com/150" />
            <h3>Marketing</h3>
          </motion.div>

        </div>

      </div>

    </div>
  );
}