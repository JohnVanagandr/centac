import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ScrollToHash } from "@/components/utils";

export const AppGlobalElements = ({ children }) => {
  return (
    <>
      <ScrollToHash />
      <Toaster 
        position="top-right" 
        reverseOrder={false}
        gutter={12} // Espacio entre toasts
        toastOptions={{
          // Diseño base del contenedor
          style: {
            borderRadius: '10px',
            background: '#ffffff',
            color: '#1e293b', // Slate-800 para texto principal
            padding: '14px 20px',
            fontSize: '14px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #f1f5f9', // Borde sutil
            maxWidth: '400px',
          },
          // Diseño específico para Éxito
          success: {
            style: {
              borderLeft: '5px solid #3b82f6', // Azul institucional (Brand)
            },
            iconTheme: {
              primary: '#3b82f6',
              secondary: '#fff',
            },
          },
          // Diseño específico para Error
          error: {
            style: {
              borderLeft: '5px solid #ef4444', // Rojo semántico
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />
      {children}
    </>
  );
};