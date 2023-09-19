"use client";
import Image from "next/image";
import "./styels.css";
import projects from "../../data/projects.json";
import { motion } from "framer-motion";

const ProjectsCards = () => {
  const animation = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.08 * index,
      },
    }),
  };
  return (
    <div className="cardsHolder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl  gap-4 mt-8">
      {projects.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="card p-3 bg-slate-600 rounded group  "
            variants={animation}
            initial="initial"
            whileInView="animate"
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            custom={index}
          >
            <Image
              src={card.image}
              width={535}
              height={150}
              loading="lazy"
              alt={card.description}
            />
            <div className="cardBody mt-2">
              <h3 className="cardTitle text-slate-100 font-bold text-lg">
                {card.title}
              </h3>
              <p className="cardDescription line-clamp-4 text-slate-400 font-thin text-base group-hover:text-slate-200 transition-colors duration-300">
                {card.description}
              </p>
              <div className="tools mt-2">
                {card.tools.map((tool, idx) => {
                  return (
                    <span
                      className="inline-block me-1 bg-slate-800 rounded p-1 text-sm mb-1 text-white"
                      key={idx}
                    >
                      {tool}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectsCards;
