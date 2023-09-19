"use client";
import React from "react";
import "./featurescards.css";
import features from "../../data/features.json";
import { motion } from "framer-motion";
const FeaturesCards = () => {
  const animation = {
    initial: {
      opacity: 0,
      y: 100,
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
    <div className="featuresHolder grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 mt-5 ">
      {features.map((card, index) => {
        return (
          <motion.div
            className={`${card.title} text-white bg-slate-600 p-4 transition-colors duration-500 group groupAnimation shadow-lg`}
            key={card.id}
            variants={animation}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            custom={index}
          >
            <h3 className="text-slate-100 font-bold text-xl">{card.title}</h3>
            <p className="mt-1 text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeaturesCards;
