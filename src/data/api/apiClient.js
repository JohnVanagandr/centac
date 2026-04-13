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
  (response) => response.data, 
  
  (error) => {
    if (!error.response) {
      console.error("Error de Red: No hay respuesta del servidor.");
      return Promise.reject(new Error("No se pudo conectar con el servidor. Verifica tu conexión a internet."));
    }

    const { status, data } = error.response;

    // 🌟 EL ESCUDO CORRECTO
    if (status === 401) {
      // Verificamos a qué endpoint se hizo la petición
      // 'error.config.url' contiene la ruta, por ejemplo: "/auth/login"
      const isLoginRequest = error.config?.url?.includes('/login');

      // SOLO expulsamos si el error 401 NO vino de un intento de login
      if (!isLoginRequest) {
        console.warn("Sesión expirada o no autorizada. Redirigiendo al login...");
        localStorage.removeItem("token");
        localStorage.removeItem("centac_user"); // O "user", según como lo guardó
        
        // Ajuste a su ruta visual real de login
        window.location.href = "/auth/login"; 
      }
    }

    if (status === 403) {
      console.warn("Acceso denegado: Permisos insuficientes.");
    }

    const errorMessage = data?.message || data?.error || "Ocurrió un error en el servidor";
    
    // Empacamos la mochila para el Servicio
    const customError = new Error(errorMessage);
    customError.status = status;
    customError.backendData = data;
    
    return Promise.reject(customError);
  },
);

export { apiClient };