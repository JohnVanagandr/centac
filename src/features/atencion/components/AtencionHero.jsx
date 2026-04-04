import React from 'react';

export const AtencionHero = () => {
  return (
    <section className="relative pt-16 pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Bloque de Texto Oficial */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-brand font-bold tracking-widest uppercase text-sm mb-3">
                Soporte y gestión
              </p>
              <h2 className="text-5xl md:text-6xl font-black text-navy leading-tight tracking-tighter">
                Atención al <br/> estudiante
              </h2>
            </div>
            
            <div className="text-xl text-slate-600 leading-relaxed text-justify space-y-6">
              <p>
                Nuestro objetivo es asegurar una comunicación oportuna y una atención respetuosa, clara y eficiente.
              </p>
              <p>
                Brindamos acompañamiento permanente a los estudiantes para resolver inquietudes relacionadas con su proceso académico, normatividad institucional, horarios, certificaciones y orientación general.
              </p>
            </div>
          </div>

          {/* Bloque Visual (Asimétrico y Limpio) */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            {/* Elemento decorativo de fondo */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-50 rounded-full -z-10"></div>
            
            <div className="relative rounded-br-[4rem] rounded-tl-3xl overflow-hidden shadow-2xl">
              {/* 💡 Imagen de soporte/atención al estudiante */}
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" 
                alt="Atención al estudiante CENTAC" 
                className="w-full h-[400px] object-cover"
              />
              {/* Overlay sutil para elegancia */}
              <div className="absolute inset-0 bg-navy/10 mix-blend-multiply"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};