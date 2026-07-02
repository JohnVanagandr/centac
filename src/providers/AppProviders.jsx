import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider, FeedbackProvider } from "@/context";
import { queryClient } from "@/lib/queryClient";

export const AppProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <FeedbackProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </FeedbackProvider>
    <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
  </QueryClientProvider>
);