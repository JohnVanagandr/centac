import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Ahora importamos los hooks desde sus respectivos archivos (Ajusta las rutas)
import { useAdminPqrs, useAdminStatuses } from "../../hooks/useAdminPqrs";
import { usePqrs } from "../../hooks/usePqrs"; 
import { Table, Badge } from "@/components/ui/DataDisplay"; 
import { Pagination } from "@/components/ui/Pagination"; 
import { SelectField } from "@/components/ui/Form";

const PqrsManager = () => {
    // 1. Estados de la Interfaz
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");   
    const [statusFilter, setStatusFilter] = useState("");
    const [page, setPage] = useState(1);

    // 2. Lógica de DEBOUNCE (Retraso de escritura + Mínimo 3 caracteres)
    useEffect(() => {
      const timer = setTimeout(() => {
        const text = searchTerm.trim();
        if (text.length >= 3 || text.length === 0) {
          setDebouncedSearch(text);
        }
      }, 500); // Espera 500ms después de que el usuario deje de teclear
      
      return () => clearTimeout(timer);
    }, [searchTerm]);

    // 3. Reset de Página si los filtros cambian
    useEffect(() => {
      setPage(1);
    }, [debouncedSearch, typeFilter, statusFilter]);

    // 4. Consumo de la API con los filtros aplicados en el servidor
    const { data: responseData = [], isLoading } = useAdminPqrs({
      page,
      search: debouncedSearch,
      type: typeFilter,
      status: statusFilter
    });

    // 5. Carga de metadatos (Comboboxes)
    const { data: estados = [], isLoading: isLoadingStatuses } = useAdminStatuses();    
    const { tiposPqrs = [], isLoadingSelects } = usePqrs(); // Reusamos solo la lista de tipos

    // Mapeo para los SelectField (Requieren value y label/name)
    const opcionesPqrs = tiposPqrs.map(tipo => ({ value: tipo.id, label: tipo.name }));  
    const opcionesEstados = estados.map(estado => ({ value: estado.id, label: estado.name }));

    // 6. Extracción de datos paginados desde el backend
    let pqrsList = [];
    let paginationMeta = null;

    if (responseData) {
      if (Array.isArray(responseData)) {
        pqrsList = responseData;
      } else {
        pqrsList = responseData.data || [];
        paginationMeta = responseData.pagination || responseData.meta?.pagination || null;
      }
    }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
        <div>
          <h1 className="text-3xl font-black text-navy tracking-tight">
            Gestor de <span className="text-brand">PQRS</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Administra las peticiones, quejas, reclamos y sugerencias de los usuarios.
          </p>
        </div>
      </div>

      {/* Buscador y Filtros con diseño Grid (Server-Side) */}
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold text-navy ml-1">Buscar (Mínimo 3 letras)</label>
          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus-within:bg-white focus-within:border-brand/30 transition-all">
            <span className="material-symbols-rounded text-slate-400">search</span>
            <input 
              type="text"
              placeholder="Nombre, tipo o asunto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none text-sm font-medium text-navy placeholder:text-slate-400"
            />
          </div>
        </div>

        <SelectField 
          label="Tipo de Solicitud"
          options={opcionesPqrs}
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          disabled={isLoadingSelects}
          placeholder="Todos los tipos"
        />

        <SelectField 
          label="Estado"
          options={opcionesEstados}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          disabled={isLoadingStatuses}
          placeholder="Todos los estados"
        />

      </div>

      <div className="space-y-6">
        <Table>
          <Table.Header>
            <Table.HeadCell>Solicitante</Table.HeadCell>
            <Table.HeadCell>Tipo y Detalles</Table.HeadCell>
            <Table.HeadCell>Radicación</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell className="text-right">Acciones</Table.HeadCell>
          </Table.Header>
          
          <Table.Body>
            {isLoading ? (
              <Table.Row>
                <Table.Cell colSpan="5" className="text-center py-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                  Buscando en la base de datos...
                </Table.Cell>
              </Table.Row>
            ) : pqrsList.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan="5" className="text-center py-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                  No se encontraron solicitudes con estos filtros.
                </Table.Cell>
              </Table.Row>
            ) : (
              pqrsList.map((pqrs) => (
                <Table.Row key={pqrs.id}>
                  
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-xs font-black text-brand shadow-inner uppercase shrink-0">
                        {pqrs.applicant?.full_name ? pqrs.applicant.full_name.charAt(0) : "U"}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-navy text-sm">
                          {pqrs.applicant?.full_name || "Usuario Desconocido"}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 mt-0.5">
                          {pqrs.applicant?.email}
                        </span>
                        <span className="text-[10px] font-medium text-slate-400">
                          {pqrs.applicant?.phone} • {pqrs.applicant?.document_type?.acronym} {pqrs.applicant?.document_number}
                        </span>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black uppercase tracking-[2px] text-brand">
                        {pqrs.type?.name || "Solicitud"}
                      </span>
                      <span className="text-xs font-bold text-navy truncate max-w-[250px] md:max-w-xs">
                        {pqrs.subject}
                      </span>
                      <p 
                        className="text-[11px] text-slate-500 font-medium whitespace-normal max-w-[250px] md:max-w-sm line-clamp-2 leading-relaxed" 
                        title={pqrs.description}
                      >
                        {pqrs.description || "Sin descripción detallada."}
                      </p>
                    </div>
                  </Table.Cell>

                  <Table.Cell>
                     <div className="flex flex-col">
                       <span className="text-xs font-bold text-slate-600">
                         {pqrs.created_at ? new Date(pqrs.created_at).toLocaleDateString() : "Reciente"}
                       </span>
                       <span className="text-[10px] font-medium text-slate-400 mt-0.5 capitalize">
                         {pqrs.radicated_since}
                       </span>
                     </div>
                  </Table.Cell>

                  <Table.Cell>
                    <Badge 
                      variant="solid" 
                      intent={
                        pqrs.status?.name === "Resuelto" || pqrs.status?.name === "Cerrado" ? "success" : 
                        pqrs.status?.name === "En Revisión" || pqrs.status?.name === "En Proceso" || pqrs.status?.name === "En Trámite" ? "info" : 
                        pqrs.status?.name === "Pendiente" || pqrs.status?.name === "Nuevo" ? "warning" : "neutral"
                      }
                    >
                      {pqrs.status?.name || "Pendiente"}
                    </Badge>
                  </Table.Cell>

                  <Table.Cell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Link 
                        to={`/dashboard/pqr/editar/${pqrs.id}`} 
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-brand hover:bg-brand/5 transition-colors"
                        title="Detalles y Responder"
                      >
                        <span className="material-symbols-rounded text-[18px]">visibility</span>
                      </Link>
                    </div>
                  </Table.Cell>

                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table>

        {paginationMeta && paginationMeta.last_page > 1 && (
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <Pagination 
              pagination={paginationMeta} 
              setPage={setPage} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PqrsManager;