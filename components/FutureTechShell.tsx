"use client";

import type { ReactNode } from "react";
import { FutureTechAmbient } from "./FutureTechAmbient";
import { FutureTechProvider } from "./FutureTechProvider";

export function FutureTechShell({ children }: { children: ReactNode }) {
  return (
    <FutureTechProvider>
      <FutureTechAmbient />
      <div className="relative z-10">{children}</div>
    </FutureTechProvider>
  );
}
