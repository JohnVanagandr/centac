import React from "react";

const Table = ({ children, className = "" }) => (
  <div className={`overflow-x-auto ${className}`}>
    <table className="w-full text-left border-collapse">
      {children}
    </table>
  </div>
);

const THeader = ({ children }) => (
  <thead>
    <tr className="bg-slate-50/30">
      {children}
    </tr>
  </thead>
);

const THeadCell = ({ children, className = "" }) => (
  <th className={`px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px] ${className}`}>
    {children}
  </th>
);

const TBody = ({ children }) => (
  <tbody className="divide-y divide-slate-100">
    {children}
  </tbody>
);

const TRow = ({ children, className = "" }) => (
  <tr className={`hover:bg-slate-50/50 transition-colors group ${className}`}>
    {children}
  </tr>
);

const TCell = ({ children, className = "" }) => (
  <td className={`px-8 py-5 ${className}`}>
    {children}
  </td>
);

// Exportamos como un solo objeto para mayor orden
Table.Header = THeader;
Table.HeadCell = THeadCell;
Table.Body = TBody;
Table.Row = TRow;
Table.Cell = TCell;

export default Table;