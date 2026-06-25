import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { leadService } from "@/services/leadService";

import { DetalleHeader } from "./components/dashboard/detalle/DetalleHeader";
import { DetalleInfoCard } from "./components/dashboard/detalle/DetalleInfoCard";
import { DetalleSidebarActions } from "./components/dashboard/detalle/DetalleSidebarActions";
import { DetalleBitacora } from "./components/dashboard/detalle/DetalleBitacora";

export const SolicitudDetalleContenedor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [solicitud, setSolicitud] = useState(null);
  const [estado, setEstado] = useState("");
  const [nota, setNota] = useState("");
  const [cargando, setCargando] = useState(true);

  // Aislamos la función de carga para poder refrescar el componente al guardar notas
  const cargarLead = async () => {
    try {
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
          // 🌟 Capturamos el arreglo de comentarios que envía Laravel
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
  };

  useEffect(() => {
    cargarLead();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await leadService.actualizarLead(id, estado);
      if (estado === "Matriculado") {
        confetti({ 
          particleCount: 150, 
          spread: 70, 
          origin: { y: 0.6 }, 
          colors: ["#2563eb", "#10b981", "#f59e0b"] 
        });
      }
      alert("Estado del lead actualizado con éxito");
    } catch (error) {
      alert("Error al actualizar el estado en el servidor");
    }
  };

  const handleSaveNota = async () => {
    if (!nota.trim()) return;
    try {
      // Enviamos el comentario. Laravel asume el usuario logueado mediante el Auth Token corporativo
      await leadService.agregarComentario(id, nota);
      setNota("");
      
      // 🌟 Refrescamos los datos de inmediato para traer la nota con el nombre real del comercial
      await cargarLead(); 
    } catch (error) {
      alert("Error al registrar la interacción en el servidor");
    }
  };

  if (cargando) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  if (solicitud?.error) {
    return (
      <div className="p-20 text-center bg-red-50 text-red-600 rounded-2xl m-8 border border-red-100">
        <h3 className="text-xl font-black mb-2 text-red-800">Expediente no disponible</h3>
        <p className="font-medium">Ocurrió un inconveniente al conectar con el servidor.</p>
        <button onClick={() => navigate(-1)} className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-widest">
          Regresar
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-700 pb-24">
      <DetalleHeader id={solicitud.id} estado={estado} onBack={() => navigate(-1)} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <DetalleInfoCard solicitud={solicitud} />
          
          {/* Inyectamos el listado mapeado dinámicamente */}
          <DetalleBitacora 
            nota={nota} 
            setNota={setNota} 
            onSaveNota={handleSaveNota} 
            comentarios={solicitud.comentarios} 
          />
        </div>
        <div className="lg:col-span-1">
          <DetalleSidebarActions estado={estado} setEstado={setEstado} onUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
};