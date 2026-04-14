import { useForm } from "react-hook-form"; // 🌟 Recomendado para Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query';
import { contactoService } from "@/services/contactoService";
import { useFeedback } from "@/hooks";
import { contactoSchema } from "@/schemas/contactoSchema";

export const useContacto = () => {
  const { showFeedback } = useFeedback();

  // 1. Configuración de React Hook Form con Zod
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(contactoSchema),
    defaultValues: { full_name: "", email: "", phone: "", message: "" }
  });

  // 2. Mutación de TanStack Query (La misma que ya teníamos)
  const { mutate, isPending } = useMutation({
    mutationFn: (datos) => contactoService.procesarContacto(datos),
    onSuccess: (resultado) => {
      reset(); // Limpiamos el formulario
      showFeedback({
        type: 'success',
        title: '¡Mensaje Enviado!',
        message: resultado.mensajeBackend || 'Pronto nos contactaremos contigo.'
      });
    },
    onError: (error) => {
      showFeedback({
        type: 'error',
        title: 'Error de envío',
        message: error.message
      });
    }
  });

  // 3. El disparador final
  const onSubmitForm = handleSubmit((data) => mutate(data));

  return { 
    register,     
    errors,       
    onSubmitForm, 
    isSubmitting: isPending 
  };
};