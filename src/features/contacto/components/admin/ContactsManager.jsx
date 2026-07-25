import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAdminContacts } from "../../hooks/useAdminContacts";
import { Table, Badge } from "@/components/ui/DataDisplay"; 
import { Pagination } from "@/components/ui/Pagination"; 

const ContactsManager = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [page, setPage] = useState(1);

    // Lógica de DEBOUNCE
    useEffect(() => {
      const timer = setTimeout(() => {
        const text = searchTerm.trim();
        if (text.length >= 3 || text.length === 0) {
          setDebouncedSearch(text);
        }
      }, 500);
      return () => clearTimeout(timer);
    }, [searchTerm]);

    // Reset de Página
    useEffect(() => {
      setPage(1);
    }, [debouncedSearch, statusFilter]);

    // Consumo del Hook
    const { data: responseData = [], isLoading } = useAdminContacts({
      page,
      search: debouncedSearch,
      status: statusFilter
    });

    let contactsList = [];
    let paginationMeta = null;

    if (responseData) {
      if (Array.isArray(responseData)) {
        contactsList = responseData;
      } else {
        contactsList = responseData.data || [];
        paginationMeta = responseData.pagination || responseData.meta?.pagination || null;
      }
    }

    // Calcular la diferencia entre atendidos y pendientes
    const pendientesCount = contactsList.filter(c => c.status === "pendiente").length;
    const atendidosCount = contactsList.filter(c => c.status === "atendido").length;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
        <div>
          <h1 className="text-3xl font-black text-navy tracking-tight">
            Gestor de <span className="text-brand">Contactos</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Administra las solicitudes de contacto enviadas desde el sitio web.
          </p>
        </div>

        {/* Indicadores de diferencia visuales */}
        <div className="flex items-center gap-3">
          <div className="bg-orange-50 border border-orange-200 text-orange-700 px-4 py-2 rounded-xl flex items-center gap-2">
            <span className="font-bold text-sm">Pendientes:</span>
            <span className="font-black text-lg">{pendientesCount}</span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-xl flex items-center gap-2">
            <span className="font-bold text-sm">Atendidos:</span>
            <span className="font-black text-lg">{atendidosCount}</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-bold text-navy ml-1">Buscar (Mínimo 3 letras)</label>
          <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus-within:bg-white focus-within:border-brand/30 transition-all">
            <span className="material-symbols-rounded text-slate-400">search</span>
            <input 
              type="text"
              placeholder="Nombre, email o mensaje..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent outline-none text-sm font-medium text-navy placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <Table>
          <Table.Header>
            <Table.HeadCell>Contacto</Table.HeadCell>
            {/* Cambiamos Asunto por Mensaje ya que el JSON no trae subject */}
            <Table.HeadCell>Mensaje</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
            <Table.HeadCell className="text-right">Acciones</Table.HeadCell>
          </Table.Header>
          
          <Table.Body>
            {isLoading ? (
              <Table.Row>
                <Table.Cell colSpan="5" className="text-center py-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                  Cargando solicitudes...
                </Table.Cell>
              </Table.Row>
            ) : contactsList.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan="5" className="text-center py-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                  No hay solicitudes de contacto.
                </Table.Cell>
              </Table.Row>
            ) : (
              contactsList.map((contact) => (
                <Table.Row key={contact.id}>
                  <Table.Cell>
                    <div className="flex flex-col">
                      {/* Corregido a full_name */}
                      <span className="font-black text-navy text-sm">{contact.full_name}</span>
                      <span className="text-[10px] font-bold text-slate-400 mt-0.5">{contact.email}</span>
                      <span className="text-[10px] font-medium text-slate-400">{contact.phone}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-xs font-bold text-navy truncate max-w-[250px] block" title={contact.message}>
                      {contact.message ? (contact.message.length > 40 ? contact.message.substring(0, 40) + '...' : contact.message) : "Sin mensaje"}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-xs font-bold text-slate-600">
                      {/* Mostramos la fecha que viene del backend directamente sin usar new Date() */}
                      {contact.created_at}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    {/* Ajuste de colores e intenciones según el estado real del backend */}
                    <Badge variant="solid" intent={contact.status === "atendido" ? "success" : "warning"}>
                      {contact.status ? contact.status.charAt(0).toUpperCase() + contact.status.slice(1) : "Pendiente"}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell className="text-right">
                    <Link 
                      to={`/dashboard/contactos/ver/${contact.id}`} 
                      className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-slate-400 hover:text-brand hover:bg-brand/5 transition-colors"
                    >
                      <span className="material-symbols-rounded text-[18px]">visibility</span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table>

        {paginationMeta && paginationMeta.last_page > 1 && (
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            <Pagination pagination={paginationMeta} setPage={setPage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsManager;