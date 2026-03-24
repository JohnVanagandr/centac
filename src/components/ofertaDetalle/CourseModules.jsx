import React, { useState } from "react";

const CourseModules = ({ modules }) => {
  // Estado para controlar qué módulo está abierto (por defecto el primero: 0)
  const [activeModule, setActiveModule] = useState(0);

  const toggleModule = (index) => {
    // Si se hace clic en el que ya está abierto, se cierra. Si no, se abre el nuevo.
    setActiveModule(activeModule === index ? null : index);
  };

  if (!modules || modules.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/40 border border-gray-100">
      {/* Cabecera de la sección */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white shrink-0">
          {/* SVG de Libro/Temario */}
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-black text-navy uppercase leading-tight">
            Contenido del <span className="text-brand">Programa</span>
          </h3>
        </div>
      </div>

      {/* Lista de Acordeones */}
      <div className="flex flex-col gap-3">
        {modules.map((mod, index) => {
          const isOpen = activeModule === index;

          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                isOpen
                  ? "border-brand/30 bg-white shadow-md"
                  : "border-gray-100 bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {/* Botón del Acordeón */}
              <button
                onClick={() => toggleModule(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  {/* Círculo con el número o ícono */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      isOpen
                        ? "bg-brand text-white"
                        : "bg-gray-200 text-gray-500 group-hover:bg-brand/20 group-hover:text-brand"
                    }`}
                  >
                    {mod.number}
                  </div>
                  <span
                    className={`font-bold text-base md:text-lg transition-colors ${
                      isOpen ? "text-brand" : "text-navy group-hover:text-brand"
                    }`}
                  >
                    {mod.title}
                  </span>
                </div>

                {/* Ícono animado de abrir/cerrar (+/-) */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen
                      ? "border-brand bg-brand text-white rotate-180"
                      : "border-gray-300 text-gray-400 group-hover:border-brand group-hover:text-brand"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"}
                    />
                  </svg>
                </div>
              </button>

              {/* Contenido Desplegable (Los temas) */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 pt-0 pl-16">
                  <ul className="space-y-3">
                    {mod.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 font-medium"
                      >
                        {/* Checkmark naranja */}
                        <svg
                          className="w-5 h-5 text-brand shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseModules;
