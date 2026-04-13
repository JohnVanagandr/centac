import axios from "axios";
import { handleStatusError } from "./statusHandlers";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response.data, 
  
  (error) => {
    // 1. Error de Red (Servidor apagado o sin internet)
    if (!error.response) {
      console.error("Error de Red: No hay respuesta del servidor.");
      return Promise.reject(new Error("No se pudo conectar con el servidor. Verifica tu conexión."));
    }

    const { status, data } = error.response;

    // 🌟 2. DELEGACIÓN TOTAL AL DESPACHADOR
    const errorMessage = handleStatusError(status, data, error.config);
    
    // 3. Empacamos el error personalizado con todos los datos que el Servicio necesita
    const customError = new Error(errorMessage);
    customError.status = status;
    customError.backendData = data;
    
    return Promise.reject(customError);
  },
);

export { apiClient };