import React from "react";

const CourseTestimonials = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="space-y-5">
      <h4 className="font-display font-black text-navy text-xl uppercase mb-6 text-center tracking-tight">
        Opiniones de <span className="text-brand">Alumnos</span>
      </h4>

      {testimonials.map((testimonio, index) => (
        <div
          key={index}
          // 🌌 SLATE & PRIMARY: Sombras corporativas y un borde sutil al interactuar
          className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md shadow-slate-200/40 relative overflow-hidden group hover:border-primary/20 hover:shadow-lg transition-all duration-300"
        >
          {/* Comillas decorativas de fondo */}
          {/* 🔵 PRIMARY: La comilla se tiñe levemente de azul al pasar el ratón */}
          <div className="absolute top-2 right-4 text-6xl text-slate-100 font-serif leading-none opacity-60 select-none group-hover:text-primary/10 transition-colors duration-500">
            "
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-1 mb-3">
              {/* Renderizamos 5 estrellas */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  // 🟡 GOLD: Usamos el color corporativo para las estrellas activas
                  className={`w-4 h-4 ${
                    i < testimonio.rating ? "text-gold" : "text-slate-200"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {/* 🌌 SLATE: Mejor legibilidad con font-body */}
            <p className="text-slate-500 font-body text-sm italic mb-4 leading-relaxed">
              "{testimonio.text}"
            </p>
            <p className="text-navy font-display font-bold text-sm uppercase tracking-wide">
              - {testimonio.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseTestimonials;
