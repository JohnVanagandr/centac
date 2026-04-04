import React from 'react';
import { CreditCard, FileSignature, Rocket } from 'lucide-react';

export const ProcesoAdmision = () => {
  const steps = [
    {
      num: "01",
      title: "Pago de inscripción o separación de cupo",
      desc: "Con la inscripción confirmamos tu intención de ingreso y reservamos el espacio para el inicio de clases.",
      icon: CreditCard,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-500",
      shadow: "hover:shadow-blue-500/20"
    },
    {
      num: "02",
      title: "Revisión de cédula y formulario",
      desc: "El formulario de inscripción es el que formaliza y asegura tu ingreso a nuestra institución.",
      icon: FileSignature,
      color: "bg-navy",
      lightColor: "bg-slate-100",
      textColor: "text-navy",
      shadow: "hover:shadow-navy/20"
    },
    {
      num: "03",
      title: "Inicio y bienvenida académica",
      desc: "Al finalizar la inscripción, solo debes prepararte para iniciar tus clases con la mejor actitud y compromiso.",
      icon: Rocket,
      color: "bg-brand",
      lightColor: "bg-brand/10",
      textColor: "text-brand",
      shadow: "hover:shadow-brand/20"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 tracking-tight">
            Admisiones e Inscripciones
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hemos diseñado un proceso rápido, claro y sin complicaciones para que comiences tu formación técnica hoy mismo.
          </p>
        </div>

        {/* Grid de Tarjetas Animadas */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`group relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${step.shadow} overflow-hidden`}
            >
              {/* Número de fondo (Marca de agua animada) */}
              <div className="absolute -bottom-10 -right-4 text-[10rem] font-black text-slate-50 transition-colors duration-500 group-hover:text-slate-100/80 pointer-events-none select-none z-0">
                {step.num}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="relative z-10">
                {/* Ícono animado */}
                <div className={`w-16 h-16 rounded-2xl ${step.lightColor} ${step.textColor} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <step.icon size={32} strokeWidth={1.5} />
                </div>

                {/* Textos */}
                <h3 className="text-2xl font-bold text-navy mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Barra de progreso inferior (Detalle de color) */}
              <div className={`absolute bottom-0 left-0 h-1.5 w-0 ${step.color} transition-all duration-700 ease-out group-hover:w-full`}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};