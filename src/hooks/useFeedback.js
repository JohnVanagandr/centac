import { useContext } from 'react';
import { FeedbackContext } from '@/context';

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback debe ser usado dentro de un FeedbackProvider');
  }
  return context;
};