import React from 'react';

export const NosotrosHero = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden text-slate-700 z-0">
      {/* Fondo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 origin-top-right -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Bloque Superior: Texto + Collage de Imágenes Principal */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2 space-y-6 text-lg leading-relaxed text-justify md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 relative inline-block">
              Nuestra institución
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand rounded-full"></span>
            </h2>
            <p>
              En CENTAC contamos con una infraestructura moderna y herramientas especializadas, diseñadas para brindar una formación técnico-práctica de calidad.
            </p>
            <p>
              Nuestros talleres están perfectamente acondicionados y dotados con equipos, materiales y herramientas profesionales, lo que permite a los estudiantes desarrollar sus prácticas en ambientes seguros, reales y controlados, alineados con las exigencias del sector productivo.
            </p>
            <p className="font-medium text-brand text-xl border-l-4 border-brand pl-4 mt-6">
              Reforzamos las prácticas reales en campo, para que los estudiantes se acerquen más a las dinámicas del mercado laboral y el emprendimiento, fortaleciendo su empleabilidad y experiencia profesional.
            </p>
          </div>
          
          {/* Collage Fotográfico de la Institución */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {/* 💡 Reemplazar con foto de la fachada o recepción */}
                <img 
                  src="/assets/images/infraestructura-1.jpg" 
                  alt="Instalaciones CENTAC" 
                  className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"; }}
                />
              </div>
              <div className="space-y-4 mt-8">
                {/* 💡 Reemplazar con foto de un taller equipado */}
                <img 
                  src="/assets/images/taller-1.jpg" 
                  alt="Talleres CENTAC" 
                  className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bloque Inferior: Tarjetas Fotográficas */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 group">
            <div className="h-48 bg-slate-200 overflow-hidden relative">
              <img 
                src="/assets/images/aulas.jpg" 
                alt="Aulas modernas" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-white font-bold text-xl">Instalaciones</h3>
            </div>
            <div className="p-6 border-t-4 border-brand">
              <p className="text-sm leading-relaxed text-slate-600">
                Contamos con instalaciones modernas y adecuadas para el desarrollo de la formación, las cuales garantizan un aprendizaje de alta calidad y brindan un ambiente seguro y confiable para nuestros estudiantes.
              </p>
            </div>
          </div>
          
          {/* Tarjeta 2 */}
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 group">
            <div className="h-48 bg-slate-200 overflow-hidden relative">
              <img 
                src="/assets/images/herramientas.jpg" 
                alt="Herramientas y equipos" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-white font-bold text-xl">Equipamiento</h3>
            </div>
            <div className="p-6 border-t-4 border-navy">
              <p className="text-sm leading-relaxed text-slate-600">
                Talleres plenamente acondicionados y equipados con las herramientas, equipos y materiales necesarios para cada programa de formación. Nuestros talleres están diseñados para recrear escenarios reales de trabajo.
              </p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 group">
            <div className="h-48 bg-slate-200 overflow-hidden relative">
              <img 
                src="/assets/images/practicas.jpg" 
                alt="Estudiantes en práctica" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <h3 className="absolute bottom-4 left-6 text-white font-bold text-xl">Práctica en campo</h3>
            </div>
            <div className="p-6 border-t-4 border-brand">
              <p className="text-sm leading-relaxed text-slate-600">
                Fortaleciendo sus competencias, estimulando la confianza en su desempeño y preparando de manera efectiva a los estudiantes para enfrentar los retos del mundo profesional.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};