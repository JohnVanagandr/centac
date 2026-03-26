import React from "react";
import LeadRegistration from "../../../LeadRegistration";
import Reveal from "../../../common/Reveal";

const CourseEnrollment = () => {
  return (
    <section
      id="inscripcion"
      className="py-20 bg-navy relative overflow-hidden"
    >
      <Reveal className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Lado Izquierdo: Textos Promocionales Fieles al PDF */}
        <div className="text-center lg:text-left">
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            <span className="text-white">Invierte en tu futuro,</span>
            <br />
            <span className="text-brand">paga a tu ritmo</span>
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
            Contamos con aliados bancarios para créditos educativos.
            Financiación fácil solo con tu cédula.
          </p>
        </div>

        {/* Lado Derecho: Tarjeta Blanca con TU Formulario */}
        <div className="relative">
          {/* Decoración sutil de fondo para darle profundidad */}
          <div className="absolute inset-0 rounded-2xl opacity-20 hidden md:block"></div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl relative z-10 border border-gray-50">
            <h3 className="font-display text-2xl font-black text-navy mb-6 uppercase text-center md:text-left">
              Formulario de Inscripción
            </h3>

            {/* Inyectamos tu componente exacto */}
            <LeadRegistration />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CourseEnrollment;
