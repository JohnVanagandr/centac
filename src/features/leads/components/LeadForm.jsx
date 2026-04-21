import React from "react";
import { InputField, SelectField, TextAreaField } from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";
import { useLeadRegistration } from "../hooks/useLeadRegistration";

const LeadForm = ({ 
  programasOptions = [], 
  programaPreseleccionado = "" 
}) => {
  const { 
    register, 
    errors, 
    onSubmitForm, 
    isSubmitting, 
    isSuccess 
  } = useLeadRegistration(programaPreseleccionado);  

  return (
    <div className="bg-white rounded-[20px] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 w-full relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-2 bg-brand"></div>

      <div className="mb-6 mt-2">
        <h3 className="text-[28px] font-black text-navy uppercase leading-none tracking-tight">
          Inicia tu Proceso
        </h3>
        <p className="text-slate-500 text-sm mt-2">
          Completa el formulario y recibe toda la información.
        </p>
      </div>

      {isSuccess && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-6 flex items-center gap-3">
          <span className="material-symbols-rounded">check_circle</span>
          <p className="font-medium text-sm">¡Solicitud enviada! Te contactaremos pronto.</p>
        </div>
      )}

      <form onSubmit={onSubmitForm} className="space-y-5">
        
        <InputField 
          label="Nombre Completo"
          placeholder="Ej. Juan Pérez"
          {...register("full_name")}
          error={errors.full_name?.message}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <InputField 
            label="Correo Electrónico"
            type="email"
            placeholder="ejemplo@correo.com"
            {...register("email")}
            error={errors.email?.message}
          />
          <InputField 
            label="Teléfono / Celular"
            type="tel"
            placeholder="300 123 4567"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>

        <SelectField 
          label="Programa de Interés"
          options={programasOptions}
          disabled={Boolean(programaPreseleccionado)} // Bloqueo opcional si viene con ID
          {...register("program_id")}
          error={errors.program_id?.message}
        />

        <TextAreaField 
          label="Mensaje (Opcional)"
          rows="3"
          placeholder="¿Tienes alguna duda específica sobre el ingreso?"
          {...register("message")}
          error={errors.message?.message}
        />

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