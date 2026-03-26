import React from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ number, title, isOpen, onToggle, children }) => {
  return (
    <div
      className={`rounded-xl transition-all duration-300 border ${
        isOpen
          ? "border-brand/20 bg-white shadow-sm"
          : "border-gray-100 bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left group cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-xs transition-all ${
              isOpen ? "bg-brand text-white" : "bg-slate-100 text-slate-400"
            }`}
          >
            {number}
          </div>

          <span
            className={`font-display font-bold text-base tracking-normal transition-colors ${
              isOpen ? "text-brand" : "text-navy/70 group-hover:text-brand"
            }`}
          >
            {title}
          </span>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-500 ${isOpen ? "rotate-180 text-brand" : "text-slate-300"}`}
          strokeWidth={2}
        />
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-5 pt-0 ml-11 border-l-2 border-slate-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
