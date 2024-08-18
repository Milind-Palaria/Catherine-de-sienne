"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface LoaderContextProps {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
