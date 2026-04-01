import React from "react";
import { PqrsDefiniciones, PqrsForm } from "./"; // Del barril interno
import { usePqrs } from "../hooks/usePqrs"; // Del hook de lógica

const PqrsContainer = () => {
  // 🚀 Extraemos la lógica del hook
  const { values, errors, handleChange, onSubmitForm, isSubmitting, isSubmitted } = usePqrs();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-sm">Atención al Ciudadano</span>
          <h2 className="text-3xl font-black text-navy uppercase mt-2">Sistema de PQRS</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Este es nuestro canal oficial para la recepción de Peticiones, Quejas, Reclamos y Sugerencias. 
            Su opinión es fundamental para la mejora continua de nuestra institución.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Columna Izquierda: Pedagogía (4 columnas) */}
          <div className="lg:col-span-4 sticky top-28">
            <PqrsDefiniciones />
          </div>

          {/* Columna Derecha: Formulario (8 columnas) */}
          <div className="lg:col-span-8 bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm relative">
            <PqrsForm 
              values={values}
              errors={errors}
              handleChange={handleChange}
              onSubmit={onSubmitForm} 
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
            />
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default PqrsContainer;