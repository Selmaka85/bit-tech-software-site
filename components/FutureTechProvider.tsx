"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { FutureTechContext } from "./future-tech-context";

const STORAGE_KEY = "bit-tech-future-tech-mode";

function applyFutureTech(enabled: boolean) {
  document.documentElement.dataset.futureTech = enabled ? "true" : "false";
}

export function FutureTechProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) === "true";
    setEnabled(stored);
    applyFutureTech(stored);
  }, []);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      applyFutureTech(next);
      return next;
    });
  }, []);

  return (
    <FutureTechContext.Provider value={{ enabled, toggle }}>
      {children}
    </FutureTechContext.Provider>
  );
}
