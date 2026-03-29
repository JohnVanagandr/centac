import React from "react";

// 1. Contenedor Principal (Añadimos bordes redondeados y fondo blanco)
const Table = ({ children, className = "" }) => (
  <div
    className={`overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
  >
    <table className="w-full text-left border-collapse whitespace-nowrap">
      {children}
    </table>
  </div>
);

// 2. Cabecera (Fondo sutil para separar del contenido)
const THeader = ({ children }) => (
  <thead>
    <tr className="bg-slate-50 border-b border-slate-200">{children}</tr>
  </thead>
);

// 3. Celdas de Cabecera (Uso estricto de Navy y Tipografía Corporativa)
const THeadCell = ({ children, className = "" }) => (
  <th
    className={`px-6 py-4 text-[11px] font-display font-black text-navy uppercase tracking-widest ${className}`}
  >
    {children}
  </th>
);

// 4. Cuerpo de la Tabla
const TBody = ({ children }) => (
  <tbody className="divide-y divide-slate-100">{children}</tbody>
);

// 5. Fila (Efecto hover para seguir la lectura)
const TRow = ({ children, className = "" }) => (
  <tr
    className={`hover:bg-primary/5 transition-colors group cursor-default ${className}`}
  >
    {children}
  </tr>
);

// 6. Celdas de Datos (Textos legibles con transición suave al hacer hover en la fila)
const TCell = ({ children, className = "" }) => (
  <td
    className={`px-6 py-4 text-sm font-body text-slate-600 group-hover:text-navy transition-colors ${className}`}
  >
    {children}
  </td>
);

// Exportamos como un solo objeto para mayor orden y encapsulamiento
Table.Header = THeader;
Table.HeadCell = THeadCell;
Table.Body = TBody;
Table.Row = TRow;
Table.Cell = TCell;

export default Table;
