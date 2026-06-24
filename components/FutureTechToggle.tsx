"use client";

import { useFutureTech } from "./future-tech-context";

export function FutureTechToggle() {
  const { enabled, toggle } = useFutureTech();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={
        enabled
          ? "Switch to standard presentation mode"
          : "Switch to Future-Tech presentation mode"
      }
      title={
        enabled
          ? "Return to standard mode"
          : "Activate Future-Tech visual mode"
      }
      className={`group relative inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
        enabled
          ? "future-toggle-active border-accent bg-accent-glow text-accent shadow-[0_0_20px_var(--color-accent-glow-strong)]"
          : "border-surface-border bg-surface-raised/80 text-slate-400 hover:border-slate-500 hover:text-slate-200"
      }`}
    >
      <span
        className={`relative flex h-2 w-2 shrink-0 rounded-full transition-colors duration-300 ${
          enabled ? "bg-accent shadow-[0_0_8px_rgb(var(--accent-rgb))]" : "bg-slate-500"
        }`}
        aria-hidden="true"
      >
        {enabled ? (
          <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-40" />
        ) : null}
      </span>
      <span className="hidden sm:inline">
        {enabled ? "Future-Tech ON" : "Future-Tech Mode"}
      </span>
      <span className="sm:hidden">{enabled ? "FT ON" : "FT Mode"}</span>
    </button>
  );
}
