import React from 'react';

export const NosotrosEstrategia = () => {
  const valores = [
    { t: 'Calidad', d: 'Buscamos la mejora continua en nuestros procesos académicos y administrativos.' },
    { t: 'Honestidad', d: 'Actuamos con transparencia en nuestros procesos educativos y administrativos.' },
    { t: 'Compromiso', d: 'Acompañamos a nuestros estudiantes en todo su proceso de formación.' },
    { t: 'Responsabilidad', d: 'Formamos personas conscientes de la seguridad, la ética y el impacto de su labor.' },
    { t: 'Equidad', d: 'Fomentamos la colaboración entre estudiantes, docentes y administrativos.' },
    { t: 'Excelencia', d: 'Promovemos el crecimiento personal, profesional y humano.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Misión y Visión con alto contraste */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-10 rounded-3xl bg-navy text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-serif">"</div>
            <h3 className="text-3xl font-bold text-brand mb-6">Misión</h3>
            <p className="text-slate-200 leading-relaxed relative z-10">
              Proporcionar a nuestras estudiantes una formación acorde con sus expectativas y necesidades laborales, mediante un enfoque práctico de enseñanza, lenguaje claro y dinámico, y grupos pequeñas que permiten una atención personalizada, promoviendo el desarrollo continue de competencias y actitudes que faciliten su desempeño proactivo, eficaz y eficiente en los campos de formación elegidos.
            </p>
          </div>
          
          <div className="p-10 rounded-3xl bg-brand text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-3xl font-bold text-navy mb-6">Visión</h3>
            <p className="text-white/90 leading-relaxed relative z-10">
              Ser lider en el departamento de Santander para el año 2020 en capacitación para el trabajo y desarrollo dumano, asi como en la evaluación y certificación de competencias laborales, destacándose por la inserción del mayor número de técnicos operativos al mercado laboral formal y el fortalecimiento de su empleabilidad.
            </p>
          </div>
        </div>

        {/* Valores con diseño de tarjetas flotantes */}
        <h3 className="text-4xl font-extrabold text-navy text-center mb-16 relative inline-block left-1/2 -translate-x-1/2">
          Valores institucionales
          <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-brand rounded-full mt-2"></span>
        </h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((v, i) => (
            <div key={i} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-navy/10 text-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                <span className="font-bold text-xl">{i + 1}</span>
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{v.t}</h4>
              <p className="text-slate-600 leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};