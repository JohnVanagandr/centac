import React, { useState, useEffect } from "react";
import { useProspects } from "./hooks/useProspects";
import { SummaryCards } from "./components/dashboard/SummaryCards";
import { ProspectsFilters } from "./components/dashboard/ProspectsFilters"; // 🌟 Importamos el nuevo filtro
import { ProspectsTable } from "./components/dashboard/ProspectsTable";
import { Pagination } from "@/components/ui/Pagination";

export const SolicitudesContenedor = () => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // 🌟 Lógica de Debounce: Espera 500ms después de que el usuario deja de escribir
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim());
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Si cambia el filtro de estado o la búsqueda, volvemos a la página 1
  useEffect(() => {
    setPage(1);
  }, [statusFilter, debouncedSearch]);

  // Pasamos el nuevo objeto de filtros al Hook
  const { data: apiResponse, isLoading, error } = useProspects({
    page,
    status: statusFilter,
    search: debouncedSearch
  });

  const backendResponse = apiResponse?.data || {};
  const prospects = Array.isArray(backendResponse.data) ? backendResponse.data : [];
  
  const pagination = backendResponse.pagination || {
    total: 0, per_page: 10, current_page: 1, last_page: 1, has_more: false,
  };

  const summary = backendResponse.summary || {
    unattended: 0, in_process: 0, enrolled: 0,
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl">
        <h3 className="font-bold text-lg mb-2">Error al cargar solicitudes</h3>
        <p className="text-sm">{error.message || "Por favor, intenta de nuevo más tarde."}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      <SummaryCards summary={summary} />
      
      {/* 🌟 Inyectamos el nuevo componente de filtros */}
      <ProspectsFilters 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter} 
        onStatusChange={setStatusFilter} 
      />
      
      <ProspectsTable data={prospects} />
      
      {/* Ocultamos la paginación si solo hay 1 página */}
      {pagination.last_page > 1 && (
        <Pagination pagination={pagination} setPage={setPage} />
      )}
    </div>
  );
};