import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { useCreateSlider } from "./useSliders";
import { sliderSchema } from "../schemas/sliderSchema";

export const useSliderCreator = () => {
  const navigate = useNavigate();
  const { mutate: createSlider, isPending: isCreating } = useCreateSlider();

  const { 
    register, 
    handleSubmit, 
    watch,
    setError,
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(sliderSchema),
    defaultValues: {
      title: "", 
      title_highlight: "", 
      badge: "", 
      description: "", 
      button_text: "", 
      button_link: "", 
      image: ""
    }
  });

  // Observamos la URL para la vista previa en vivo
  const imageUrl = watch("image");

  const handleCancel = () => {
    navigate("/dashboard/sliders");
  };

  const onSubmit = (data) => {
    createSlider(data, {
      onSuccess: () => {
        toast.success("Slider creado exitosamente.");
        navigate("/dashboard/sliders");
      },
      onError: (error) => {
        // Interceptor de errores 422 (Laravel)
        if (error.response?.status === 422 && error.response.data?.errors) {
          const serverErrors = error.response.data.errors;
          Object.keys(serverErrors).forEach((field) => {
            setError(field, {
              type: "server",
              message: serverErrors[field][0],
            });
          });
          toast.error("Por favor revisa los errores en el formulario.");
        } else {
          toast.error("Ocurrió un error inesperado al crear el slider.");
        }
      }
    });
  };

  return {
    imageUrl,
    isCreating,
    register,
    errors,
    handleSubmit: handleSubmit(onSubmit),
    handleCancel
  };
};