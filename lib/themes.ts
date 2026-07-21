export const THEME_IDS = [
  "core",
  "future",
  "executive",
  "clinical",
  "industrial",
  "nocturne",
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export type SiteTheme = {
  id: ThemeId;
  label: string;
  shortLabel: string;
  blurb: string;
  tagline: string;
  icon: "hexagon" | "orbit" | "column" | "pulse" | "gear" | "arch";
};

export const SITE_THEMES: readonly SiteTheme[] = [
  {
    id: "core",
    label: "Core",
    shortLabel: "Core",
    tagline: "Clean & Modern",
    blurb: "Clean, modern and focused. The default experience.",
    icon: "hexagon",
  },
  {
    id: "future",
    label: "Future",
    shortLabel: "Future",
    tagline: "AI & Neon",
    blurb: "Neon, bold and forward-looking. Built for tomorrow.",
    icon: "orbit",
  },
  {
    id: "executive",
    label: "Executive",
    shortLabel: "Exec",
    tagline: "Professional & Premium",
    blurb: "Board-ready presence for fintech, legal and B2B SaaS.",
    icon: "column",
  },
  {
    id: "clinical",
    label: "Clinical",
    shortLabel: "Clinical",
    tagline: "Clear & Trusted",
    blurb: "Clear, accessible interfaces for health and service platforms.",
    icon: "pulse",
  },
  {
    id: "industrial",
    label: "Industrial",
    shortLabel: "Ops",
    tagline: "Robust & Strong",
    blurb: "Operations-grade UI for logistics, automation and control systems.",
    icon: "gear",
  },
  {
    id: "nocturne",
    label: "Nocturne",
    shortLabel: "Nocturne",
    tagline: "Aristocratic gothic",
    blurb:
      "Crimson Nocturne — dark baroque elegance, candlelight and cinematic atmosphere.",
    icon: "arch",
  },
] as const;

export const THEME_STORAGE_KEY = "bit-tech-site-theme";
export const LEGACY_FUTURE_KEY = "bit-tech-future-tech-mode";
/** Blood / bats / spider overlay — independent of staying on Nocturne skin */
export const NOCTURNE_FX_KEY = "bit-tech-nocturne-fx";
export const THEME_SEGMENT_DEG = 360 / SITE_THEMES.length;

export function themeIndex(id: ThemeId): number {
  return SITE_THEMES.findIndex((theme) => theme.id === id);
}

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return !!value && (THEME_IDS as readonly string[]).includes(value);
}

export function resolveStoredTheme(): ThemeId {
  if (typeof window === "undefined") {
    return "core";
  }
  try {
    let stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "noir" || stored === "cathedral") {
      stored = "nocturne";
      localStorage.setItem(THEME_STORAGE_KEY, "nocturne");
    }
    if (isThemeId(stored)) {
      return stored;
    }
    if (localStorage.getItem(LEGACY_FUTURE_KEY) === "true") {
      return "future";
    }
  } catch {
    /* ignore */
  }
  return "core";
}
