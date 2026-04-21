import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query';
import { leadService } from "@/services/leadService";
import { useFeedback } from "@/hooks";
import { leadSchema } from "@/schemas/leadSchema";

export const useLeadRegistration = (programaPreseleccionado = "") => {
  const { showFeedback } = useFeedback();

  const { 
    register, 
    handleSubmit, 
    setValue,
    reset, 
    setError, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: { 
      full_name: "", 
      email: "", 
      phone: "", 
      program_id: programaPreseleccionado, 
      message: "" 
    }
  });

  useEffect(() => {
    if (programaPreseleccionado) {
      setValue("program_id", String(programaPreseleccionado), { shouldValidate: true });
    }
  }, [programaPreseleccionado, setValue]);

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (formValues) => leadService.registrarLead(formValues),
    
    onSuccess: () => {
      reset(); 
      showFeedback({
        type: 'success',
        title: '¡Solicitud Recibida!',
        message: 'Tu interés en este programa ha sido registrado. Un orientador técnico de nuestro centro te contactará pronto.'
      });
    },
    
    onError: (error) => {
      if (error.type === "VALIDATION" && error.validationErrors) {
        Object.keys(error.validationErrors).forEach((campo) => {
          setError(campo, { type: "server", message: error.validationErrors[campo][0] });
        });
      } else {
        showFeedback({
          type: 'error',
          title: 'Registro no procesado',
          message: error.message || 'Tuvimos un problema técnico al guardar tu información.'
        });
      }
    }
  });

  return { 
    register, 
    errors, 
    onSubmitForm: handleSubmit((data) => mutate(data)), 
    isSubmitting: isPending, 
    isSuccess 
  };
};