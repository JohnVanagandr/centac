import React from 'react';

export const NosotrosHistoria = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Marca de agua de año gigante */}
      <div className="absolute top-10 left-0 w-full text-center overflow-hidden pointer-events-none select-none -z-0">
        <span className="text-[15rem] font-black text-slate-200/50 leading-none">2012</span>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-navy">Historia</h2>
          <div className="w-24 h-1 bg-brand mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* El Retrato del Fundador limpio, sin cajas */}
          <div className="md:col-span-5 relative">
            <div className="sticky top-24">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" 
                alt="Andrés Guillermo Rodriguez" 
                className="w-full aspect-[4/5] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="mt-6 border-t border-slate-300 pt-4">
                <h3 className="text-2xl font-bold text-navy">Andrés Guillermo Rodriguez</h3>
                <p className="text-brand font-medium tracking-wide uppercase text-sm">Fundador (Q.E.P.D.)</p>
              </div>
            </div>
          </div>

          {/* El texto fluyendo como un libro */}
          <div className="md:col-span-7 space-y-8 text-lg text-slate-700 leading-loose">
            <p className="text-2xl font-medium text-navy leading-snug">
              Centac nació como un proyecto personal de nuestro fundador, quien, con el apoyo de nuestras actuales directoras Adriana Marcela Ruíz Villamizar y Daniela Alejandra Bonilla Ruiz, soñó con crear un espacio de formación enfocado en el desarrollo técnico y humano.
            </p>
            <p>
              Un lugar donde el conocimiento se compartiera a través de la metodologia "aprender haciendo", y que, al mismo tiempo, promoviera la independencia y el crecimiento financiero de los estudiantes.
            </p>
            <div className="p-8 bg-white border-l-2 border-brand shadow-sm">
              <p className="font-semibold text-brand">
                Ese sueño se hizo realidad el 3 de marzo de 2012 en Bucaramanga, con la creación de La Corporación Educativa Nacional de Tecnologia, Arte y Conocimiento (CENTAC).
              </p>
            </div>
            <p>
              Durante estos 14 años de trayectoria, nuestra corporación ha fomentado el emprendimiento y el desarrollo de ideas de negocio, siendo testigo del rápido ingreso de nuestros estudiantes al mercado y de la generación de ingresos a partir de actividades que les apasionan y potencian su talento.
            </p>
            <p>
              Desde nuestros inicios, hemos trabajado con un enfoque práctico que prepara a jóvenes y adultos a enfrentar los retos del entorno productivo y respondiendo a las necesidades reales del mercado laboral.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};