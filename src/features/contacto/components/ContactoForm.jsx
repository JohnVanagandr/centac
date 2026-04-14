import React from "react";
import { InputField, TextAreaField } from "@/components/ui/Form"; 
import { Button } from "@/components/ui/Navigation";
import { useContacto } from "@/features/contacto/hooks/useContacto"; // 🌟 Importamos su nuevo hook

const ContactoForm = () => {
  // 1. Extraemos las herramientas del hook (Ya no vienen por props externas)
  const { 
    register, 
    errors, 
    onSubmitForm, 
    isSubmitting,
    isSuccess // 🌟 TanStack Query nos dice si el envío fue exitoso
  } = useContacto();

  return (
    <form onSubmit={onSubmitForm} className="space-y-6 relative">
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-navy">Envíanos un mensaje</h3>
        <p className="text-slate-500 text-sm mt-2">Diligencia el formulario y te responderemos en breve.</p>
      </div>

      {/* 2. Éxito: Usamos el estado de TanStack Query directamente */}
      {isSuccess && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-6 flex items-center gap-3 animate-in fade-in zoom-in duration-300">
          <span className="material-symbols-rounded">check_circle</span>
          <p className="font-medium">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
        </div>
      )}

      {/* 3. Inputs: Sustituimos value/onChange por {...register("name")} */}
      <InputField 
        label="Nombre completo"
        {...register("full_name")} 
        error={errors.full_name?.message} 
        placeholder="Ej. Juan Pérez"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField 
          label="Correo electrónico"
          type="email"
          {...register("email")}
          error={errors.email?.message}
          placeholder="ejemplo@correo.com"
        />
        
        <InputField 
          label="Teléfono"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
          placeholder="Tu número de contacto"
        />
      </div>

      <TextAreaField 
        label="Mensaje"
        {...register("message")}
        error={errors.message?.message}
        rows="4"
        placeholder="¿En qué te podemos ayudar?"
      />

      <div className="pt-2">
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full flex justify-center items-center gap-2 py-4"
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