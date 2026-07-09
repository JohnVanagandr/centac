import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAdminSliders, useDeleteSlider } from "../../hooks/useSliders";

// Importamos los componentes de tu UI Kit (Ajusta las rutas según tus carpetas)
import { Table } from "@/components/ui/DataDisplay"; 
import { Button } from "@/components/ui/Navigation";

const SlidersManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: sliders = [], isLoading } = useAdminSliders();
  const { mutate: deleteSlider, isPending: isDeleting } = useDeleteSlider();

  const filteredSliders = sliders.filter(slider => 
    slider.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    slider.title_highlight?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id, title) => {
    if (window.confirm(`¿Está seguro de eliminar permanentemente el slider "${title || 'Sin título'}"?`)) {
      deleteSlider(id);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header del Gestor */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-navy tracking-tight">
            Gestor de <span className="text-brand">Sliders</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Administra las imágenes y banners principales de la página web.
          </p>
        </div>
        
        {/* Usamos el componente Button con prop 'as' para convertirlo en Link */}
        <Button as={Link} to="/dashboard/sliders/nuevo" intent="brand" size="md">
          <span className="material-symbols-rounded text-[18px]">add_photo_alternate</span>
          Crear Slider
        </Button>
      </div>

      {/* Buscador */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
        <span className="material-symbols-rounded text-slate-400 ml-2">search</span>
        <input 
          type="text"
          placeholder="Buscar slider por título..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent outline-none text-sm font-medium text-navy placeholder:text-slate-400"
        />
      </div>

{/* Tabla Componentizada */}
      <Table>
        {/* CORRECCIÓN: Table.Header ya tiene el <tr> interno, solo pasamos las celdas */}
        <Table.Header>
          <Table.HeadCell>Imagen / Título</Table.HeadCell>
          <Table.HeadCell>Descripción</Table.HeadCell>
          <Table.HeadCell className="text-right">Acciones</Table.HeadCell>
        </Table.Header>
        
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan="3" className="text-center py-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                Cargando sliders...
              </Table.Cell>
            </Table.Row>
          ) : filteredSliders.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan="3" className="text-center py-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                No se encontraron sliders.
              </Table.Cell>
            </Table.Row>
          ) : (
            filteredSliders.map((slider) => (
              <Table.Row key={slider.id}>
                
                {/* Columna 1: Imagen y Títulos */}
                <Table.Cell>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-14 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center shadow-inner">
                      {slider.image || slider.image_url ? (
                        <img src={slider.image || slider.image_url} alt={slider.title} className="w-full h-full object-cover" />
                      ) : (
                        <span className="material-symbols-rounded text-slate-300">image</span>
                      )}
                    </div>
                    
                    <div className="flex flex-col">
                      <span className="font-black text-navy text-sm">
                        {slider.title || "Sin título"}
                        {slider.title_highlight && (
                          <span className="text-brand ml-1">{slider.title_highlight}</span>
                        )}
                      </span>
                      {slider.badge && (
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                          {slider.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </Table.Cell>

                {/* Columna 2: Descripción Amplia */}
                <Table.Cell>
                  <p 
                    className="text-xs text-slate-500 font-medium whitespace-normal max-w-[280px] md:max-w-md line-clamp-2 leading-relaxed" 
                    title={slider.description}
                  >
                    {slider.description || "Sin descripción"}
                  </p>
                </Table.Cell>

                {/* Columna 3: Acciones Sobrias */}
                <Table.Cell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    
                    {/* Botón Editar */}
                    <Link 
                      to={`/dashboard/sliders/editar/${slider.id}`} 
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors"
                      title="Editar Slider"
                    >
                      <span className="material-symbols-rounded text-[18px]">edit</span>
                    </Link>

                    {/* Botón Eliminar */}
                    <button 
                      onClick={() => handleDelete(slider.id, slider.title)}
                      disabled={isDeleting}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Eliminar Slider"
                    >
                      <span className="material-symbols-rounded text-[18px]">delete</span>
                    </button>

                  </div>
                </Table.Cell>

              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default SlidersManager;