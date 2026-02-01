/**
 * @type {import('tailwindcss').Config}
 * @file tailwind.config.ts
 * @author Alex Plociennik
 * @date 2026-01-24
 * @description Configuration de Tailwind CSS pour le portfolio
 */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  // Thème customisé
  theme: {
    extend: {
      colors: {
        // --- COULEURS DU THÈME SOMBRE ---
        dark: {
          "lvl-0": "#1A1A1A",
          "lvl-1": "#121212",
          "lvl-2": "#2A2A2A",
          "lvl-3": "#B0B0B0",
          "lvl-4": "#FFFFFF",
        },

        // --- COULEURS DU THÈME CLAIR ---
        light: {
          "lvl-0": "#FFFFFF",
          "lvl-1": "#F8F9FA",
          "lvl-2": "#E9ECEF",
          "lvl-3": "#6C757D",
          "lvl-4": "#212529",
        },

        // --- COULEURS PASTELS  ---
        pastel: {
          // Version Sombre
          blue: "#A8D5E2",
          purple: "#C5B9E8",
          green: "#B8E6D5",
          pink: "#F4C4D0",
          peach: "#FFD4B8",
          sage: "#B2D2C1", // D1D1D1

          // Version Claire
          "light-blue": "#0D6EFD",
          "light-purple": "#6610F2",
          "light-green": "#198754",
          "light-pink": "#D63384",
          "light-peach": "#FD7E14",
          "light-sage": "#2D8A7D", // 6C757D
        },
      },

      boxShadow: {
        strong: "0 4px 20px rgba(0, 0, 0, 0.5)",
      },
    },
  },

  // Plugins (si nécessaire)
  plugins: [],
};
export default config;
