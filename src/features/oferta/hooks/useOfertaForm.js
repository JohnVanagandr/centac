import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { ofertasAdminService } from "@/services/private/ofertasAdminService";

export const useOfertaForm = (id, onSuccessCallback) => {
  const queryClient = useQueryClient();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(isEditing);

  // ==========================================
  // 1. CARGA DE DATOS (GET)
  // ==========================================
  useEffect(() => {
    if (isEditing) {
      setIsLoading(true);
      ofertasAdminService.getById(id)
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
            
            // 🌟 TRADUCCIÓN INICIAL: Backend (icon_name) -> Frontend (iconName)
            iconName: data.icon_name || "", 
            
            learnings: data.learnings || [],
            instructor_id: data.instructor_id || null,
            profiles: data.profiles || { egresado: "", profesional: [] },
            modules: data.modules || []
          });
        })
        .catch(() => toast.error("Error al cargar la información."))
        .finally(() => setIsLoading(false));
    }
  }, [id, isEditing]);

  // ==========================================
  // 2. MANEJADORES DE ESTADO
  // ==========================================
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

  // ==========================================
  // 3. MUTACIÓN ORQUESTADA
  // ==========================================
  const mutation = useMutation({
    mutationFn: ({ tab, payload }) => {
      if (!isEditing) return ofertasAdminService.create(payload);

      const endpoints = {
        basica: ofertasAdminService.update,
        multimedia: ofertasAdminService.updateMultimedia,
        aprendizajes: ofertasAdminService.updateLearnings, 
        malla: ofertasAdminService.updateModules,
        perfiles: ofertasAdminService.updateProfiles
      };
      
      return endpoints[tab](id, payload);
    },
    onSuccess: (response, variables) => {
      const message = response?.message || "Guardado exitoso.";
      toast.success(message);

        queryClient.invalidateQueries(["admin-ofertas"]);
        queryClient.invalidateQueries(["oferta-admin", id]);

        if (variables.shouldRedirect && onSuccessCallback) {
            onSuccessCallback(response);
        }
    },
    onError: (err) => {
      const apiErrors = err.response?.data?.errors;
      const message = apiErrors ? Object.values(apiErrors)[0][0] : "Error al guardar los cambios";
      toast.error(message);
    }
  });

  // ==========================================
  // 4. CONSTRUCTOR DE PAYLOADS (PUT)
  // ==========================================
  const saveOferta = (activeTab, shouldRedirect = false) => {
    let payload = {};

    switch (activeTab) {
      case "basica":
        // (Opcional) Puedes agregar validación si lo deseas obligatorio
        if (!formData.iconName || formData.iconName.trim() === "") {
          toast.error("Debe seleccionar un ícono representativo.");
          return;
        }

        payload = {
          title: formData.title,
          slug: formData.slug,
          subtitle: formData.subtitle,
          resolution: formData.resolution,
          duration: formData.duration,
          modality: formData.modality,
          title_obtained: formData.title_obtained,
          is_top: Boolean(formData.isTop),
          desc: formData.description,
          icon_name: formData.iconName?.trim(), 
        };
        break;

      case "multimedia": {
        const img = formData.img?.trim();

        if (!img || img === "") {
          toast.error("La URL de la imagen de portada es obligatoria.");
          return; 
        }
        if (!img.startsWith("http://") && !img.startsWith("https://")) {
          toast.error("La URL de la imagen debe ser válida (http:// o https://).");
          return;
        }
        payload = {
          img: img,
        };
        break;
      }
      case "aprendizajes": {
        const currentLearnings = formData.learnings || [];

        for (let i = 0; i < currentLearnings.length; i++) {
          const item = currentLearnings[i];
          
          if (!item.title || item.title.trim() === "") {
            toast.error(`La característica #${i + 1} debe tener un título.`);
            return;
          }
          if (!item.text || item.text.trim() === "") {
            toast.error(`La característica "${item.title || i + 1}" no tiene descripción.`);
            return;
          }
        }
        
        // El payload arma el arreglo limpio y envía "icon" tal como espera tu migración
        payload = {
          learnings: currentLearnings.map(l => ({
            title: l.title.trim(),
            text: l.text.trim(),
            icon: l.icon || null
          }))
        };
        break;
      }

      case "malla": {
        const currentModules = formData.modules || [];

        for (let i = 0; i < currentModules.length; i++) {
          const mod = currentModules[i];
          
          if (!mod.title || mod.title.trim() === "") {
            toast.error(`El módulo ${mod.number || i + 1} no tiene título.`);
            return;
          }
          if (!mod.items || mod.items.length === 0) {
            toast.error(`El módulo "${mod.title}" debe tener al menos un tema.`);
            return; 
          }
          for (let j = 0; j < mod.items.length; j++) {
            const item = mod.items[j];
            if (!item.description || item.description.trim() === "") {
              toast.error(`El tema ${j + 1} del módulo "${mod.title}" está vacío.`);
              return; 
            }
          }
        }

        payload = { 
          modules: currentModules.map((mod, index) => ({
            title: mod.title,
            number: mod.number || (index + 1),
            items: (mod.items || []).map(item => item.description)
          }))
        };
        break;
      }

      case "perfiles": {
        // Validación de Perfiles
        const { egresado, profesional } = formData.profiles || {};
        if (!egresado || egresado.trim() === "") {
          toast.error("El perfil de egreso es obligatorio.");
          return;
        }

        payload = {
          profiles: {
            egresado: egresado.trim(),
            profesional: profesional ? profesional.filter(r => r.trim() !== "").map(r => r.trim()) : []
          }
        };
        break;
      }
      
      default:
        return;
    }    

    mutation.mutate({ tab: activeTab, payload, shouldRedirect });
  };

  return {
    formData,
    setFormData,
    isLoading,
    isSubmitting: mutation.isPending,
    handleChange,
    handleTitleChange,
    saveOferta
  };
};