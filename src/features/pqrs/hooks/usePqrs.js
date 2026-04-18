import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation } from '@tanstack/react-query';
import { pqrsSchema } from "@/schemas/pqrsSchema";
import { pqrsService } from "@/services/pqrsService";
import { catalogoService } from "@/services/catalogoService";
import { useFeedback } from "@/hooks";

export const usePqrs = () => {
  const { showFeedback } = useFeedback();

  // 1. QUERIES DE LECTURA: Cargamos las listas desplegables (En paralelo)  
  const { 
    data: tiposDocumento = [], 
    isLoading: cargandoDocs 
  } = useQuery({
    queryKey: ['tiposDocumento'],
    queryFn: () => catalogoService.obtenerTiposDocumento(), 
    staleTime: 1000 * 60 * 60,
  });

  const { 
    data: tiposPqrs = [], 
    isLoading: cargandoTiposPqrs 
  } = useQuery({
    queryKey: ['tiposPqrs'],
    queryFn: () => pqrsService.obtenerTiposPqrs(),
    staleTime: 1000 * 60 * 60,
  });  

  // 2. CONFIGURACIÓN DEL FORMULARIO (Zod)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(pqrsSchema),
    defaultValues: { 
      document_type_id: "", document_number: "", full_name: "", 
      phone: "", email: "", pqrs_type_id: "", subject: "", description: "" 
    }
  });

  // 3. MUTACIÓN DE ESCRITURA: Enviar datos
  const { mutate, isPending } = useMutation({
    mutationFn: (formValues) => pqrsService.radicarPqrs(formValues),
    onSuccess: (resultado) => {
      reset();
      showFeedback({ 
        type: 'success', 
        title: '¡Radicado Exitoso!', 
        message: `${resultado.mensajeBackend || ''}. Tu número de seguimiento es: ${resultado.radicado}`.trim()
      });
    },
    onError: (error) => {
      showFeedback({ type: 'error', title: 'Error', message: error.message });
    }
  });

  const onSubmitForm = handleSubmit((data) => mutate(data));

  return { 
    register, 
    errors, 
    onSubmitForm, 
    isSubmitting: isPending,
    tiposDocumento,
    tiposPqrs,
    isLoadingSelects: cargandoDocs || cargandoTiposPqrs 
  };
};