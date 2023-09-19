"use client";
import Image from "next/image";
import "./globals.css";
import photo from "../public/personal-photo.jpg";
import NavItem from "./components/NavItem";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CallIcon from "@mui/icons-material/Call";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);
  const pl = useRef(null);
  useEffect(() => {
    document.body.style.overflow = "auto";
    const typed = new Typed(el.current, {
      strings: ["Amr Hesham"],
      typeSpeed: 100,
      backDelay: 150,
      backSpeed: 70,
      showCursor: false,
    });
    const test = new Typed(pl.current, {
      strings: [
        "Born in 1999,in Al Gharbia, EGYPT",
        "I AM A FRONT-END DEVELOPER My main focus these days is building products and leading projects for our clients at Upstatement.I like to craft solid and scalable frontend products with great user experiences. ",
        "When I’m not at the computer, I’m usually play football or video games, ",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      showCursor: false,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      test.destroy();
    };
  }, []);

  return (
    <motion.div
      className="homePage flex items-center justify-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <div className="boxSelf">
          <Image
            src={photo}
            className="m-auto rounded-full mb-2 shadow-2xl bg-teal-400"
            alt="Test"
            width={250}
            height={250}
          />
          <div className="text text-center">
            <h1
              className=" text-slate-400 text-3xl font-bold hover:text-white transition-colors duration-300 w-fit mx-auto mb-3"
              ref={el}
            ></h1>
            <p
              className=" text-gray-500 m-auto text-xl hover:text-gray-100 transition-colors duration-300"
              ref={pl}
            ></p>
          </div>
        </div>
        <nav className="smNav bg-slate-700 rounded-3xl px-4 py-2 mx-auto mt-5">
          <ul className="p-0 m-0 flex items-center justify-between mx-auto">
            <NavItem Icon={<HomeIcon />} title="Home" route="/" />
            <NavItem
              Icon={<AccountTreeIcon />}
              title="Works"
              route="/pages/projects"
            />
            <NavItem
              Icon={<AutoFixHighIcon />}
              title="Features"
              route="/pages/features"
            />
            <NavItem
              Icon={<AutoFixHighIcon />}
              title="Skills"
              route="/pages/skills"
            />
            <NavItem
              Icon={<CallIcon />}
              title="Contact"
              route="/pages/contact"
            />
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
