import { useState, useEffect } from "react";
import { ofertasService } from "../../../../services/ofertasService";

export const useOfertaForm = (id, onSuccess) => {
  const isEditing = Boolean(id);

  // Estados de la interfaz
  const [isLoading, setIsLoading] = useState(isEditing);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Estado central de los datos (Con valores por defecto seguros para los opcionales)
  const [formData, setFormData] = useState({
    title: "", 
    subtitle: "", 
    slug: "", 
    resolution: "", 
    duration: "",
    modality: "Presencial", 
    titleObtained: "", 
    isTop: false, 
    iconName: "school",
    img: "", 
    desc: "", 
    aboutHighlights: [], 
    learnings: [], 
    modules: [],
    profiles: { egresado: "", profesional: [] },
    instructor: { name: "", role: "" }
  });

  // 1. CARGAR DATOS (Si estamos editando)
  useEffect(() => {
    if (isEditing) {
      const fetchPrograma = async () => {
        setIsLoading(true);
        try {
          const data = await ofertasService.getById(id);          
          // Al cargar, nos aseguramos de que los objetos anidados existan 
          // por si la base de datos trae un registro antiguo incompleto
          setFormData({
            ...data,
            profiles: data.profiles || { egresado: "", profesional: [] },
            instructor: data.instructor || { name: "", role: "" },
            modules: data.modules || [],
            aboutHighlights: data.aboutHighlights || []
          });
        } catch (err) {
          setError("No se pudo cargar el programa. Verifica la conexión.");
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchPrograma();
    }
  }, [id, isEditing]);

  // 2. MANEJADORES DE ESTADO BÁSICOS
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: newTitle,
      // Autogenerar slug solo en modo creación
      slug: !isEditing ? newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : prev.slug
    }));
  };

  // 3. VALIDACIÓN DE REGLAS DE NEGOCIO (Hard Rules)
  const validateForm = () => {
    // Mapeo de campos obligatorios para dar mensajes amigables
    const requiredFields = [
      { key: 'title', label: 'Nombre del Programa' },
      { key: 'slug', label: 'Enlace URL (Slug)' },
      { key: 'resolution', label: 'Resolución Legal' },
      { key: 'duration', label: 'Duración' },
      { key: 'modality', label: 'Modalidad' },
      { key: 'titleObtained', label: 'Título que se Otorga' }
    ];

    // Verificamos los campos de texto
    for (let field of requiredFields) {
      if (!formData[field.key] || String(formData[field.key]).trim() === "") {
        return `El campo "${field.label}" es obligatorio para registrar el programa.`;
      }
    }

    // Verificamos la malla curricular
    if (!formData.modules || formData.modules.length === 0) {
      return "Debes agregar al menos un módulo en la Malla Curricular.";
    }

    // Si todo está bien, retornamos null
    return null; 
  };

  // 4. ACCIÓN DE GUARDAR (API Call)
  const saveOferta = async () => {
    setError(null);

    // Ejecutamos validación
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return; // Detenemos el guardado si falla la validación
    }

    setIsSubmitting(true);
    try {
      if (isEditing) {
        // En json-server (y la mayoría de APIs REST), usamos PUT para reemplazar todo el objeto o PATCH para actualizar campos específicos.
        await ofertasService.update(id, formData);
      } else {
        await ofertasService.create(formData);
      }
      onSuccess(); // Llamamos al callback (redireccionar al listado)
    } catch (err) {
      setError("Error al guardar el programa. Verifica que tu servidor local esté corriendo.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isLoading,
    isSubmitting,
    error,
    handleChange,
    handleTitleChange,
    saveOferta
  };
};