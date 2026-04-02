import React from "react";
import { InputField, SelectField, TextAreaField } from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";

const LeadForm = ({ 
  values = {}, 
  errors = {}, 
  handleChange, 
  onSubmit, 
  isSubmitting, 
  isSubmitted,
  programasOptions = [] // 💡 Recibe los programas de forma dinámica
}) => {
  return (
    <div className="bg-white rounded-[20px] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 w-full relative overflow-hidden">
      
      {/* Detalle visual superior (Borde azul que se ve en tu diseño) */}
      <div className="absolute top-0 left-0 w-full h-2 bg-brand"></div>

      <div className="mb-6 mt-2">
        <h3 className="text-[28px] font-black text-navy uppercase leading-none tracking-tight">
          Inicia tu Proceso
        </h3>
        <p className="text-slate-500 text-sm mt-2">
          Completa el formulario y recibe toda la información.
        </p>
      </div>

      {isSubmitted && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-6 flex items-center gap-3">
          <span className="material-symbols-rounded">check_circle</span>
          <p className="font-medium text-sm">¡Solicitud enviada! Te contactaremos pronto.</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5">
        
        {/* Fila 1: Nombre */}
        <InputField 
          label="Nombre Completo"
          name="nombre"
          value={values.nombre || ""}
          onChange={handleChange}
          error={errors.nombre}
          placeholder="Ej. Juan Pérez"
        />

        {/* Fila 2: Correo y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField 
            label="Correo Electrónico"
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            error={errors.email}
            placeholder="ejemplo@correo.com"
          />
          <InputField 
            label="Teléfono / Celular"
            type="tel"
            name="telefono"
            value={values.telefono || ""}
            onChange={handleChange}
            error={errors.telefono}
            placeholder="300 123 4567"
          />
        </div>

        {/* Fila 3: Programa */}
        <SelectField 
          label="Programa de Interés"
          name="programaInteres"
          options={programasOptions}
          value={values.programaInteres || ""}
          onChange={handleChange}
          error={errors.programaInteres}
        />

        {/* Fila 4: Mensaje */}
        <TextAreaField 
          label="Mensaje (Opcional)"
          name="mensaje"
          value={values.mensaje || ""}
          onChange={handleChange}
          error={errors.mensaje}
          rows="3"
          placeholder="¿Tienes alguna duda específica sobre el ingreso?"
        />

        {/* Botón (Estilo full-width azul como tu diseño) */}
        <div className="pt-2">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#0055FF] hover:bg-navy text-white font-bold py-4 rounded-xl transition-all shadow-md flex justify-center items-center gap-2 uppercase tracking-wide text-sm"
          >
            {isSubmitting ? (
              <>
                <span className="material-symbols-rounded animate-spin text-lg">sync</span>
                <span>Procesando...</span>
              </>
            ) : (
              "Enviar mi Solicitud"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;