import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useAdminPqrsDetail, useUpdatePqrsStatus, useAdminStatuses } from "../../hooks/useAdminPqrs";
import { Badge } from "@/components/ui/DataDisplay";
import { Button } from "@/components/ui/Navigation";
import { SelectField } from "@/components/ui/Form";

const PqrsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 1. Obtener datos
  const { data: pqrs, isLoading: isLoadingPqrs } = useAdminPqrsDetail(id);
  const { data: estados = [], isLoading: isLoadingStatuses } = useAdminStatuses();
  const { mutate: updateStatus, isPending: isUpdating } = useUpdatePqrsStatus();

  // 2. Estado local para el Select de actualización
  const [selectedStatus, setSelectedStatus] = useState("");

  // 3. Sincronizar el estado actual cuando la data cargue
  useEffect(() => {
    if (pqrs?.status?.id) {
      setSelectedStatus(pqrs.status.id);
    }
  }, [pqrs]);

  const handleUpdate = () => {
    if (!selectedStatus || selectedStatus == pqrs?.status?.id) return;
    updateStatus(
      { id, status_id: selectedStatus },
      {
        onSuccess: () => {
          navigate("/dashboard/pqr"); 
        }
      }
    );
  };

  const opcionesEstados = estados.map(estado => ({ value: estado.id, label: estado.name }));

  if (isLoadingPqrs) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-brand rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!pqrs) {
    return (
      <div className="text-center py-20 text-slate-500 font-bold">
        No se encontró la solicitud PQRS.
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-6xl mx-auto pb-10">
      
      {/* Cabecera */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-black text-navy tracking-tight">Detalle PQRS #{pqrs.id}</h2>
          <p className="text-sm text-slate-500 mt-1 font-medium">Revisa la información y actualiza el estado del trámite.</p>
        </div>
        <Button as={Link} to="/dashboard/pqr" variant="ghost" intent="navy" size="sm" className="bg-white">
          <span className="material-symbols-rounded text-[18px]">arrow_back</span>
          Volver a la lista
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: Información de la PQRS (Ocupa 2 espacios) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Tarjeta: Información del Solicitante */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="border-b border-slate-50 pb-3">
              <h3 className="text-sm font-black uppercase tracking-[2px] text-brand">Datos del Solicitante</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Nombre Completo</label>
                <span className="text-sm font-bold text-navy">{pqrs.applicant?.full_name || "N/A"}</span>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Documento de Identidad</label>
                <span className="text-sm font-bold text-navy">
                  {pqrs.applicant?.document_type?.acronym || ""} {pqrs.applicant?.document_number || "N/A"}
                </span>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Correo Electrónico</label>
                <span className="text-sm font-bold text-navy">{pqrs.applicant?.email || "N/A"}</span>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Teléfono</label>
                <span className="text-sm font-bold text-navy">{pqrs.applicant?.phone || "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Tarjeta: Detalle de la Solicitud */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="border-b border-slate-50 pb-3 flex items-center justify-between">
              <h3 className="text-sm font-black uppercase tracking-[2px] text-navy">Detalle de la {pqrs.type?.name}</h3>
              <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-lg">
                Respondemos en {pqrs.type?.response_days} días
              </span>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-1">Asunto</label>
                <span className="text-base font-black text-navy">{pqrs.subject}</span>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 block mb-2">Mensaje / Descripción</label>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm text-slate-600 leading-relaxed font-medium">
                  {pqrs.description}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: Panel de Estado y Tiempos */}
        <div className="space-y-6">
          
          {/* Tarjeta de Gestión (Estado) */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
            <div className="border-b border-slate-50 pb-3">
              <h3 className="text-sm font-black uppercase tracking-[2px] text-brand">Gestión</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Estado Actual:</span>
                <Badge 
                  variant="solid" 
                  intent={
                    pqrs.status?.name === "Resuelto" ? "success" : 
                    pqrs.status?.name === "En Revisión" || pqrs.status?.name === "En Trámite" ? "info" : 
                    "warning"
                  }
                >
                  {pqrs.status?.name}
                </Badge>
              </div>

              <div className="pt-4 border-t border-slate-50">
                <SelectField 
                  label="Cambiar Estado"
                  options={opcionesEstados}
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  disabled={isLoadingStatuses || isUpdating}
                />
              </div>

              <Button 
                onClick={handleUpdate} 
                disabled={isUpdating || selectedStatus == pqrs.status?.id}
                intent="brand" 
                size="full"
              >
                {isUpdating ? "Actualizando..." : "Actualizar Estado"}
              </Button>
            </div>
          </div>

          {/* Tarjeta: Tiempos de Radicación */}
          <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[2px] text-slate-400">Cronología</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-500">Radicado el:</span>
                <span className="font-black text-navy">{new Date(pqrs.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-500">Tiempo:</span>
                <span className="font-black text-navy capitalize">{pqrs.radicated_since}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PqrsDetail;