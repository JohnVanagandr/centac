import React from "react";
import { InputField, TextAreaField, SelectField } from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";
import { usePqrs } from "@/features/pqrs/hooks/usePqrs"; // 🌟 Importación de su Hook

const PqrsForm = () => {
  // 1. Extraemos todo directamente del Hook, sin depender del padre
  const { 
    register, 
    errors, 
    onSubmitForm, 
    isSubmitting, 
    isSuccess,
    tiposDocumento = [], 
    tiposPqrs = [], 
    isLoadingSelects 
  } = usePqrs();

  // 2. Mapeamos las opciones para su Átomo SelectField
  const opcionesDocumento = tiposDocumento.map(tipo => ({
      value: tipo.id,
      label: tipo.name // Asegúrese de que coincida con el campo de su API (name o nombre)
    }));

  const opcionesPqrs = tiposPqrs.map(tipo => ({
    value: tipo.id,
    label: tipo.name 
  }));  
    
  return (
    <form onSubmit={onSubmitForm} className="space-y-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-navy">Radicar Solicitud</h3>
        <p className="text-slate-500 text-sm mt-1">Todos los campos marcados con (*) son obligatorios.</p>
      </div>

      {isSuccess && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-6 flex items-center gap-3">
          <span className="material-symbols-rounded">check_circle</span>
          <p className="font-medium">Su solicitud ha sido radicada con éxito. Pronto nos comunicaremos con usted.</p>
        </div>
      )}

      {/* Fila 1: Tipo de Solicitud (Full width) */}
      <SelectField 
        label="Tipo de Solicitud *"
        options={opcionesPqrs}
        disabled={isLoadingSelects}
        {...register("pqrs_type_id")} // 🌟 Conexión a RHF
        error={errors?.pqrs_type_id?.message} // 🌟 Cadena opcional + .message
      />

      {/* Fila 2: Documento (Grid 1/3 - 2/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <SelectField 
            label="Tipo Doc. *"
            options={opcionesDocumento}
            disabled={isLoadingSelects}
            {...register("document_type_id")}
            error={errors?.document_type_id?.message}
          />
        </div>
        <div className="md:col-span-2">
          <InputField 
            label="Número de Documento *"
            placeholder="Ej. 1098765432"
            {...register("document_number")}
            error={errors?.document_number?.message}
          />
        </div>
      </div>

      {/* Fila 3: Datos Personales (Grid 1/2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField 
          label="Nombres y Apellidos *"
          placeholder="Ej. Ana María Pérez"
          {...register("full_name")}
          error={errors?.full_name?.message}
        />
        <InputField 
          label="Teléfono de Contacto"
          type="tel"
          placeholder="Ej. 300 123 4567"
          {...register("phone")}
          error={errors?.phone?.message}
        />
      </div>

      {/* Fila 4: Correo (Full width) */}
      <InputField 
        label="Correo Electrónico *"
        type="email"
        placeholder="Para recibir notificaciones del proceso"
        {...register("email")}
        error={errors?.email?.message}
      />

      {/* Fila 5: Asunto (Full width) */}
      <InputField 
        label="Asunto de la Solicitud *"
        placeholder="Resumen breve de su solicitud"
        {...register("subject")}
        error={errors?.subject?.message}
      />

      {/* Fila 6: Descripción */}
      <TextAreaField 
        label="Descripción Detallada *"
        rows="5"
        placeholder="Describa de manera clara y respetuosa los hechos..."
        {...register("description")}
        error={errors?.description?.message}
      />

      {/* Botón */}
      <div className="pt-4">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex justify-center items-center gap-2 py-4"
        >
          {isSubmitting ? (
            <>
              <span className="material-symbols-rounded animate-spin">sync</span>
              <span>Procesando...</span>
            </>
          ) : (
            <>
              <span>Radicar Solicitud</span>
              <span className="material-symbols-rounded text-sm">send</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default PqrsForm;