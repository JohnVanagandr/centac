import api from "../../services/api"; 

export const registrarNuevoLead = async (values) => {
  const payload = {
    full_name: values.nombre,
    email: values.email,
    phone: values.telefono,
    oferta_id: values.programa, // Viene el ID del programa seleccionado
    message: values.mensaje || "Solicitud de información básica.",
    status: "pendiente",
    priority: "media",
    source: "Sitio Web Oficial",
    created_at: new Date().toISOString()
  };

  const response = await api.post('/leads', payload);
  return response.data;
};