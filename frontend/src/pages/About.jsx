import React from "react";
import { motion } from "framer-motion";

export default function About({ lang = "en" }) {

  const text = {
    en: {
      title: "About Us",
      desc: "We are a modern global chemical company delivering innovation and quality worldwide.",
      team: "Our Team"
    }
  };

  const t = text[lang];

  return (
    <div className="about">

      <motion.h1 initial={{opacity:0}} animate={{opacity:1}}>
        {t.title}
      </motion.h1>

      <motion.p initial={{y:20}} animate={{y:0}}>
        {t.desc}
      </motion.p>

      <h2>{t.team}</h2>

      <div className="team">

        <motion.div whileHover={{scale:1.1}}>
          <img src="https://via.placeholder.com/150" alt="CEO" />
          <h3>CEO</h3>
        </motion.div>

        <motion.div whileHover={{scale:1.1}}>
          <img src="https://via.placeholder.com/150" alt="Engineer" />
          <h3>Engineer</h3>
        </motion.div>

        <motion.div whileHover={{scale:1.1}}>
          <img src="https://via.placeholder.com/150" alt="Marketing" />
          <h3>Marketing</h3>
        </motion.div>

      </div>

    </div>
  );
}