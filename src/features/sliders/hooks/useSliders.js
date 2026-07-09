import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { slidersService } from "@/services/private/slidersService";

export const useCreateSlider = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => slidersService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["admin-sliders"]);
    },
    onError: () => toast.error("Ocurrió un error al crear el slider.")
  });
};

export const useAdminSliders = () => {
  return useQuery({
    queryKey: ["admin-sliders"],
    queryFn: () => slidersService.getAll(),
    staleTime: 1000 * 60 * 5,
  });
};

export const useAdminSlider = (id) => {
  return useQuery({
    queryKey: ["admin-slider", id],
    queryFn: () => slidersService.getById(id),
    enabled: !!id,
    staleTime: 0,
  });
};

export const useUpdateSlider = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => slidersService.update(id, data),
    onSuccess: () => {
      toast.success("Slider actualizado correctamente.");
      queryClient.invalidateQueries(["admin-sliders"]);
      queryClient.invalidateQueries(["admin-slider"]);
    },
    onError: () => toast.error("Ocurrió un error al guardar los cambios.")
  });
};

export const useDeleteSlider = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => slidersService.delete(id),
    onSuccess: () => {
      toast.success("Slider eliminado permanentemente.");
      queryClient.invalidateQueries(["admin-sliders"]);
    },
    onError: () => toast.error("Error al eliminar el slider.")
  });
};