import React from "react";
import { Link } from "react-router-dom"; // Importamos el enrutador
import IconMapper from "./IconMapper";


const CardOferta = ({ programa }) => {
  const { title, desc, iconName, slug, isTop, img, duration } = programa;  
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
      <div className="h-56 overflow-hidden relative">
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {isTop && (
            <span className="bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Top
            </span>
          )}
          <span className="bg-navy/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
            70% Práctica
          </span>
        </div>
        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/10 transition-colors duration-500 z-10"></div>
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-brand text-2xl absolute -top-12 right-6 z-30 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
          {IconMapper({ iconName })}
        </div>

        <h4 className="font-display text-2xl font-black text-navy mb-3 uppercase group-hover:text-brand transition-colors">
          {title}
        </h4>

        <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
          {desc.length > 100
            ? `${desc.substring(0, 120)}...`
            : desc}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
            <svg
              className="w-4 h-4 text-navy"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {duration}
          </div>

          <Link
            to={`/oferta/${slug}`}
            className="inline-flex items-center text-brand font-black hover:text-navy transition-colors group/btn"
          >
            Ver Detalles
            <svg
              className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardOferta;
