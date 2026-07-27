import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLeadDetail } from "./hooks/useLeadDetail";

// Componentes Visuales
import { DetalleHeader } from "./components/dashboard/detalle/DetalleHeader";
import { DetalleInfoCard } from "./components/dashboard/detalle/DetalleInfoCard";
import { DetalleSidebarActions } from "./components/dashboard/detalle/DetalleSidebarActions";
import { DetalleBitacora } from "./components/dashboard/detalle/DetalleBitacora";

export const SolicitudDetalleContenedor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    solicitud,
    estado,
    setEstado,
    nota,
    setNota,
    cargando,
    isUpdating, // 🌟 Lo recibimos aquí
    isLocked, 
    handleUpdate,
    handleSaveNota
  } = useLeadDetail(id);

  if (cargando) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  if (solicitud?.error) {
    return (
      <div className="p-20 text-center bg-red-50 text-red-600 rounded-[2rem] m-8 border border-red-100 shadow-sm">
        <h3 className="text-xl font-black mb-2 text-red-800">Expediente no disponible</h3>
        <p className="font-medium">Ocurrió un inconveniente al conectar con el servidor.</p>
        <button 
          onClick={() => navigate(-1)} 
          className="mt-6 px-8 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand transition-colors"
        >
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
          
          <DetalleBitacora 
            nota={nota} 
            setNota={setNota} 
            onSaveNota={handleSaveNota} 
            comentarios={solicitud.comentarios} 
          />
        </div>
        
        <div className="lg:col-span-1">
          <DetalleSidebarActions 
            estado={estado} 
            setEstado={setEstado} 
            onUpdate={handleUpdate}
            isLocked={isLocked}
            isUpdating={isUpdating} // 🌟 Se lo pasamos al componente visual
          />
        </div>
      </div>
    </div>
  );
};