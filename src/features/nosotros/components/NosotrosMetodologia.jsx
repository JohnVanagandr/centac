import React from 'react';

export const NosotrosMetodologia = () => {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* El Número Gigante */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="text-center">
              <div className="text-[8rem] md:text-[12rem] font-black leading-none text-navy tracking-tighter">
                70<span className="text-brand">/</span>30
              </div>
              <p className="text-2xl font-bold uppercase tracking-[0.3em] text-slate-400 mt-2">
                Práctica <span className="text-brand">/</span> Teoría
              </p>
            </div>
          </div>

          {/* La explicación en lista limpia, sin viñetas */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-4">Nuestra Metodología</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Nuestro enfoque educativo se fundamenta en el principio "aprender haciendo", con una estructura formativa de 70% práctica y 30% teoria.
              </p>
            </div>

            <div className="space-y-6 text-slate-600">
              <div className="relative pl-8">
                <span className="absolute left-0 top-2 w-3 h-3 bg-brand rounded-full"></span>
                <p>Las clases se desarrollan en entornos reales de aprendizaje, utilizando equipos, herramientas y materiales que permiten al estudiante adquirir experiencia directa.</p>
              </div>
              <div className="relative pl-8">
                <span className="absolute left-0 top-2 w-3 h-3 bg-navy rounded-full"></span>
                <p>La teoria complementa la práctica, asegurando la comprensión técnica y el desarrollo de competencias laborales Integrales.</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-sm font-medium text-slate-500 italic">
                * En las carreras técnicas laborales, los estudiantes adquieren su polo educativo institucional y realizan el pago de derechos de grado, como parte del proceso de certificación.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};