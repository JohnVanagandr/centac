import React from 'react';

export const NosotrosMetodologia = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg p-10 md:p-16">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Gráfico tipográfico del 70/30 */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 flex flex-col items-center justify-center bg-gradient-to-tr from-brand to-yellow-400 rounded-full shadow-2xl text-navy">
                <span className="text-7xl font-black tracking-tighter">70/30</span>
                <span className="text-lg font-bold uppercase tracking-widest mt-2">Práctica / Teoría</span>
              </div>
            </div>

            {/* Texto literal */}
            <div className="lg:col-span-7 space-y-6 text-slate-700">
              <h3 className="text-4xl font-bold text-navy mb-6">Nuestra metodología</h3>
              <p className="text-lg">
                Nuestro enfoque educativo se fundamenta en el principio "aprender haciendo", con una estructura formativa de 70% práctica y 30% teoria.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-brand space-y-4">
                <p>
                  Las clases se desarrollan en entornos reales de aprendizaje, utilizando equipos, herramientas y materiales que permiten al estudiante adquirir experiencia directa.
                </p>
                <p>
                  La teoria complementa la práctica, asegurando la comprensión técnica y el desarrollo de competencias laborales Integrales.
                </p>
              </div>
              <p className="text-sm font-medium text-slate-500 italic">
                En las carreras técnicas laborales, los estudiantes adquieren su polo educativo institucional y realizan el pago de derechos de grado, como parte del proceso de certificación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};