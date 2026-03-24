import React from "react";
import Reveal from "../common/Reveal";
import IconMapper from "../common/IconMapper";

const CourseLearnings = ({ learnings }) => {
  if (!learnings || learnings.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <Reveal className="max-w-7xl mx-auto px-4">
        {/* Título de la sección (Fiel a tu imagen) */}
        <div className="mb-14 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-black text-navy">
            ¿Qué <span className="text-brand">vas a aprender?</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand mt-6 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Grilla de 4 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {learnings.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:border-brand/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Ícono dentro de una burbuja de color */}
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300 shadow-md">
                <IconMapper
                  iconName={item.icon}
                  className="w-8 h-8 text-white"
                />
              </div>

              {/* Título */}
              <h4 className="font-display font-black text-xl text-navy uppercase leading-tight mb-4">
                {item.title}
              </h4>

              {/* Separador sutil */}
              <div className="w-10 h-0.5 bg-gray-200 mb-4 group-hover:bg-brand/50 transition-colors"></div>

              {/* Texto descriptivo */}
              <p className="text-gray-500 text-sm leading-relaxed flex-grow font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default CourseLearnings;
