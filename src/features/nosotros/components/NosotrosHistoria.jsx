import React from 'react';

export const NosotrosHistoria = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center bg-white p-8 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          {/* Acento visual lateral */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-navy to-brand"></div>

          {/* Columna de Texto */}
          <div className="lg:w-2/3 space-y-6 text-slate-600 text-justify leading-relaxed">
            <h2 className="text-4xl font-extrabold text-navy mb-8">Historia</h2>
            <p>
              Centac nació como un proyecto personal de nuestro fundador, Andrés Guillermo Rodriguez (Q.E.P.D.), quien, con el apoyo de nuestras actuales directoras Adriana Marcela Ruíz Villamizar y Daniela Alejandra Bonilla Ruiz, soñó con crear un espacio de formación enfocado en el desarrollo técnico y humano.
            </p>
            <p>
              Un lugar donde el conocimiento se compartiera a través de la metodologia "aprender haciendo", y que, al mismo tiempo, promoviera la independencia y el crecimiento financiero de los estudiantes.
            </p>
            {/* Resalte del hito de creación */}
            <p className="font-semibold text-navy text-lg border-l-4 border-brand pl-5 my-8">
              Ese sueño se hizo realidad el 3 de marzo de 2012 en Bucaramanga, con la creación de La Corporación Educativa Nacional de Tecnologia, Arte y Conocimiento (CENTAC).
            </p>
            <p>
              Durante estos 14 años de trayectoria, nuestra corporación ha fomentado el emprendimiento y el desarrollo de ideas de negocio, siendo testigo del rápido ingreso de nuestros estudiantes al mercado y de la generación de ingresos a partir de actividades que les apasionan y potencian su talento.
            </p>
            <p>
              Desde nuestros inicios, hemos trabajado con un enfoque práctico que prepara a jóvenes y adultos a enfrentar los retos del entorno productivo y respondiendo a las necesidades reales del mercado laboral.
            </p>
          </div>

          {/* Columna de la Imagen del Fundador (Retrato Destacado) */}
          <div className="lg:w-1/3 w-full max-w-sm mx-auto">
            <div className="relative group">
              {/* Efecto de resplandor sutil detrás de la foto */}
              <div className="absolute -inset-3 bg-gradient-to-r from-brand to-navy rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Marco de la imagen */}
              <div className="relative bg-white p-3 rounded-3xl shadow-xl">
                <div className="aspect-[3/4] bg-slate-200 rounded-2xl overflow-hidden relative">
                  
                  {/* 💡 NOTA: Cambia la ruta del src por la foto real de Don Andrés Guillermo.
                    He dejado un estilo que asegura que la foto siempre cubra el espacio de forma elegante.
                  */}
                  <img 
                    src="/assets/images/fundador.jpg" 
                    alt="Andrés Guillermo Rodriguez - Fundador de CENTAC" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  
                  {/* Sombra inferior para que el texto blanco siempre se lea bien */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
                  
                  {/* Placa con el nombre */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-xl font-bold text-white drop-shadow-md">
                      Andrés Guillermo Rodriguez
                    </h3>
                    <p className="text-sm font-semibold text-brand tracking-widest mt-1 uppercase">
                      Fundador (Q.E.P.D.)
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};