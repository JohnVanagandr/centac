import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query';
import { registroSchema } from "@/schemas/registroSchema"; // ⚠️ Asegúrese de que este esquema use 'name' y 'password_confirmation'
import { authService } from "@/services/authService";
import { useFeedback } from "@/hooks";

export const useRegister = () => {
  const { showFeedback } = useFeedback();

  // 1. Configuración de RHF con los nombres correctos
  const { 
    register, 
    handleSubmit, 
    reset, 
    setError, // Clave para pintar los errores del backend
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(registroSchema),
    // Alineado estrictamente con el backend de Laravel
    defaultValues: { name: "", email: "", password: "", password_confirmation: "" }
  });

  // 2. Gestión Asíncrona con TanStack Query
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (formValues) => authService.registrar(formValues),
    
    onSuccess: () => {
      reset(); // Limpiamos datos sensibles de la memoria
      showFeedback({
        type: 'success',
        title: '¡Paso 1 completado!',
        message: 'Revisa tu bandeja de entrada. Te hemos enviado un enlace para validar tu cuenta.'
      });
    },
    
    onError: (error) => {
      // 🌟 1. Leemos el contrato exacto que diseñó en su authService
      if (error.type === "VALIDATION" && error.validationErrors) {
        
        // ¡SILENCIO ABSOLUTO! Sin Toasts. Solo pintamos de rojo.
        const erroresBackend = error.validationErrors;
        
        Object.keys(erroresBackend).forEach((campo) => {
          setError(campo, {
            type: "server",
            message: erroresBackend[campo][0], // Ej: "Este correo ya se encuentra registrado"
          });
        });

      } else {
        // 🌟 2. ERRORES FATALES (500, Red, Caídas)
        // Solo aquí mostramos el modal gigante
        showFeedback({
          type: 'error',
          title: 'Problemas técnicos',
          message: error.message || 'Error al registrar el usuario.'
        });
      }
    }
  });

  // 3. Disparador
  const onSubmitForm = handleSubmit((data) => mutate(data));

  return { 
    register, 
    errors, 
    onSubmitForm, 
    isSubmitting: isPending,
    isSuccess
  };
};