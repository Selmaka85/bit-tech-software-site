"use client";

import { createContext, useContext } from "react";

export type FutureTechContextValue = {
  enabled: boolean;
  toggle: () => void;
};

export const FutureTechContext = createContext<FutureTechContextValue | null>(
  null,
);

export function useFutureTech() {
  const ctx = useContext(FutureTechContext);
  if (!ctx) {
    throw new Error("useFutureTech must be used within FutureTechProvider");
  }
  return ctx;
}
