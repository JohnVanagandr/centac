import React from "react";
import { LeadRegistration } from "@/components/sections/Public/Shared/LeadRegistration";
import { Reveal } from "@/components/utils";

const CourseEnrollment = () => {
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
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative z-10 border border-slate-100 overflow-hidden">
            {/* Línea superior de acento */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-primary-light"></div>

            <h3 className="font-display text-2xl lg:text-3xl font-black text-navy mb-2 uppercase text-center md:text-left tracking-tight">
              Inicia tu proceso
            </h3>
            <p className="text-slate-500 font-body text-sm mb-8 text-center md:text-left">
              Completa tus datos y un asesor se comunicará contigo.
            </p>

            {/* Inyectamos tu componente exacto */}
            <LeadRegistration />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CourseEnrollment;
