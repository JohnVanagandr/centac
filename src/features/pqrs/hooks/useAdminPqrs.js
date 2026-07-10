import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { pqrsAdminService } from "@/services/private/pqrsAdminService";
import { adminStatusRepository } from "@/services/private/adminStatusService";
import { toast } from "react-hot-toast";

// 1. Hook para la lista paginada y filtrada en el servidor
export const useAdminPqrs = (filters) => {
  return useQuery({
    // Al pasar 'filters' en el array, React Query hace una nueva petición automáticamente si algo cambia
    queryKey: ["admin-pqrs-list", filters], 
    queryFn: () => pqrsAdminService.getAll(filters),
    staleTime: 1000 * 60 * 5, 
    keepPreviousData: true, // Mantiene la data anterior en pantalla mientras carga la nueva página
  });
};

// 2. Hook para los estados (combobox)
export const useAdminStatuses = () => {
  return useQuery({
    queryKey: ["admin-statuses"],
    queryFn: () => adminStatusRepository.getAll(),
    staleTime: 1000 * 60 * 60, // 1 hora de caché
  });
};

export const useAdminPqrsDetail = (id) => {
  return useQuery({
    queryKey: ["admin-pqrs-detail", id],
    queryFn: () => pqrsAdminService.getById(id),
    enabled: !!id, // Solo se ejecuta si hay un ID
  });
};

export const useUpdatePqrsStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status_id }) => pqrsAdminService.updateStatus(id, status_id),
    onSuccess: (data, variables) => {
      toast.success("Estado actualizado correctamente.");
      queryClient.invalidateQueries({ queryKey: ["admin-pqrs-detail", String(variables.id)] });
      queryClient.invalidateQueries({ queryKey: ["admin-pqrs-list"] });
    },
    onError: () => {
      toast.error("Ocurrió un error al actualizar el estado.");
    }
  });
};