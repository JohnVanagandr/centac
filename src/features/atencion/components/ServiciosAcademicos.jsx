import React from 'react';
import { BookOpen, FileText, Wrench, TrendingUp, Bell, Calendar as CalendarIcon, ShieldCheck, ArrowRight } from 'lucide-react';

export const ServiciosAcademicos = () => {
  const servicios = [
    { 
      t: 'Acompañamiento académico', 
      d: 'Brindamos orientación constante durante el desarrollo de tu programa para asegurar que nunca te sientas solo en tu aprendizaje.', 
      icon: BookOpen 
    },
    { 
      t: 'Calificaciones y constancias', 
      d: 'Gestionamos de forma ágil la expedición de tus certificados, constancias y todo tu historial de documentos académicos.', 
      icon: FileText 
    },
    { 
      t: 'Apoyo a la formación práctica', 
      d: 'Facilitamos el acceso organizado a los talleres, herramientas y recursos físicos necesarios para la metodología de aprender haciendo.', 
      icon: Wrench 
    },
    { 
      t: 'Seguimiento formativo', 
      d: 'Monitoreamos tu avance personal, promoviendo el cumplimiento de los objetivos y ayudándote a superar cualquier obstáculo.', 
      icon: TrendingUp 
    },
    { 
      t: 'Comunicación institucional', 
      d: 'Te mantenemos al día con información relevante: avisos, actualizaciones de lineamientos y comunicados importantes.', 
      icon: Bell 
    },
    { 
      t: 'Programación y calendario', 
      d: 'Información siempre clara y oportuna sobre fechas de inicio de clases, cronogramas de actividades y eventos académicos.', 
      icon: CalendarIcon 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Layout Editorial Dividido */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24 items-start">
          
          {/* Columna Izquierda: Introducción (Fija/Sticky en Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div>
              <p className="text-brand font-bold tracking-widest uppercase text-sm mb-3">
                Tu Respaldo Institucional
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight tracking-tight">
                Soporte y gestión al estudiante
              </h2>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              En CENTAC hemos diseñado un ecosistema de atención que te acompaña desde tu primer día hasta tu certificación, garantizando las mejores condiciones para tu aprendizaje.
            </p>
            
            <div className="p-6 bg-slate-50 border-l-4 border-brand rounded-r-2xl">
              <p className="text-slate-700 font-medium leading-relaxed">
                <strong className="text-navy block mb-1">Dato importante:</strong>
                Si eres egresado del programa Técnico Laboral en Instalaciones Eléctricas Industriales, te brindamos colaboración directa en el trámite de tu matrícula profesional.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Lista Interactiva de Servicios */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {servicios.map((s, i) => (
                <div 
                  key={i} 
                  className="group relative flex flex-col sm:flex-row gap-6 md:gap-8 py-8 border-b border-slate-100 first:pt-0 last:border-0 hover:pl-4 transition-all duration-300 ease-out cursor-default"
                >
                  {/* Ícono que se enciende con el Hover */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                      <s.icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Contenido de texto */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-3 flex items-center gap-3">
                      {s.t}
                      <ArrowRight size={20} className="text-brand opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {s.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bloque Destacado: Bienestar y Seguridad (Diseño Impactante) */}
        <div className="relative bg-navy rounded-[3rem] p-10 md:p-16 lg:p-20 text-white overflow-hidden shadow-2xl">
          {/* Elementos decorativos de fondo para romper la caja sólida */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-inner">
                <ShieldCheck size={100} strokeWidth={1} className="text-brand" />
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-8">
              <h3 className="text-4xl font-black text-white tracking-tight">Bienestar y seguridad</h3>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-medium">
                <p>
                  Promovemos un entorno de formación seguro, respetuoso y responsable. Velamos por el estricto cumplimiento de las normas de seguridad y el uso adecuado de equipos de protección, vitales en nuestros espacios de práctica.
                </p>
                <div className="inline-flex items-center gap-4 bg-brand text-navy px-6 py-3 rounded-full font-bold">
                  <span className="w-2 h-2 rounded-full bg-navy animate-pulse"></span>
                  El bienestar es pilar de nuestro modelo educativo
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};