import React from "react";

const CourseTestimonials = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="space-y-4">
      <h4 className="font-display font-black text-navy text-xl uppercase mb-4 text-center">
        Opiniones de <span className="text-brand">Alumnos</span>
      </h4>

      {testimonials.map((testimonio, index) => (
        <div
          key={index}
          className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative"
        >
          {/* Comillas decorativas de fondo */}
          <div className="absolute top-2 right-4 text-6xl text-gray-100 font-serif leading-none opacity-50 select-none">
            "
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-1 mb-2">
              {/* Renderizamos 5 estrellas */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < testimonio.rating ? "text-yellow-400" : "text-gray-200"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm italic mb-3">
              "{testimonio.text}"
            </p>
            <p className="text-navy font-bold text-sm">- {testimonio.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseTestimonials;
