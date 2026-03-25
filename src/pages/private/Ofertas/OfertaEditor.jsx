import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { programasData } from "../../../data/ofertaData";

// Importamos los componentes modulares
import TabInfoBasica from "./components/TabInfoBasica";
import TabMalla from "./components/TabMalla";
import TabMultimedia from "./components/TabMultimedia";
import TabPerfiles from "./components/TabPerfiles";

const OfertaEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [activeTab, setActiveTab] = useState("basica");

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    slug: "",
    resolution: "",
    duration: "",
    modality: "Presencial",
    titleObtained: "",
    isTop: false,
    iconName: "school",
    desc: "",
    aboutHighlights: [],
    learnings: [],
    modules: [],
    profiles: { egresado: "", profesional: [] },
    instructor: { name: "", role: "" }
  });

  useEffect(() => {
    if (isEditing) {
      const programaExistente = programasData.find((p) => p.id === parseInt(id));
      if (programaExistente) {
        setFormData(programaExistente);
      } else {
        navigate("/dashboard/ofertas");
      }
    }
  }, [id, isEditing, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title: newTitle,
      slug: !isEditing ? newTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : prev.slug
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Guardando datos:", formData);
    alert("Programa guardado exitosamente");
    navigate("/dashboard/ofertas");
  };

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto animate-in fade-in duration-500 pb-24">
      
      {/* Cabecera y Botón Guardar */}
      <div className="flex items-center justify-between mb-8">
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
              {isEditing ? `Modificando: ${formData.title}` : "Completa los datos para el nuevo curso"}
            </p>
          </div>
        </div>

        <button 
          onClick={handleSave}
          className="bg-brand text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-navy transition-all shadow-lg flex items-center gap-2"
        >
          <span className="material-symbols-rounded text-sm">save</span>
          Guardar Cambios
        </button>
      </div>

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
          </button>
        ))}
      </div>

      {/* Renderizado Dinámico de Pestañas */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[400px]">
        {activeTab === "basica" && (
          <TabInfoBasica 
            formData={formData} 
            handleChange={handleChange} 
            handleTitleChange={handleTitleChange} 
          />
        )}
        {activeTab === "malla" && (
          <TabMalla 
            formData={formData} 
            setFormData={setFormData} 
          />
        )}
        {activeTab === "multimedia" && (
          <TabMultimedia 
            formData={formData} 
            handleChange={handleChange} 
          />
        )}
        {activeTab === "perfiles" && (
          <TabPerfiles 
            formData={formData} 
            setFormData={setFormData} 
          />
        )}
      </div>

    </div>
  );
};

export default OfertaEditor;