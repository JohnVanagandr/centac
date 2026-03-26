import React from "react";
import { useLeadRegistration } from "./useLeadRegistration";
import {
  InputField,
  SelectField,
  TextAreaField
} from "@/components/ui/Form";
import { Alert } from "@/components/ui/Feedback";
import { Button } from "@/components/ui/Navigation";

const LeadRegistration = () => {
  const {
    values,
    errors,
    handleChange,
    onSubmit,
    isSubmitting,
    isSubmitted,
    programas,
  } = useLeadRegistration();

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* NOMBRE COMPLETO */}
      <InputField
        label="Nombre Completo"
        name="nombre"
        value={values.nombre}
        onChange={handleChange}
        error={errors.nombre}
        placeholder="Ej. Juan Pérez"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* CORREO ELECTRÓNICO */}
        <InputField
          label="Correo Electrónico"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="ejemplo@correo.com"
        />

        {/* TELÉFONO */}
        <InputField
          label="Teléfono / Celular"
          name="telefono"
          type="tel"
          value={values.telefono}
          onChange={handleChange}
          error={errors.telefono}
          placeholder="300 123 4567"
        />
      </div>

      {/* PROGRAMA DE INTERÉS */}
      <SelectField
        label="Programa de Interés"
        name="programa"
        value={values.programa}
        onChange={handleChange}
        error={errors.programa}
        options={programas} // La data viene del custom hook
        placeholder="Selecciona un programa..."
      />

      {/* MENSAJE (Opcional) */}
      <TextAreaField
        label="Mensaje (Opcional)"
        name="mensaje"
        value={values.mensaje}
        onChange={handleChange}
        placeholder="¿Tienes alguna duda específica sobre el ingreso?"
      />

      {/* BOTÓN DE ACCIÓN */}
      <Button
        type="submit"
        intent="primary" // Naranja Brand (Máxima conversión)
        size="full" // Se ajusta al ancho del formulario
        isLoading={isSubmitting} // Maneja el Spinner y el texto automáticamente
      >
        Enviar mi solicitud
      </Button>

      {/* FEEDBACK DE ÉXITO */}
      {isSubmitted && (
        <Alert type="success" title="¡Registro Exitoso!">
          Hemos recibido tus datos. Un asesor de CENTAC te contactará en las
          próximas 24 horas.
        </Alert>
      )}
    </form>
  );
};

export default LeadRegistration;
