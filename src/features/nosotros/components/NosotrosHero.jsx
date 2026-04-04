import React from 'react';

export const NosotrosHero = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna de Texto (Ocupa 5 de 12 columnas) */}
          <div className="lg:col-span-5 z-10 space-y-8">
            <div className="inline-block">
              <span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">Somos CENTAC</span>
              <h1 className="text-5xl md:text-6xl font-black text-navy leading-tight">
                Nuestra <br/><span className="text-navy">Institución</span>
              </h1>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                En CENTAC contamos con una infraestructura moderna y herramientas especializadas, diseñadas para brindar una formación técnico-práctica de calidad.
              </p>
              <p>
                Nuestros talleres están perfectamente acondicionados y dotados con equipos, materiales y herramientas profesionales, lo que permite a los estudiantes desarrollar sus prácticas en ambientes seguros, reales y controlados, alineados con las exigencias del sector productivo.
              </p>
            </div>
            
            <div className="pl-6 border-l-4 border-brand">
              <p className="font-semibold text-navy text-xl">
                Reforzamos las prácticas reales en campo, para que los estudiantes se acerquen más a las dinámicas del mercado laboral y el emprendimiento, fortaleciendo su empleabilidad y experiencia profesional.
              </p>
            </div>
          </div>

          {/* Columna de Imágenes Asimétricas (Ocupa 7 de 12 columnas) */}
          <div className="lg:col-span-7 relative mt-12 lg:mt-0">
            {/* Círculo decorativo de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full -z-10"></div>
            
            <div className="grid grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" 
                  alt="Instalaciones" 
                  className="rounded-br-[4rem] rounded-tl-2xl shadow-2xl w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-6 -mt-20">
                <img 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                  alt="Talleres" 
                  className="rounded-tl-[4rem] rounded-br-2xl shadow-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};