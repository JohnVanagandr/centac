import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useOfertaForm } from "../../hooks/useOfertaForm";
import { toast } from "react-hot-toast";

import TabInfoBasica from "./tabs/TabInfoBasica";
import TabMultimedia from "./tabs/TabMultimedia";
import TabAprendizajes from "./tabs/TabAprendizajes";
import TabMalla from "./tabs/TabMalla";
import TabPerfiles from "./tabs/TabPerfiles";

const TABS_CONFIG = [
  { id: "basica", icon: "info", label: "Información" },
  { id: "multimedia", icon: "image", label: "Multimedia" },
  { id: "aprendizajes", icon: "lightbulb", label: "Características" },
  { id: "malla", icon: "account_tree", label: "Malla Curricular" },
  { id: "perfiles", icon: "psychology", label: "Perfiles" }
];

// Matriz de orden estricto para el Wizard de creación
const TABS_ORDER = TABS_CONFIG.map(t => t.id);

const OfertaEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basica");
  
  // Estado local para rastrear qué pestañas se han completado durante el modo "Creación"
  const [unlockedTabs, setUnlockedTabs] = useState(["basica"]);

  // Controlador de transición de la máquina de estados
  const handleSuccessStep = (completedTab) => {
    // Si estamos editando un programa ya existente, abortamos la lógica progresiva
    if (id) return; 

    const currentIndex = TABS_ORDER.indexOf(completedTab);
    
    // Validamos si existen más pasos en el Wizard
    if (currentIndex < TABS_ORDER.length - 1) {
      const nextTab = TABS_ORDER[currentIndex + 1];
      
      // Desbloquea la siguiente pestaña y hace auto-scroll/switch
      setUnlockedTabs((prev) => [...new Set([...prev, nextTab])]);
      setActiveTab(nextTab);
    } else {
      // Fin del proceso de creación
      toast.success("Programa parametrizado en su totalidad.");
      navigate("/dashboard/ofertas");
    }
  };

  const {
    formData,
    setFormData,
    isLoading,
    isSubmitting,
    isEditMode,
    handleChange,
    handleTitleChange,
    saveOferta
  } = useOfertaForm(id, handleSuccessStep);

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
      
      {/* Cabecera */}
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
              {isEditMode ? "Editar Programa" : "Nuevo Programa"}
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {isEditMode ? `ID: ${id} | Modificando catálogo` : "Construcción por fases del curso"}
            </p>
          </div>
        </div>

        <button 
          onClick={() => saveOferta(activeTab)} 
          disabled={isSubmitting}
          className="bg-brand text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-navy transition-all shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          ) : (
            <span className="material-symbols-rounded text-sm">
              {activeTab === "perfiles" && !isEditMode ? "check_circle" : "save"}
            </span>
          )}
          
          {isSubmitting 
            ? "Procesando..." 
            : (activeTab === "perfiles" && !isEditMode ? "Finalizar Configuración" : "Guardar y Continuar")
          }
        </button>
      </div>

      {/* Navegación Modular (Wizard) */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-8 bg-slate-50 p-2 rounded-2xl border border-slate-100">
        {TABS_CONFIG.map((tab) => {
          
          // Lógica de bloqueo estricto: Deshabilitado si NO es modo edición Y la pestaña no está en el array de desbloqueadas
          const isDisabled = !isEditMode && !unlockedTabs.includes(tab.id);

          return (
            <button
              key={tab.id}
              onClick={() => !isDisabled && setActiveTab(tab.id)}
              disabled={isDisabled}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all ${
                activeTab === tab.id 
                  ? "bg-white text-brand shadow-sm border border-slate-100" 
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-200/50"
              } ${isDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
            >
              <span className="material-symbols-rounded text-[18px]">{tab.icon}</span>
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Motor de Renderizado */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[400px]">
        {activeTab === "basica" && (
          <TabInfoBasica formData={formData} handleChange={handleChange} handleTitleChange={handleTitleChange} />
        )}
        {activeTab === "multimedia" && (
          <TabMultimedia formData={formData} handleChange={handleChange} setFormData={setFormData} />
        )}
        {activeTab === "aprendizajes" && (
          <TabAprendizajes formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "malla" && (
          <TabMalla formData={formData} setFormData={setFormData} />
        )}
        {activeTab === "perfiles" && (
          <TabPerfiles formData={formData} setFormData={setFormData} />
        )}
      </div>
    </div>
  );
};

export default OfertaEditor;