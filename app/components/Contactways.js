import React from "react";
import contact from "../data/contact.json";
import Image from "next/image";

const Contactways = () => {
  return (
    <div className="mainBox bg-slate-700 mt-5 p-5 shadow-2xl">
      {contact.map((card) => {
        return (
          <div key={card.id} className="flex items-center mb-4">
            <span>
              <Image
                src={card.icon}
                width={32}
                height={32}
                loading="lazy"
                alt={card.name}
              />
            </span>
            <a
              className="block ms-2 text-slate-400 hover:text-slate-100 transition-colors duration-300"
              href={card.way}
            >
              {card.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Contactways;
