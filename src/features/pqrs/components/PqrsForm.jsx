import React from "react";
import { InputField, TextAreaField, SelectField } from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";

// Opciones para los Selects
const opcionesPqrs = [
  { value: "", label: "Seleccione un tipo..." },
  { value: "peticion", label: "Petición" },
  { value: "queja", label: "Queja" },
  { value: "reclamo", label: "Reclamo" },
  { value: "sugerencia", label: "Sugerencia" },
  { value: "felicitacion", label: "Felicitación" }
];

const opcionesDocumento = [
  { value: "", label: "Tipo..." },
  { value: "cc", label: "Cédula de Ciudadanía" },
  { value: "ti", label: "Tarjeta de Identidad" },
  { value: "ce", label: "Cédula de Extranjería" },
  { value: "pasaporte", label: "Pasaporte" }
];

const PqrsForm = ({ values, errors, handleChange, onSubmit, isSubmitting, isSubmitted }) => {
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
        name="tipoSolicitud"
        options={opcionesPqrs}
        value={values.tipoSolicitud}
        onChange={handleChange}
        error={errors.tipoSolicitud}
      />

      {/* Fila 2: Documento (Grid 1/3 - 2/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <SelectField 
            label="Tipo Doc. *"
            name="tipoDocumento"
            options={opcionesDocumento}
            value={values.tipoDocumento}
            onChange={handleChange}
            error={errors.tipoDocumento}
          />
        </div>
        <div className="md:col-span-2">
          <InputField 
            label="Número de Documento *"
            name="numeroDocumento"
            value={values.numeroDocumento}
            onChange={handleChange}
            error={errors.numeroDocumento}
            placeholder="Ej. 1098765432"
          />
        </div>
      </div>

      {/* Fila 3: Datos Personales (Grid 1/2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField 
          label="Nombres y Apellidos *"
          name="nombreCompleto"
          value={values.nombreCompleto}
          onChange={handleChange}
          error={errors.nombreCompleto}
          placeholder="Ej. Ana María Pérez"
        />
        <InputField 
          label="Teléfono de Contacto"
          type="tel"
          name="telefono"
          value={values.telefono}
          onChange={handleChange}
          error={errors.telefono}
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
        name="asunto"
        value={values.asunto}
        onChange={handleChange}
        error={errors.asunto}
        placeholder="Resumen breve de su solicitud"
      />

      {/* Fila 6: Descripción */}
      <TextAreaField 
        label="Descripción Detallada *"
        name="descripcion"
        value={values.descripcion}
        onChange={handleChange}
        error={errors.descripcion}
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