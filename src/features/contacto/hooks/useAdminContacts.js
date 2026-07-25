import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { contactsAdminService } from "../services/contactsAdminService";
import { toast } from "react-hot-toast";

export const useAdminContacts = (filters) => {
  return useQuery({
    queryKey: ["admin-contacts-list", filters], 
    queryFn: () => contactsAdminService.getAll(filters),
    staleTime: 1000 * 60 * 5, 
    keepPreviousData: true,
  });
};

export const useAdminContactDetail = (id) => {
  return useQuery({
    queryKey: ["admin-contact-detail", id],
    queryFn: () => contactsAdminService.getById(id),
    enabled: !!id, // Solo se ejecuta si existe un ID
  });
};

export const useUpdateContactStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }) => contactsAdminService.updateStatus(id, status),
    onSuccess: (data, variables) => {
      toast.success("Estado del contacto actualizado.");
      // Actualizamos el detalle actual
      queryClient.invalidateQueries({ queryKey: ["admin-contact-detail", String(variables.id)] });
      // Invalidamos la lista para que al volver esté actualizada
      queryClient.invalidateQueries({ queryKey: ["admin-contacts-list"] });
    },
    onError: () => {
      toast.error("Ocurrió un error al actualizar el estado.");
    }
  });
};