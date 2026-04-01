import React from "react";
import { ContactoForm, ContactoInfo } from "./";

const ContactoContainer = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado interno de la sección */}
        <div className="text-center mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-sm">Soporte y Atención</span>
          <h2 className="text-3xl font-black text-navy uppercase mt-2">¿En qué podemos ayudarte?</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Información Estática (Toma 5 columnas) */}
          <div className="lg:col-span-5">
            <ContactoInfo />
          </div>

          {/* Columna Derecha: Formulario (Toma 7 columnas) */}
          <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
            <ContactoForm />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactoContainer;