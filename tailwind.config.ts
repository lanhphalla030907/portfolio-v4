import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "rgb(var(--v-paper) / <alpha-value>)",
          light: "rgb(var(--v-paper-light) / <alpha-value>)",
          dark: "#e2e8f0",
        },
        ink: {
          DEFAULT: "rgb(var(--v-ink) / <alpha-value>)",
          soft: "rgb(var(--v-ink-soft) / <alpha-value>)",
          muted: "rgb(var(--v-ink-muted) / <alpha-value>)",
          light: "rgb(var(--v-ink-light) / <alpha-value>)",
          card: "#121936",
          cardHover: "#182245",
        },
        night: {
          DEFAULT: "#0b1026",
          card: "#121936",
          hover: "#182245",
        },
        surface: "rgb(var(--v-surface) / <alpha-value>)",
        line: "rgb(var(--v-line) / <alpha-value>)",
        accentText: "rgb(var(--v-accent-text) / <alpha-value>)",
        accentTextHover: "rgb(var(--v-accent-text-hover) / <alpha-value>)",
        brand: {
          accent: "#60C1E5",
          accentGlow: "rgba(96, 193, 229, 0.25)",
          accentHover: "#45A9CF",
          accentDeep: "#1D6F8C",
          yellow: "#facc15",
          yellowGlow: "rgba(250, 204, 21, 0.25)",
        },
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "-apple-system", "sans-serif"],
        body: ["'Onest'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.035em",
        loose: "0.08em",
        widest: "0.14em",
      },
      maxWidth: {
        "7xl": "80rem", // 1280px standard container
      },
    },
  },
  plugins: [],
};
export default config;
