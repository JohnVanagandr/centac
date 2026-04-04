import React from 'react';
// Importamos los iconos de Lucide
import { 
  Target, 
  Eye, 
  Star, 
  Shield, 
  Heart, 
  CheckSquare, 
  Users, 
  Award 
} from 'lucide-react';

export const NosotrosEstrategia = () => {
  const valores = [
    { t: 'Calidad', d: 'Buscamos la mejora continua en nuestros procesos académicos y administrativos.', icon: Star },
    { t: 'Honestidad', d: 'Actuamos con transparencia en nuestros procesos educativos y administrativos.', icon: Shield },
    { t: 'Compromiso', d: 'Acompañamos a nuestros estudiantes en todo su proceso de formación.', icon: Heart },
    { t: 'Responsabilidad', d: 'Formamos personas conscientes de la seguridad, la ética y el impacto de su labor.', icon: CheckSquare },
    { t: 'Equidad', d: 'Fomentamos la colaboración entre estudiantes, docentes y administrativos.', icon: Users },
    { t: 'Excelencia', d: 'Promovemos el crecimiento personal, profesional y humano.', icon: Award }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Misión y Visión: Layout de Doble Columna con Separador Editorial */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-24 items-start">
          
          {/* Columna Misión */}
          <div className="group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-brand/5 text-brand rounded-2xl group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-extrabold text-navy tracking-tight">Misión</h3>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed text-justify">
              Proporcionar a nuestras estudiantes una formación acorde con sus expectativas y necesidades laborales, mediante un enfoque práctico de enseñanza, lenguaje claro y dinámico, y grupos pequeñas que permiten una atención personalizada.
            </p>
          </div>
          
          {/* Columna Visión con Separador Visual (Solo en desktop) */}
          <div className="relative md:pl-12 lg:pl-24 md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-0 md:before:bottom-0 md:before:w-px md:before:bg-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-navy/5 text-navy rounded-2xl">
                <Eye size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl font-extrabold text-navy tracking-tight">Visión</h3>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed text-justify">
              Ser lider en el departamento de Santander para el año 2020 en capacitación para el trabajo y desarrollo dumano, destacándose por la inserción del mayor número de técnicos operativos al mercado laboral formal.
            </p>
          </div>

        </div>

        {/* Valores Institucionales: Diagramación de Lista de Atributos */}
        <div className="pt-20 border-t border-slate-100">
          <div className="mb-20">
            <h3 className="text-5xl font-black text-navy mb-4 tracking-tighter">Valores Institucionales</h3>
            <p className="text-brand font-bold uppercase tracking-[0.3em] text-sm">Nuestro ADN corporativo</p>
          </div>
          
          {/* Grid de Valores sin Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {valores.map((item, i) => (
              <div key={i} className="flex flex-col gap-6 group">
                {/* Icono minimalista con línea de color */}
                <div className="flex items-center gap-4">
                  <div className="text-slate-300 group-hover:text-brand transition-colors duration-500">
                    <item.icon size={40} strokeWidth={1} />
                  </div>
                  <div className="h-px flex-1 bg-slate-100 group-hover:bg-brand/30 transition-colors duration-500"></div>
                </div>
                
                {/* Contenido tipográfico */}
                <div>
                  <h4 className="text-2xl font-bold text-navy mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {item.t}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-lg">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};