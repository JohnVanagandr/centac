import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({ isScrolled }) => (
  <Link to="/" className="flex items-center gap-3 group">
    <div
      className={`bg-brand rounded-xl flex items-center justify-center text-white font-display font-black transition-all duration-500 ${
        isScrolled ? "w-10 h-10 text-xl" : "w-12 h-12 text-2xl"
      }`}
    >
      C
    </div>
    <div>
      <h1
        className={`font-display font-black text-navy leading-none transition-all duration-500 ${
          isScrolled ? "text-xl" : "text-2xl"
        }`}
      >
        CENTAC
      </h1>
      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
        Técnico-Práctica
      </p>
    </div>
  </Link>
);
