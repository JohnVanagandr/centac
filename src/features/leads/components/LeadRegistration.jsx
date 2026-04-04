import React from "react";
import { LeadForm } from "./"; // Importamos la vista del barril interno
import { useLeadRegistration } from "../hooks/useLeadRegistration";

const LeadRegistration = ({ programaPreseleccionado = "" }) => {
  
  // 🚀 Extraemos la lógica real de nuestro hook
  const { 
    values, 
    errors, 
    handleChange, 
    onSubmitForm, 
    isSubmitting, 
    isSubmitted 
  } = useLeadRegistration(programaPreseleccionado);

  // 💡 Lista de programas. 
  // En el futuro, esto podría venir de un Contexto global o de un endpoint de Laravel
  const programasOptions = [
    { id: "", label: "Selecciona un programa..." },
    { id: "tecnico-sistemas", label: "Técnico en Sistemas" },
    { id: "mecanica-motos", label: "Mecánica de Motos" },
    { id: "soldadura", label: "Soldadura Industrial" }
  ];

  return (
    <LeadForm 
      values={values}
      errors={errors}
      handleChange={handleChange}
      onSubmit={onSubmitForm}
      isSubmitting={isSubmitting}
      isSubmitted={isSubmitted}
      programasOptions={programasOptions}
    />
  );
};

export default LeadRegistration;