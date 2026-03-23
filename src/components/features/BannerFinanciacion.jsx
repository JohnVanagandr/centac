import React from "react";
import Reveal from "../common/Reveal";

const BannerFinanciacion = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      {/* Envolvemos el contenido central en Reveal para mantener la animación de entrada */}
      <Reveal className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="font-display text-3xl font-black text-brand uppercase mb-4">
          ¿Necesitas ayuda? Chatea con una asesora
        </h3>

        <p className="text-gray-800 text-2xl font-bold mb-4">
          Invierte en tu futuro, paga a tu ritmo.
        </p>

        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Contamos con aliados bancarios para créditos educativos. Financiación
          fácil solo con tu cédula.
        </p>

        {/* Contenedor de Aliados Financieros */}
        <div className="flex flex-wrap justify-center gap-16 items-center">
          {/* Aliado 1: Sistecrédito */}
          <div className="text-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            <div className="font-black text-3xl text-navy tracking-tighter">
              sistecrédito
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
              lo hacemos posible
            </div>
          </div>

          {/* Aliado 2: Addi */}
          <div className="font-black text-5xl text-blue-600 tracking-tight grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
            Addi
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default BannerFinanciacion;
