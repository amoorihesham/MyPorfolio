"use client";
import React from "react";
import skills from "../../data/skills.json";
import { motion } from "framer-motion";

const SkillsCards = () => {
  const animation = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <div className="skillsHolder grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mt-5">
      {skills.map((card, index) => {
        return (
          <motion.div
            className="card bg-slate-600 p-3 group"
            key={card.id}
            variants={animation}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            custom={index}
          >
            <h3 className="text-slate-100 font-semibold">{card.name}</h3>
            <p className="text-slate-400 mt-2 group-hover:text-slate-200 transition-colors duration-300">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillsCards;
