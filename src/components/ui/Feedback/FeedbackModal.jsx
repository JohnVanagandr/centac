import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Button } from '@/components/ui/Navigation';

const Icons = {
  success: <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  error: <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  warning: <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
  confirm: <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
};

export const FeedbackModal = ({ isOpen, type, title, message, onConfirm, onClose }) => {
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };

  return (
    // AnimatePresence permite animar la salida cuando isOpen es false
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          // Animación del fondo oscuro
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/80 backdrop-blur-md"
        >
          <motion.div 
            // 🌟 3. Animación tipo "resorte" para la caja blanca
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl max-w-sm w-full overflow-hidden border border-slate-100"
          >
            {/* Encabezado Visual */}
            <div className="flex flex-col items-center pt-8 pb-4">
              <motion.div 
                // Pequeño rebote extra para el ícono
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                className="p-3 bg-slate-50 rounded-full mb-4"
              >
                {Icons[type] || Icons.confirm}
              </motion.div>
              <h3 className="text-2xl font-black text-navy px-6 text-center leading-tight">
                {title}
              </h3>
            </div>

            {/* Mensaje */}
            <div className="px-8 pb-8 text-center">
              <p className="text-slate-600 font-medium leading-relaxed">
                {message}
              </p>
            </div>

            {/* Acciones */}
            <div className="px-8 pb-8 flex flex-col gap-3">
              <Button 
                intent={type === 'error' ? 'danger' : 'brand'} 
                size="lg" 
                fullWidth
                onClick={handleConfirm}
              >
                {type === 'confirm' ? 'Confirmar' : 'Cerrar'}
              </Button>

              {type === 'confirm' && (
                <Button 
                  variant="outline"
                  intent="danger"
                  size="lg"
                  fullWidth
                  onClick={onClose}
                >
                  Cancelar
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};