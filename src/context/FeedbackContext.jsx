import React, { createContext, useState, useCallback } from 'react';
import { FeedbackModal } from '@/components/ui/Feedback/FeedbackModal';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [config, setConfig] = useState({
    isOpen: false,
    type: 'info',
    title: '',
    message: '',
    onConfirm: null,
  });

  const showFeedback = useCallback((params) => {
    setConfig({
      isOpen: true,
      type: params.type || 'info',
      title: params.title || '',
      message: params.message || '',
      onConfirm: params.onConfirm || null,
    });
  }, []);

  const hideFeedback = useCallback(() => {
    setConfig((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <FeedbackContext.Provider value={{ showFeedback, hideFeedback }}>
      {children}
      {/* 🌟 EL MODAL VIVE AQUÍ PERMANENTEMENTE 🌟 */}
      <FeedbackModal 
        {...config} 
        onClose={hideFeedback} 
      />
    </FeedbackContext.Provider>
  );
};