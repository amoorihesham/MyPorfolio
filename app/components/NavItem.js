import Link from "next/link";
import React from "react";

const NavItem = ({ Icon, title, route }) => {
  return (
    <li className="py-1 px-2 hover:bg-slate-300/10 rounded-3xl transition-all group">
      <Link
        href={route}
        className="flex items-center text-decoration-none text-slate-100"
      >
        <span className=" inline-block me-1 group-hover:animate-pulse  group-hover:text-white transition-colors">
          {Icon}
        </span>
        <span className=" transition-colors group-hover:text-white">
          {title}
        </span>
      </Link>
    </li>
  );
};

export default NavItem;
