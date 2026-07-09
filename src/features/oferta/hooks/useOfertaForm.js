import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { ofertasAdminService } from "@/services/private/ofertasAdminService";

// Importaciones de validadores de dominio
import { validateBasica } from "./useBasica";
import { validateMultimedia } from "./useMultimedia";
import { validateAprendizajes } from "./useAprendizajes";
import { validateMalla } from "./useMallaCurricular";
import { validatePerfiles } from "./usePerfiles";

export const useOfertaForm = (idUrl, onSuccessStep) => {
  const queryClient = useQueryClient();
  
  // Determinamos si la vista cargó directamente en modo edición
  const isEditMode = Boolean(idUrl);

  // Estado interno para almacenar el ID del padre recién creado sin mutar la URL
  const [createdId, setCreatedId] = useState(null);
  
  // currentId define el objetivo de la mutación (sea el de la URL o el recién creado)
  const currentId = idUrl || createdId;

  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(isEditMode);

  // 1. CARGA DE DATOS (GET) - Exclusivo para edición nativa
  useEffect(() => {
    if (isEditMode) {
      setIsLoading(true);
      ofertasAdminService.getById(currentId)
        .then((data) => {
          setFormData({
            title: data.title || "",
            slug: data.slug || "",
            subtitle: data.subtitle || "",
            resolution: data.resolution || "",
            duration: data.duration || "",
            modality: data.modality || "",
            title_obtained: data.title_obtained || "",
            isTop: [true, 1, "1"].includes(data.isTop ?? data.is_top),
            description: data.desc || "", 
            img: data.img || "",
            iconName: data.icon_name || "", 
            learnings: data.learnings || [],
            instructor_name: data.instructor_name || "",
            instructor_role: data.instructor_role || "",
            profiles: data.profiles || { egresado: "", profesional: [] },
            modules: data.modules || []
          });
        })
        .catch(() => toast.error("Error al cargar la información."))
        .finally(() => setIsLoading(false));
    }
  }, [isEditMode, currentId]);

  // 2. MANEJADORES DE ESTADO
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
    setFormData((prev) => ({ ...prev, title, slug }));
  };

  // 3. MUTACIÓN DE ESTADOS
  const mutation = useMutation({
    mutationFn: ({ tab, payload }) => {
      // Si estamos en Info Básica y no existe ID padre, se exige un POST
      if (tab === "basica" && !currentId) {
        return ofertasAdminService.create(payload);
      }

      // De lo contrario, todo es actualización por dominio apuntando al currentId
      const endpoints = {
        basica: ofertasAdminService.update,
        multimedia: ofertasAdminService.updateMultimedia,
        aprendizajes: ofertasAdminService.updateLearnings, 
        malla: ofertasAdminService.updateModules,
        perfiles: ofertasAdminService.updateProfiles
      };
      
      return endpoints[tab](currentId, payload);
    },
    onSuccess: (response, variables) => {
      toast.success(response?.message || "Guardado exitoso.");
      queryClient.invalidateQueries(["admin-ofertas"]);
      if (currentId) queryClient.invalidateQueries(["oferta-admin", currentId]);

      // Si es el POST inicial, inyectamos el ID en el estado local y notificamos a la UI
      if (variables.tab === "basica" && !currentId && response?.data?.id) {
        setCreatedId(response.data.id);
        if (onSuccessStep) onSuccessStep(variables.tab, response.data.id);
      } else {
        if (onSuccessStep) onSuccessStep(variables.tab, currentId);
      }
    },
    onError: (err) => {
      const apiErrors = err.response?.data?.errors;
      const message = apiErrors ? Object.values(apiErrors)[0][0] : "Error en la transacción";
      toast.error(message);
    }
  });

  // 4. EJECUTOR
  const saveOferta = (activeTab) => {
    
    // Hard-Block: Exige existencia del padre antes de procesar hijos
    if (!currentId && activeTab !== "basica") {
      toast.error("Debe guardar la Información Básica para inicializar el registro.");
      return;
    }

    let payload = {};
    try {
      switch (activeTab) {
        case "basica": payload = validateBasica(formData); break;
        case "multimedia": payload = validateMultimedia(formData); break;
        case "aprendizajes": payload = validateAprendizajes(formData); break;
        case "malla": payload = validateMalla(formData); break;
        case "perfiles": payload = validatePerfiles(formData); break;
        default: return;
      }
    } catch (error) {
      toast.error(error.message);
      return; 
    }

    mutation.mutate({ tab: activeTab, payload });
  };

  return {
    formData,
    setFormData,
    isLoading,
    isSubmitting: mutation.isPending,
    isEditMode,
    handleChange,
    handleTitleChange,
    saveOferta
  };
};