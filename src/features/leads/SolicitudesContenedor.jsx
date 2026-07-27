import React, { useState, useEffect } from "react";
import { useProspects, useProspectSummary } from "./hooks/useProspects"; // 🌟 Importamos ambos hooks
import { SummaryCards } from "./components/dashboard/SummaryCards";
import { ProspectsFilters } from "./components/dashboard/ProspectsFilters";
import { ProspectsTable } from "./components/dashboard/ProspectsTable";
import { Pagination } from "@/components/ui/Pagination";

export const SolicitudesContenedor = () => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim());
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    setPage(1);
  }, [statusFilter, debouncedSearch]);

  // 1. Hook para la tabla (Reactivo a los filtros)
  const { data: apiResponse, isLoading: isLoadingTable, error: tableError } = useProspects({
    page,
    status: statusFilter,
    search: debouncedSearch
  });

  // 🌟 2. Hook para el resumen (Independiente)
  const { data: summaryResponse, isLoading: isLoadingSummary } = useProspectSummary();

  // Parseo de la tabla
  const backendResponse = apiResponse?.data || {};
  const prospects = Array.isArray(backendResponse.data) ? backendResponse.data : [];
  const pagination = backendResponse.pagination || {
    total: 0, per_page: 10, current_page: 1, last_page: 1, has_more: false,
  };

  // 🌟 Parseo del resumen de la nueva API
  // El controlador que nos compartiste antes devuelve esto dentro de "data.statistics"
  const summaryData = summaryResponse?.data?.statistics || summaryResponse?.statistics || {
    pendientes: 0, en_proceso: 0, atendidas: 0,
  };

  // Manejo de carga combinada
  if (isLoadingTable || isLoadingSummary) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  if (tableError) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl">
        <h3 className="font-bold text-lg mb-2">Error al cargar solicitudes</h3>
        <p className="text-sm">{tableError.message || "Por favor, intenta de nuevo más tarde."}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      {/* 🌟 Pasamos la data limpia a las tarjetas */}
      <SummaryCards summary={summaryData} />
      
      <ProspectsFilters 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter} 
        onStatusChange={setStatusFilter} 
      />
      
      <ProspectsTable data={prospects} />
      
      {pagination.last_page > 1 && (
        <Pagination pagination={pagination} setPage={setPage} />
      )}
    </div>
  );
};