import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "rgb(var(--surface-rgb) / <alpha-value>)",
          raised: "rgb(var(--surface-raised-rgb) / <alpha-value>)",
          border: "rgb(var(--surface-border-rgb) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          muted: "rgb(var(--accent-muted-rgb) / <alpha-value>)",
          glow: "var(--color-accent-glow)",
        },
      },
      fontFamily: {
        sans: [
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        nocturne: [
          "var(--font-nocturne-display)",
          "Georgia",
          "Palatino Linotype",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
