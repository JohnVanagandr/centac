import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { ofertasAdminService } from "@/services/private/ofertasAdminService";

export const useAdminOfertas = () => {
  return useQuery({
    queryKey: ["admin-ofertas"],
    queryFn: () => ofertasAdminService.getAll(),
    staleTime: 1000 * 60 * 5, 
  });
};

export const useDeleteOferta = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // Requiere que tu servicio tenga un método delete
    mutationFn: (id) => ofertasAdminService.delete(id),
    onSuccess: () => {
      toast.success("Programa eliminado permanentemente.");
      queryClient.invalidateQueries(["admin-ofertas"]);
    },
    onError: () => toast.error("Error al eliminar el programa.")
  });
};

// Añadir al final del archivo
export const useToggleOfertaStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    // Asegúrate de tener este método en tu ofertasAdminService.js (o usa el endpoint correspondiente)
    mutationFn: ({ id, is_active }) => ofertasAdminService.updateStatus(id, { is_active }),
    onSuccess: (response) => {
      toast.success(response?.message || "Estado del programa actualizado.");
      // Invalida la caché para que la tabla muestre el nuevo estado instantáneamente
      queryClient.invalidateQueries(["admin-ofertas"]);
    },
    onError: () => {
      toast.error("Error al actualizar el estado del programa.");
    }
  });
  
};