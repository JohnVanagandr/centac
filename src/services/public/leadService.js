import api from "../api";

export const leadService = {
  create: async (rawData) => {
    try {
      const payload = {
        // Generamos un ID simple para simular el autoincremental de la BD
        id: `SOL-${Date.now().toString().slice(-4)}`,
        full_name: rawData.nombre, 
        email: rawData.email,
        phone: rawData.telefono,
        oferta_id: rawData.programa, // "programa" trae el ID desde el <select>
        message: rawData.mensaje || "Interesado en más información.",
        status: "pendiente",
        priority: "media",
        source: "Sitio Web Oficial",
        created_at: new Date().toISOString()
      };

      const response = await api.post('/leads', payload);
      return response.data;
    } catch (error) {
      console.error("Error al registrar el lead:", error);
      throw error;
    }
  }
};