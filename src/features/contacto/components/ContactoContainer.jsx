import React from "react";
import { ContactoForm, ContactoInfo } from "./"; // Del barril interno
import { useContacto } from "../hooks/useContacto"; // La lógica aislada

const ContactoContainer = () => {
  // 🚀 Extraemos la lógica sin ensuciarnos las manos
  const { 
    values, 
    errors, 
    handleChange, 
    onSubmitForm, 
    isSubmitting, 
    isSubmitted 
  } = useContacto();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-sm">Soporte y Atención</span>
          <h2 className="text-3xl font-black text-navy uppercase mt-2">¿En qué podemos ayudarte?</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <ContactoInfo />
          </div>

          <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative">
            {/* 🔗 Inyectamos los datos y acciones a la vista "tonta" */}
            <ContactoForm 
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

export default ContactoContainer;