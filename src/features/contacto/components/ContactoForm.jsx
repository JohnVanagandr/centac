import React from "react";
import { InputField, TextAreaField } from "@/components/ui/Form"; 
import { Button } from "@/components/ui/Navigation";

const ContactoForm = ({ values, errors, handleChange, onSubmit, isSubmitting, isSubmitted }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 relative">
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-navy">Envíanos un mensaje</h3>
        <p className="text-slate-500 text-sm mt-2">Diligencia el formulario y te responderemos en breve.</p>
      </div>

      {isSubmitted && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-6 flex items-center gap-3">
          <span className="material-symbols-rounded">check_circle</span>
          <p className="font-medium">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
        </div>
      )}

      {/* Átomos de Formulario */}
      <InputField 
        label="Nombre completo"
        name="nombre"
        value={values.nombre}
        onChange={handleChange}
        error={errors.nombre}
        placeholder="Ej. Juan Pérez"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField 
          label="Correo electrónico"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="ejemplo@correo.com"
        />
        
        <InputField 
          label="Teléfono"
          type="tel"
          name="telefono"
          value={values.telefono}
          onChange={handleChange}
          error={errors.telefono}
          placeholder="Tu número de contacto"
        />
      </div>

      <TextAreaField 
        label="Mensaje"
        name="mensaje"
        value={values.mensaje}
        onChange={handleChange}
        error={errors.mensaje}
        rows="4"
        placeholder="¿En qué te podemos ayudar?"
      />

      {/* 🚀 Átomo de Navegación/Acción */}
      <div className="pt-2">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 py-4" // Ajusta las clases extra que tu componente permita
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-rounded animate-spin">sync</span>
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar Mensaje</span>
            </>
          )}
        </Button>
      </div>
      
    </form>
  );
};

export default ContactoForm;