import React from "react";
import { InputField, TextAreaField, SelectField } from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";

const PqrsForm = ({
  values, 
  errors, 
  handleChange, 
  onSubmit, 
  isSubmitting, 
  isSubmitted,
  listas = { tiposDocumento: [], tiposPqrs: [] },
  loadingListas 
}) => {

  const opcionesDocumento = listas.tiposDocumento.map(tipo => ({
      value: tipo.id,
      label: tipo.name 
    }));

    const opcionesPqrs = listas.tiposPqrs.map(tipo => ({
      value: tipo.id,
      label: tipo.name
    }));
    
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-navy">Radicar Solicitud</h3>
        <p className="text-slate-500 text-sm mt-1">Todos los campos marcados con (*) son obligatorios.</p>
      </div>

      {isSubmitted && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg border border-green-200 mb-6 flex items-center gap-3">
          <span className="material-symbols-rounded">check_circle</span>
          <p className="font-medium">Su solicitud ha sido radicada con éxito. Pronto nos comunicaremos con usted.</p>
        </div>
      )}

      {/* Fila 1: Tipo de Solicitud (Full width) */}
      <SelectField 
        label="Tipo de Solicitud *"
        name="pqrs_type_id"
        options={opcionesPqrs}
        value={values.pqrs_type_id}
        onChange={handleChange}
        error={errors.pqrs_type_id}
        disabled={loadingListas}
      />

      {/* Fila 2: Documento (Grid 1/3 - 2/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <SelectField 
            label="Tipo Doc. *"
            name="document_type_id"
            options={opcionesDocumento}
            value={values.document_type_id}
            onChange={handleChange}
            error={errors.document_type_id}
            disabled={loadingListas}
          />
        </div>
        <div className="md:col-span-2">
          <InputField 
            label="Número de Documento *"
            name="document_number"
            value={values.document_number}
            onChange={handleChange}
            error={errors.document_number}
            placeholder="Ej. 1098765432"
          />
        </div>
      </div>

      {/* Fila 3: Datos Personales (Grid 1/2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField 
          label="Nombres y Apellidos *"
          name="full_name"
          value={values.full_name}
          onChange={handleChange}
          error={errors.full_name}
          placeholder="Ej. Ana María Pérez"
        />
        <InputField 
          label="Teléfono de Contacto"
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Ej. 300 123 4567"
        />
      </div>

      {/* Fila 4: Correo (Full width) */}
      <InputField 
        label="Correo Electrónico *"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Para recibir notificaciones del proceso"
      />

      {/* Fila 5: Asunto (Full width) */}
      <InputField 
        label="Asunto de la Solicitud *"
        name="subject"
        value={values.subject}
        onChange={handleChange}
        error={errors.subject}
        placeholder="Resumen breve de su solicitud"
      />

      {/* Fila 6: Descripción */}
      <TextAreaField 
        label="Descripción Detallada *"
        name="description"
        value={values.description}
        onChange={handleChange}
        error={errors.description}
        rows="5"
        placeholder="Describa de manera clara y respetuosa los hechos..."
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