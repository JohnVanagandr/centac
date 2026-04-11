import axios from "axios";

// Creamos la instancia base con configuraciones por defecto
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api", // Fallback de seguridad
  timeout: 10000, // Si el servidor no responde en 10 segundos, aborta la misión
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// 1. Interceptor de PETICIÓN (El guardia de salida)
apiClient.interceptors.request.use(
  (config) => {
    // Tomamos el token. Asegúrese de que la key ("token") sea la misma que usa en authService
    const token = localStorage.getItem("token"); 
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 2.Interceptor de RESPUESTA (El guardia de entrada)
apiClient.interceptors.response.use(
  // Destructuramos la respuesta para devolver SOLO los datos
  // Así los repositorios quedan más limpios.
  (response) => response.data, 
  
  (error) => {
    // Manejo de "Network Error" (El backend está apagado o no hay internet)
    if (!error.response) {
      console.error("Error de Red: No hay respuesta del servidor.");
      return Promise.reject(new Error("No se pudo conectar con el servidor. Verifica tu conexión a internet."));
    }

    const { status, data } = error.response;

    // Si el servidor responde con 401 (No autorizado / Token vencido)
    if (status === 401) {
      console.warn("Sesión expirada o no autorizada. Redirigiendo al login...");
      localStorage.removeItem("token");
      localStorage.removeItem("user"); 
      window.location.href = "/login";
    }

    // Si el servidor responde con 403 (Prohibido / Sin permisos)
    if (status === 403) {
      console.warn("Acceso denegado: Permisos insuficientes.");
      // Aquí podría redirigir a una vista de "No Autorizado" si lo desea
    }

    // Estandarizar el mensaje de error para que los Servicios lo lean fácil
    const errorMessage = data?.message || data?.error || "Ocurrió un error inesperado en el servidor";
    
    return Promise.reject(new Error(errorMessage));
  },
);

// Lo exportamos con nombre para mantener la coherencia del barrido
export { apiClient };