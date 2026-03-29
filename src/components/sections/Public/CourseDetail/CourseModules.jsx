import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Accordion } from "../../../ui/DataDisplay";
import IconMapper from "../../../ui/Icons/IconMapper"; // Importamos nuestro maestro de SVGs

const CourseModules = ({ modules }) => {
  const [activeModule, setActiveModule] = useState(0);

  const toggleModule = (index) => {
    setActiveModule(activeModule === index ? null : index);
  };

  if (!modules || modules.length === 0) return null;

  return (
    // 🌌 SLATE: Sombras y bordes con nuestro tono corporativo
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/40 border border-slate-100">
      {/* Cabecera de la sección */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
          {/* Usamos el IconMapper en lugar del SVG quemado */}
          <IconMapper iconName="book" className="w-6 h-6" />
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
                  // 🌌 SLATE: Texto de lectura principal
                  className="flex items-start gap-3 text-slate-600 font-body group/item"
                >
                  <CheckCircle2
                    size={18}
                    // 🔵 PRIMARY: El hover interactivo es Azul Eléctrico, indicando progreso/lectura
                    className="text-slate-300 shrink-0 mt-0.5 group-hover/item:text-primary transition-colors duration-300"
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
