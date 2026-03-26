import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Accordion } from "../../../ui/DataDisplay";

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
        {modules.map((mod, index) => (
          <Accordion
            key={index}
            number={mod.number}
            title={mod.title}
            isOpen={activeModule === index}
            onToggle={() => toggleModule(index)}
          >
            {/* Lista vertical limpia */}
            <ul className="flex flex-col gap-3">
              {mod.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-600 font-body group/item"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand/40 shrink-0 mt-0.5 group-hover/item:text-brand transition-colors"
                  />
                  <span className="text-sm md:text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default CourseModules;
