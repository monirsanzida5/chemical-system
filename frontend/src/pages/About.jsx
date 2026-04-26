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

  return (
    <div className="about-premium">

      <h1>{t.title}</h1>
      <p>{t.desc}</p>

      {/* TEAM */}
      <div className="team-premium">

        <h2>{t.team}</h2>

        <div className="team-grid-premium">

          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="CEO" />
            <h3>CEO</h3>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Engineer" />
            <h3>Engineer</h3>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Marketing" />
            <h3>Marketing</h3>
          </div>

        </div>

      </div>

    </div>
  );
}