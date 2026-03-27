import React from "react";
import {Reveal} from "@/components/utils";
import {LeadRegistration} from "@/components/sections/Public/Shared/LeadRegistration";



const Contacto = () => {
  // Inicializamos nuestro Custom Hook

  return (
    <section id="contacto" className="py-20 bg-navy relative overflow-hidden">
      {/* Fondos */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e29b83?w=1600&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy to-navy/80"></div>

      <Reveal className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* COLUMNA IZQUIERDA (Se mantiene exactamente igual) */}
          <div className="text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-brand/20 border border-brand/40 text-brand-light text-xs font-bold uppercase tracking-widest mb-6">
              Atención Personalizada
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-black leading-tight mb-6">
              Déjanos tus datos y te{" "}
              <span className="bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
                asesoraremos
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-md">
              Nuestro equipo de admisiones está listo para ayudarte a elegir el
              mejor programa técnico-práctico para tu futuro.
            </p>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="bg-white rounded-3xl shadow-brand-lg p-8 md:p-10">
            <h3 className="font-display text-2xl font-black text-navy mb-6 uppercase">
              Formulario de Inscripción
            </h3>

            {/* Pasamos nuestra función de acción al handleSubmit del Hook */}
            <LeadRegistration />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contacto;
