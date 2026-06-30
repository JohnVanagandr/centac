import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ofertasAdminService } from "@/services/private/ofertasAdminService";

// Estado inicial limpio para cuando es una "Nueva Oferta"
const defaultFormData = {
  title: "",
  subtitle: "",
  slug: "",
  modality: "",
  duration: "",
  isTop: false,
  iconName: "school",
  description: "",
  // Añada aquí más campos que necesite para Malla Curricular, Perfiles, etc.
  malla: [],
  perfiles: {}
};

export const useOfertaForm = (id, onSuccessCallback) => {
  const queryClient = useQueryClient();
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState(defaultFormData);
  const [localError, setLocalError] = useState(null);

  // 1. OBTENER DATOS (Si estamos en modo edición)
  const { data: fetchResponse, isLoading: isFetching, error: fetchError } = useQuery({
    queryKey: ["oferta", id],
    queryFn: () => ofertasAdminService.getById(id),
    enabled: isEditing, // Solo se ejecuta si hay un ID en la URL
    staleTime: 0, // Siempre busca la versión más reciente al editar
  });

  // 2. SINCRONIZAR DATOS CON EL FORMULARIO
  useEffect(() => {
    if (fetchResponse) {
      setFormData(fetchResponse);
    }
  }, [fetchResponse]);

  // 3. MUTACIÓN PARA GUARDAR (Crear o Actualizar)
  const mutation = useMutation({
    mutationFn: (dataToSave) => {
      return isEditing 
        ? ofertasAdminService.update(id, dataToSave) 
        : ofertasAdminService.create(dataToSave);
    },
    onSuccess: () => {
      // Invalidamos la caché de la lista para que la nueva oferta aparezca al volver
      queryClient.invalidateQueries(["admin-ofertas"]);
      
      // Ejecutamos el redireccionamiento que viene desde el componente
      if (onSuccessCallback) onSuccessCallback();
    },
    onError: (err) => {
      setLocalError(err.message || "Ocurrió un error al intentar guardar el programa.");
    }
  });

  // 4. MANEJADORES DE EVENTOS DEL FORMULARIO
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Genera el slug automáticamente al escribir el título
  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[\u0300-\u036f]/g, "") // Quitar tildes
      .replace(/[^a-z0-9\s-]/g, "")    // Quitar caracteres especiales
      .replace(/[\s-]+/g, "-");        // Reemplazar espacios por guiones

    setFormData((prev) => ({
      ...prev,
      title,
      slug,
    }));
  };

  // Función principal de guardado
  const saveOferta = () => {
    setLocalError(null);
    
    // Validación mínima obligatoria antes de enviar al backend
    if (!formData.title || !formData.modality) {
      setLocalError("El título y la modalidad son campos obligatorios.");
      return;
    }

    // Ejecuta la mutación
    mutation.mutate(formData);
  };

  // 5. RETORNO DE LA API DEL HOOK
  return {
    formData,
    setFormData,
    // isLoading es true si estamos buscando los datos iniciales
    isLoading: isEditing && isFetching, 
    // isSubmitting es true si estamos enviando los datos al backend (TanStack Query v5 usa isPending)
    isSubmitting: mutation.isPending || mutation.isLoading, 
    error: localError || (fetchError ? "Error al cargar la información del programa." : null),
    handleChange,
    handleTitleChange,
    saveOferta,
  };
};