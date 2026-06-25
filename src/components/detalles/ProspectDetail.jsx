import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "@/services/api";

const ProspectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [prospect, setProspect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProspect = async () => {
      try {
        setLoading(true);
        setError(null);
        // Hacemos la llamada al endpoint exacto /admin/prospects/${id}
        const res = await api.get(`/admin/prospects/${id}`);
        // Guardamos directamente 'res.data.data' en el estado 'prospect'
        setProspect(res.data.data);
      } catch (err) {
        console.error("Error al obtener el prospecto:", err);
        setError(err.response?.data?.message || "Error al cargar la información del prospecto.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProspect();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center bg-slate-50/50 p-8 rounded-[2rem] border border-slate-200/60 shadow-inner">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-400 font-bold text-xs tracking-widest uppercase animate-pulse">
            Cargando expediente...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-[2rem] border border-slate-200/60 shadow-sm text-center space-y-6">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
          <span className="material-symbols-rounded text-3xl">error</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-black text-slate-800">Ha ocurrido un error</h3>
          <p className="text-sm text-slate-500 font-medium">{error}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-slate-900 hover:bg-brand text-white rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md"
        >
          Volver atrás
        </button>
      </div>
    );
  }

  if (!prospect) {
    return (
      <div className="max-w-2xl mx-auto my-12 p-8 bg-white rounded-[2rem] border border-slate-200/60 shadow-sm text-center">
        <p className="text-slate-400 font-medium text-sm italic">
          No se encontró la información de este prospecto.
        </p>
      </div>
    );
  }

  // Estilo del badge según status
  const getStatusStyles = (status) => {
    switch (status) {
      case "Pendiente":
        return "bg-amber-50 text-amber-600 border-amber-200/60";
      case "Contactado":
        return "bg-blue-50 text-blue-600 border-blue-200/60";
      case "Matriculado":
        return "bg-emerald-50 text-emerald-600 border-emerald-200/60";
      case "No Interesado":
        return "bg-slate-50 text-slate-500 border-slate-200/60";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200/60";
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-4 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* Botón de regreso & Cabecera simple */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-brand font-bold text-xs uppercase tracking-widest transition-colors w-fit group"
        >
          <span className="material-symbols-rounded text-lg group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Volver a Solicitudes
        </button>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Detalle del Prospecto ID: #{id}
        </span>
      </div>

      {/* Cabecera Principal */}
      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm p-8 bg-slate-50/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center text-3xl font-black text-brand shadow-md ring-4 ring-slate-50/50">
              {prospect.full_name?.charAt(0).toUpperCase() || "?"}
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-black text-slate-800 tracking-tight leading-tight">
                {prospect.full_name}
              </h1>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider border ${getStatusStyles(prospect.status)}`}>
                  {prospect.status}
                </span>
                <span className="text-slate-300">•</span>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Lead Registrado
                </p>
              </div>
            </div>
          </div>

          {/* Botones rápidos de contacto */}
          <div className="flex flex-wrap items-center gap-3">
            {prospect.phone && (
              <a
                href={`tel:${prospect.phone}`}
                className="flex items-center gap-2.5 px-5 py-3 bg-slate-100 text-slate-700 rounded-2xl border border-slate-200 hover:bg-slate-900 hover:text-white transition-all shadow-sm group text-xs font-bold uppercase tracking-wider"
              >
                <span className="material-symbols-rounded text-base text-slate-500 group-hover:text-slate-300">
                  call
                </span>
                Llamar
              </a>
            )}
            {prospect.phone && (
              <a
                href={`https://wa.me/${prospect.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100 hover:bg-emerald-500 hover:text-white transition-all shadow-sm group text-xs font-bold uppercase tracking-wider"
              >
                <span className="material-symbols-rounded text-base text-emerald-500 group-hover:text-white">
                  chat
                </span>
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna Izquierda: Datos Personales & Programa */}
        <div className="lg:col-span-2 space-y-8">
          {/* Ficha de Información de Expediente */}
          <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
              <h3 className="text-xs font-black text-slate-800 flex items-center gap-2 uppercase tracking-wider">
                <span className="material-symbols-rounded text-brand text-lg">
                  account_box
                </span>
                Expediente de Datos Personales
              </h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Correo Electrónico
                  </p>
                  <a
                    href={`mailto:${prospect.email}`}
                    className="text-sm font-bold text-slate-700 hover:text-brand transition-colors break-all"
                  >
                    {prospect.email}
                  </a>
                </div>
                <div className="space-y-1 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Teléfono
                  </p>
                  <p className="text-sm font-bold text-slate-700">
                    {prospect.phone}
                  </p>
                </div>
              </div>

              {/* Mensaje Inicial */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Mensaje Inicial del Usuario
                </p>
                <div className="p-6 bg-slate-50/30 rounded-2xl border border-slate-200/60 italic text-sm text-slate-600 leading-relaxed relative">
                  <span className="absolute -top-3 left-4 bg-white px-2 text-[10px] font-black text-brand uppercase tracking-widest border border-slate-100 rounded-md">
                    Mensaje Recibido
                  </span>
                  "{prospect.message}"
                </div>
              </div>
            </div>
          </div>

          {/* Ficha de Programa Académico */}
          <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
              <h3 className="text-xs font-black text-slate-800 flex items-center gap-2 uppercase tracking-wider">
                <span className="material-symbols-rounded text-brand text-lg">
                  school
                </span>
                Programa Académico de Interés
              </h3>
            </div>
            <div className="p-8 space-y-8">
              {/* Contenedor del Programa */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {prospect.program?.img && (
                  <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden border border-slate-100 flex-shrink-0 shadow-sm">
                    <img
                      src={prospect.program?.img}
                      alt={prospect.program?.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="space-y-3 flex-grow">
                  <div>
                    <h4 className="text-xl font-black text-slate-800">
                      {prospect.program?.title}
                    </h4>
                    {prospect.program?.subtitle && (
                      <p className="text-xs font-bold text-slate-400 mt-0.5">
                        {prospect.program?.subtitle}
                      </p>
                    )}
                  </div>
                  {prospect.program?.duration && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand/5 border border-brand/10 text-brand rounded-lg text-xs font-bold">
                      <span className="material-symbols-rounded text-sm">schedule</span>
                      {prospect.program?.duration}
                    </div>
                  )}
                </div>
              </div>

              {/* Aprendizajes */}
              {prospect.program?.learnings && prospect.program.learnings.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    ¿Qué aprenderá en este programa?
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {prospect.program?.learnings?.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 bg-slate-50/40 border border-slate-100 rounded-xl flex items-start gap-3 hover:bg-slate-50 hover:border-slate-200 transition-colors text-xs leading-relaxed text-slate-600"
                      >
                        <span className="material-symbols-rounded text-brand text-lg mt-0.5">
                          check_circle
                        </span>
                        <div>
                          <strong>{item.title}</strong>: {item.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Columna Derecha: Historial de Seguimiento (Comments) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden h-full flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
              <h3 className="text-xs font-black text-slate-800 flex items-center gap-2 uppercase tracking-wider">
                <span className="material-symbols-rounded text-brand text-lg">
                  forum
                </span>
                Historial de Seguimiento
              </h3>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2.5 py-1 rounded-md border border-slate-200/60">
                Bitácora
              </span>
            </div>

            <div className="p-6 flex-grow space-y-6">
              {prospect.comments && prospect.comments.length > 0 ? (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                  {prospect.comments?.map((c) => (
                    <div
                      key={c.id}
                      className="comment-card p-4 bg-slate-50/60 border border-slate-100 rounded-2xl relative space-y-2 hover:bg-white hover:shadow-sm transition-all duration-300 group"
                    >
                      <div className="absolute left-0 top-4 w-1 h-8 bg-brand rounded-r-full group-hover:h-12 transition-all"></div>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium">
                        {c.comment}
                      </p>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider pt-2 border-t border-slate-100/50">
                        Por: {c.author?.name} - {c.created_at}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center space-y-2 my-auto">
                  <span className="material-symbols-rounded text-3xl text-slate-300">chat_bubble_outline</span>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Sin comentarios
                  </p>
                  <p className="text-[11px] text-slate-400 max-w-[200px] mx-auto">
                    No se han registrado comentarios o notas de seguimiento para este prospecto.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProspectDetail;
