import React from "react";
import { LeadRegistration } from "@/features/leads";
import { Reveal } from "@/components/utils";

const CourseEnrollment = ({ programaSlug }) => {
  return (
    <section
      id="inscripcion"
      // 🌌 NAVY: Usamos un padding amplio para dar respiro al cierre de la página
      className="py-24 bg-navy relative overflow-hidden"
    >
      {/* Fondos dinámicos para romper el color plano */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper via-navy to-primary/10"></div>

      <Reveal className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Lado Izquierdo: Textos Promocionales */}
        <div className="text-center lg:text-left">
          {/* 🔵 PRIMARY: Badge corporativo para anclar la vista */}
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-slate-300 font-display font-black text-[10px] uppercase tracking-[0.3em] mb-8 shadow-sm">
            Proceso de Admisión
          </span>

          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight">
            <span className="text-white">Invierte en tu futuro,</span>
            <br />
            {/* 🟠 BRAND: Énfasis en la facilidad de pago */}
            <span className="text-brand">paga a tu ritmo</span>
          </h2>

          {/* 🌌 SLATE: Contraste de lectura suave */}
          <p className="text-slate-300 font-body text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
            Contamos con aliados bancarios para créditos educativos.
            Financiación fácil y accesible para que nada detenga tu formación.
          </p>
        </div>

        {/* Lado Derecho: Tarjeta Blanca con TU Formulario */}
        <div className="relative group">
          {/* ✨ Efecto Premium: Resplandor (Glow) detrás de la tarjeta */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-brand/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>

          {/* 🌌 SLATE & PRIMARY: Tarjeta en blanco puro con detalles corporativos */}
            {/* Inyectamos tu componente exacto */}
            <LeadRegistration programaPreseleccionado={programaSlug} />
        </div>
      </Reveal>
    </section>
  );
};

export default CourseEnrollment;
