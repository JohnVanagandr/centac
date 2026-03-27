import React from "react";
import { Reveal } from "@/components/utils";
import { LeadRegistration } from "@/components/sections/Public/Shared/LeadRegistration";

const Contacto = () => {
  return (
    <section id="contacto" className="py-24 bg-navy relative overflow-hidden">
      {/* 🖼️ FONDOS ESTRATÉGICOS: 
          Usamos el overlay industrial pero teñido con Navy-Deeper para no distraer. */}
      <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e29b83?w=1600&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper via-navy/90 to-primary/20"></div>

      <Reveal className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* COLUMNA IZQUIERDA: Propuesta de Valor */}
          <div className="text-white">
            {/* 🟠 BRAND: Badge de categoría con nuestros colores */}
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand/10 border border-brand/30 text-brand font-display font-black text-[10px] uppercase tracking-[0.2em] mb-8 shadow-lg shadow-brand/10">
              Atención Personalizada
            </span>

            <h2 className="font-display text-4xl lg:text-6xl font-black leading-[1.1] mb-8 tracking-tight">
              Déjanos tus datos y te{" "}
              {/* 🟠/🟡 GRADIENT: De Naranja a Oro corporativo */}
              <span className="bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent drop-shadow-sm">
                asesoraremos
              </span>
            </h2>

            <p className="text-lg text-slate-300 mb-10 max-w-md font-body leading-relaxed">
              Nuestro equipo de admisiones está listo para ayudarte a elegir el
              mejor programa técnico-práctico para impulsar tu éxito laboral.
            </p>

            {/* Detalle visual: Línea de acento */}
            <div className="w-16 h-1 bg-brand rounded-full opacity-60"></div>
          </div>

          {/* COLUMNA DERECHA: El Formulario Maestro */}
          <div className="bg-white rounded-[2rem] shadow-2xl shadow-navy/40 p-8 md:p-12 relative overflow-hidden group">
            {/* 🔵 PRIMARY: Un toque de azul en el borde superior del card */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-primary-light"></div>

            <h3 className="font-display text-2xl lg:text-3xl font-black text-navy mb-2 uppercase tracking-tight">
              Inicia tu proceso
            </h3>
            <p className="text-slate-500 text-sm mb-8 font-body">
              Completa el formulario y recibe toda la información.
            </p>

            {/* Aquí es donde vive la lógica de tus Inputs, Selects y validaciones */}
            <LeadRegistration />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contacto;
