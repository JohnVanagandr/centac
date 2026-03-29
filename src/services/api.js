import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// 1. Interceptor de PETICIÓN (Lo que ya teníamos)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 2. Interceptor de RESPUESTA: El guardián que vigila lo que vuelve del server
api.interceptors.response.use(
  (response) => response, // Si la respuesta es 2xx, pasa derecho
  (error) => {
    // Si el servidor responde con 401 (No autorizado/Token vencido)
    if (error.response && error.response.status === 401) {
      console.warn("Sesión expirada o no autorizada. Redirigiendo...");

      // Limpieza total
      localStorage.removeItem("token");
      localStorage.removeItem("user"); // Si guardas datos del usuario

      // Expulsión inmediata al login
      // Usamos window.location porque aquí no tenemos acceso a los hooks de React Router
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;
