"use client";
import { createContext, useContext, useState } from "react";

type QuoteListLoadingContextType = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
];

const QuoteListLoadingContext = createContext<
  QuoteListLoadingContextType | undefined
>(undefined);

export function useQuoteListLoading() {
  const context = useContext(QuoteListLoadingContext);
  if (context === undefined) {
    throw new Error("useQuoteListLoading must be used within its provider");
  }

  return context;
}

export function QuoteListLoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useState(false);

  return (
    <QuoteListLoadingContext.Provider value={isLoading}>
      {children}
    </QuoteListLoadingContext.Provider>
  );
}
