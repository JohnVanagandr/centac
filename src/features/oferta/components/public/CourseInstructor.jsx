import React from "react";

const CourseInstructor = ({ instructor }) => {
  if (!instructor) return null;

  // Soportamos tanto 'image' como 'instructor_image' según cómo lo pase el componente padre
  const imageUrl = instructor.instructor_image || instructor.image;

  // Obtenemos las iniciales para el avatar (Máximo 2 letras) como fallback
  const initials = instructor.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2);

  return (
    // 🌌 SLATE & PRIMARY: Cambiamos bordes y sombras al tono corporativo, y el hover a primary
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg shadow-slate-200/40 text-center group hover:border-primary/30 transition-colors duration-300">
      
      {/* 🔵 PRIMARY: El avatar cambia a azul eléctrico al interactuar. 
          Agregamos overflow-hidden para que la imagen respete el borde circular */}
      <div className="w-24 h-24 bg-navy rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-display font-black shadow-inner group-hover:bg-primary group-hover:scale-105 transition-all duration-300 overflow-hidden relative">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Avatar de ${instructor.name}`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      <h4 className="font-display font-black text-navy text-xl mb-1">
        {instructor.name}
      </h4>

      {/* 🟠 BRAND: Mantenemos la línea decorativa naranja como acento estático */}
      <div className="w-12 h-1 bg-brand mx-auto rounded-full mb-3 opacity-80"></div>

      {/* 🌌 SLATE: Textos de lectura y etiquetas */}
      <p className="text-xs font-display font-black text-slate-400 uppercase tracking-widest mb-2">
        Instructor Titular
      </p>

      <p className="text-slate-500 font-body text-sm font-medium leading-relaxed">
        {instructor.role}
      </p>
    </div>
  );
};

export default CourseInstructor;