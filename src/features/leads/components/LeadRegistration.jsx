import React, { useMemo } from "react";
import { LeadForm } from "./"; 
import { useLeadRegistration } from "../hooks/useLeadRegistration";
import { useOfertas } from "@/features/oferta/hooks/useOfertas";

const LeadRegistration = ({ programaPreseleccionado = "" }) => {  

  const { 
      data: allOfertas, 
      isLoading: loading, 
      isError 
    } = useOfertas();    

  const preselectedId = useMemo(() => {
    // Si no hay slug, o la data no ha cargado, no hay nada que traducir
    if (!programaPreseleccionado || !allOfertas || allOfertas.length === 0) return "";
    
    // Buscamos la oferta que coincida con el slug
    const ofertaEncontrada = allOfertas.find(oferta => oferta.slug === programaPreseleccionado);
    
    // Si la encontramos, devolvemos su ID. Si no, vacío.
    return ofertaEncontrada ? ofertaEncontrada.id : "";
  }, [programaPreseleccionado, allOfertas]);  

    const { 
    values, 
    errors, 
    handleChange, 
    onSubmitForm, 
    isSubmitting, 
    isSubmitted 
  } = useLeadRegistration(preselectedId);

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