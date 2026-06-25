import { useState, useEffect, useCallback } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import confetti from "canvas-confetti";
import { leadService } from "@/services/leadService";

export const useLeadDetail = (id) => {
  const queryClient = useQueryClient();

  const [solicitud, setSolicitud] = useState(null);
  const [estado, setEstado] = useState("");
  const [nota, setNota] = useState("");
  const [cargando, setCargando] = useState(true);

  // Función para cargar los datos del lead
  const cargarLead = useCallback(async () => {
    try {
      setCargando(true);
      const backendData = await leadService.obtenerLeadPorId(id);

      if (backendData) {
        const dataMapeada = {
          id: backendData.id,
          aprendiz: backendData.full_name,
          email: backendData.email,
          telefono: backendData.phone,
          fuente: backendData.source,
          estado: backendData.status || "Pendiente",
          programa: backendData.program?.title || "No asignado",
          fecha: backendData.created_at ? new Date(backendData.created_at).toLocaleDateString() : "N/A",
          mensaje: backendData.notes || "Sin comentarios iniciales.",
          comentarios: backendData.comments || []
        };

        setSolicitud(dataMapeada);
        setEstado(dataMapeada.estado);
      } else {
        setSolicitud({ error: true });
      }
    } catch (error) {
      console.error("Error al procesar el expediente:", error);
      setSolicitud({ error: true });
    } finally {
      setCargando(false);
    }
  }, [id]);

  // Carga inicial
  useEffect(() => {
    if (id) {
      cargarLead();
    }
  }, [id, cargarLead]);

  // Mutación para actualizar el estado
  const updateMutation = useMutation({
    mutationFn: (nuevoEstado) => leadService.actualizarLead(id, nuevoEstado),
    onSuccess: (_, variables) => {
      // Invalidamos la lista de prospectos para que la tabla se refresque automáticamente
      queryClient.invalidateQueries({ queryKey: ["prospects"], exact: false });

      if (variables === "Matriculado") {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563eb", "#10b981", "#f59e0b"]
        });
      }
      alert("Estado del lead actualizado con éxito");
    },
    onError: () => {
      alert("Error al actualizar el estado en el servidor");
    }
  });

  const handleUpdate = () => {
    updateMutation.mutate(estado);
  };

  const handleSaveNota = async () => {
    if (!nota.trim()) return;
    try {
      await leadService.agregarComentario(id, nota);
      setNota("");
      // Refrescamos el detalle para ver el comentario nuevo
      await cargarLead(); 
    } catch (error) {
      alert("Error al registrar la interacción en el servidor");
    }
  };

  return {
    solicitud,
    estado,
    setEstado,
    nota,
    setNota,
    cargando: cargando || updateMutation.isPending,
    handleUpdate,
    handleSaveNota
  };
};