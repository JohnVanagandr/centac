// src/hooks/useLeadDetail.js
import { useState, useEffect, useCallback } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import confetti from "canvas-confetti";
import { leadService } from "@/services/leadService";
import { canChangeLeadStatus } from "../constants/leadConstants";
import { toast } from "react-hot-toast";

export const useLeadDetail = (id) => {
  const queryClient = useQueryClient();

  const [solicitud, setSolicitud] = useState(null);
  const [estado, setEstado] = useState("");
  const [nota, setNota] = useState("");
  const [cargando, setCargando] = useState(true);

  const isLocked = !canChangeLeadStatus(solicitud?.estado);

  // 🌟 Recibe un parámetro para saber si debe mostrar el spinner (pantalla de carga) o no
  const cargarLead = useCallback(async (mostrarPantallaCarga = true) => {
    try {
      if (mostrarPantallaCarga) setCargando(true);
      
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
        // Solo actualizamos el estado si no hay cambios locales pendientes
        setEstado(prev => prev !== dataMapeada.estado ? dataMapeada.estado : prev);
      } else {
        setSolicitud({ error: true });
      }
    } catch (error) {
      console.error("Error al procesar el expediente:", error);
      setSolicitud({ error: true });
      toast.error("No se pudo cargar la información del expediente.");
    } finally {
      if (mostrarPantallaCarga) setCargando(false);
    }
  }, [id]);

  useEffect(() => {
    if (id) cargarLead(true); // Primera carga sí muestra el spinner
  }, [id, cargarLead]);

  const updateMutation = useMutation({
    mutationFn: (nuevoEstado) => leadService.actualizarLead(id, nuevoEstado),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["prospects"], exact: false });
      
      setSolicitud(prev => ({ ...prev, estado: variables }));

      if (variables === "Matriculado") {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ["#2563eb", "#10b981", "#f59e0b"] });
      }
      
      // 🌟 Toast de éxito
      toast.success(`Expediente actualizado a ${variables}`);
    },
    onError: () => {
      // 🌟 Toast de error
      toast.error("Ocurrió un problema al actualizar el estado.");
    }
  });

  const handleUpdate = () => {
    if (isLocked) {
      toast.error("Este expediente está matriculado y no admite cambios.");
      return;
    }
    updateMutation.mutate(estado);
  };

  const handleSaveNota = async () => {
    if (!nota.trim()) return;
    try {
      await leadService.agregarComentario(id, nota);
      setNota("");
      toast.success("Interacción registrada correctamente.");
      
      await cargarLead(false); 
    } catch (error) {
      toast.error("No se pudo registrar la interacción.");
    }
  };

  return {
    solicitud,
    estado,
    setEstado,
    nota,
    setNota,
    cargando,
    isUpdating: updateMutation.isPending,
    isLocked, 
    handleUpdate,
    handleSaveNota
  };
};