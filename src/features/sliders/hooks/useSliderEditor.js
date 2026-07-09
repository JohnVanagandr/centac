import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { useAdminSlider, useUpdateSlider } from "../hooks/useSliders";
import { sliderSchema } from "../schemas/sliderSchema";

export const useSliderEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { data: slider, isLoading } = useAdminSlider(id);
  const { mutate: updateSlider, isPending: isUpdating } = useUpdateSlider();

  // Configuración de React Hook Form + Zod
  const { 
    register, 
    handleSubmit, 
    reset, 
    watch,
    setError, // Herramienta clave para inyectar errores del backend
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(sliderSchema),
    defaultValues: {
      title: "", title_highlight: "", badge: "", description: "", button_text: "", button_link: "", image: ""
    }
  });

  // Observamos la URL de la imagen en tiempo real para renderizar la vista previa
  const imageUrl = watch("image");

  // Sincronizamos los datos del backend con el formulario
  useEffect(() => {
    if (slider) {
      reset({
        title: slider.title || "",
        title_highlight: slider.title_highlight || "",
        badge: slider.badge || "",
        description: slider.description || "",
        button_text: slider.button_text || "",
        button_link: slider.button_link || "",
        image: slider.image || slider.image_url || "", 
      });
    }
  }, [slider, reset]);

  const handleCancel = () => {
    navigate("/dashboard/sliders");
  };

  // Función que se ejecuta SOLO si Zod valida que todo está bien
  const onSubmit = (data) => {
    updateSlider(
      { id, data },
      { 
        onSuccess: () => {
          toast.success("Slider actualizado correctamente.");
          navigate("/dashboard/sliders");
        },
        onError: (error) => {
          // INTERCEPTOR DE ERRORES DEL SERVIDOR (Laravel 422 Unprocessable Entity)
          if (error.response?.status === 422 && error.response.data?.errors) {
            const serverErrors = error.response.data.errors;
            // Inyectamos cada error del servidor en su input correspondiente
            Object.keys(serverErrors).forEach((field) => {
              setError(field, {
                type: "server",
                message: serverErrors[field][0], // Mostramos el primer error del backend
              });
            });
            toast.error("Hay errores en el formulario, por favor revísalos.");
          } else {
            toast.error("Error crítico al comunicarse con el servidor.");
          }
        }
      }
    );
  };

  return {
    id,
    imageUrl, // Lo exportamos para la vista previa
    isLoading,
    isUpdating,
    register, // Exportamos register para conectar los inputs
    errors,   // Exportamos errors para mostrar los mensajes
    handleSubmit: handleSubmit(onSubmit), // Exportamos la envoltura de RHF
    handleCancel
  };
};