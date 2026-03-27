import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useOfertaForm } from "./hooks/useOfertaForm";

// Componentes modulares
import TabInfoBasica from "./components/TabInfoBasica";
import TabMalla from "./components/TabMalla";
import TabMultimedia from "./components/TabMultimedia";
import TabPerfiles from "./components/TabPerfiles";

const OfertaEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basica");

  // Invocamos a nuestro "Cerebro" (Custom Hook)
  const {
    formData,
    setFormData,
    isLoading,
    isSubmitting,
    error,
    handleChange,
    handleTitleChange,
    saveOferta
  } = useOfertaForm(id, () => {
    // Este es el callback onSuccess: Qué hacer cuando guarde bien
    navigate("/dashboard/ofertas");
  });

  const isEditing = Boolean(id);

  // Pantalla de carga completa (Skeleton visual)
  if (isLoading) {
    return (
      <div className="p-10 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-brand rounded-full animate-spin mb-4"></div>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs animate-pulse">
          Cargando configuración del programa...
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto animate-in fade-in duration-500 pb-24">
      
      {/* Cabecera y Botón Guardar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Link 
            to="/dashboard/ofertas" 
            className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
          >
            <span className="material-symbols-rounded text-xl">arrow_back</span>
          </Link>
          <div>
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">
              {isEditing ? "Editar Programa" : "Nuevo Programa"}
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {isEditing ? `ID: ${id} | Modificando catálogo` : "Completa los datos para el nuevo curso"}
            </p>
          </div>
        </div>

        <button 
          onClick={saveOferta}
          disabled={isSubmitting}
          className="bg-brand text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-navy transition-all shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <span className="material-symbols-rounded text-sm">save</span>
          )}
          {isSubmitting ? "Guardando..." : "Guardar Cambios"}
        </button>
      </div>

      {/* Mensaje de Error de Validación o API */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-xl text-sm font-medium flex items-center gap-3 animate-in slide-in-from-top-2">
          <span className="material-symbols-rounded text-red-500">warning</span>
          {error}
        </div>
      )}

      {/* Menú de Pestañas */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 bg-slate-50 p-2 rounded-2xl border border-slate-100">
        {[
          { id: "basica", icon: "info", label: "Info Básica" },
          { id: "malla", icon: "account_tree", label: "Malla Curricular" },
          { id: "multimedia", icon: "photo_library", label: "Multimedia & SEO" },
          { id: "perfiles", icon: "psychology", label: "Perfiles e Instructor" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
              activeTab === tab.id 
                ? "bg-white text-brand shadow-sm border border-slate-100" 
                : "text-slate-400 hover:text-slate-600 hover:bg-slate-200/50"
            }`}
          >
            <span className="material-symbols-rounded text-[18px]">{tab.icon}</span>
            {tab.label}
            {/* Pequeño indicador visual si la pestaña activa tiene un error (opcional para el futuro) */}
          </button>
        ))}
      </div>

      {/* Renderizado Dinámico de Pestañas */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[400px]">
        {activeTab === "basica" && (
          <TabInfoBasica formData={formData} handleChange={handleChange} handleTitleChange={handleTitleChange} />
        )}
        {activeTab === "malla" && (
          <TabMalla formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "multimedia" && (
          <TabMultimedia formData={formData} handleChange={handleChange} />
        )}
        {activeTab === "perfiles" && (
          <TabPerfiles formData={formData} setFormData={setFormData} />
        )}
      </div>

    </div>
  );
};

export default OfertaEditor;