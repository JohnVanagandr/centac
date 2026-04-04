import React, { useMemo } from "react";
import { LeadForm } from "./"; 
import { useLeadRegistration } from "../hooks/useLeadRegistration";
import { useOfertas } from "@/features/oferta/hooks/useOfertas";

const LeadRegistration = ({ programaPreseleccionado = "" }) => {
  
  const { 
    values, 
    errors, 
    handleChange, 
    onSubmitForm, 
    isSubmitting, 
    isSubmitted 
  } = useLeadRegistration(programaPreseleccionado);

  const { allOfertas, loading } = useOfertas();

  const programasOptions = useMemo(() => {
    if (loading || !allOfertas) return [];

    return allOfertas.map(oferta => ({
      id: oferta.id,
      label: oferta.title
    }));
  }, [allOfertas, loading]);

  return (
    <LeadForm 
      values={values}
      errors={errors}
      handleChange={handleChange}
      onSubmit={onSubmitForm}
      isSubmitting={isSubmitting}
      isSubmitted={isSubmitted}
      programasOptions={programasOptions} 
      loadingOptions={loading}
    />
  );
};

export default LeadRegistration;