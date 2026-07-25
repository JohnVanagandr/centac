import React from "react";
import { useNavigate } from "react-router-dom";
import { useAdminContactDetail, useUpdateContactStatus } from "../../hooks/useAdminContacts";
import { Badge } from "@/components/ui/DataDisplay";

const ContactDetail = ({ id }) => {
  const navigate = useNavigate();
  const { data: contact, isLoading, isError } = useAdminContactDetail(id);
  const { mutate: updateStatus, isLoading: isUpdating } = useUpdateContactStatus();

  if (isLoading) return <div className="p-10 text-center text-slate-500 font-bold">Cargando detalle del contacto...</div>;
  if (isError || !contact) return <div className="p-10 text-center text-red-500 font-bold">Error al cargar el contacto.</div>;

  // Manejadores de acciones
  const handleMarkAsAttended = () => {
    updateStatus({ id, status: "Atendido" });
  };

  const handleCloseContact = () => {
    updateStatus({ id, status: "Cerrado" });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      {/* Cabecera y Botón Volver */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand transition-colors mb-2 font-medium"
          >
            <span className="material-symbols-rounded text-[18px]">arrow_back</span>
            Volver a la lista
          </button>
          <h1 className="text-3xl font-black text-navy tracking-tight">
            Detalle de <span className="text-brand">Contacto</span>
          </h1>
        </div>
        
        {/* Acciones de Ciclo de Vida */}
        <div className="flex items-center gap-3">
          {contact.status !== "Atendido" && contact.status !== "Cerrado" && (
            <button 
              onClick={handleMarkAsAttended}
              disabled={isUpdating}
              className="bg-brand/10 text-brand px-4 py-2 rounded-xl font-bold text-sm hover:bg-brand/20 transition-colors disabled:opacity-50"
            >
              Marcar como Atendido
            </button>
          )}
          {contact.status !== "Cerrado" && (
            <button 
              onClick={handleCloseContact}
              disabled={isUpdating}
              className="bg-navy text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-navy/90 transition-colors disabled:opacity-50"
            >
              Cerrar Contacto
            </button>
          )}
        </div>
      </div>

      {/* Contenedor de Información */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tarjeta de Información del Usuario (Columna Izquierda) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Información del Solicitante</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-lg font-black text-brand uppercase">
                {contact.name ? contact.name.charAt(0) : "U"}
              </div>
              <div>
                <p className="font-black text-navy text-base">{contact.name}</p>
                <Badge variant="solid" intent={contact.status === "Cerrado" ? "success" : contact.status === "Atendido" ? "info" : "warning"}>
                  {contact.status || "Pendiente"}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase">Correo Electrónico</p>
              <p className="text-sm font-medium text-navy">{contact.email}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase">Teléfono</p>
              <p className="text-sm font-medium text-navy">{contact.phone || "No registrado"}</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase">Fecha de Solicitud</p>
              <p className="text-sm font-medium text-navy">
                {new Date(contact.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta de Mensaje (Columna Derecha) */}
        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Detalle del Mensaje</h3>
          
          <div className="mb-4 pb-4 border-b border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Asunto</p>
            <p className="text-lg font-black text-navy">{contact.subject || "Sin asunto específico"}</p>
          </div>

          <div className="flex-1">
            <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">Mensaje</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-600 leading-relaxed whitespace-pre-wrap font-medium">
              {contact.message || "El usuario no dejó un mensaje."}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactDetail;