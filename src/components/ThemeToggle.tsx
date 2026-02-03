/**
 * @file ThemeToggle.tsx
 * @author Alex Plociennik
 * @date 2026-01-24
 * @description Composant de bouton pour changer le thème (clair/sombre)
 */

"use client";

import { useTheme } from "next-themes";

/**
 * Fonction composant pour le bouton de changement de thème.
 * @returns renvoie un bouton qui permet de basculer entre le thème clair et sombre.
 */
export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border transition-transform hover:scale-105 shadow-lg
                    bg-light-lvl-2  text-light-lvl-4 border-light-lvl-1 hover:border-pastel-light-blue
                    dark:bg-dark-lvl-2 dark:text-dark-lvl-4 dark:border-dark-lvl-1 dark:hover:border-pastel-blue"
            aria-label="Changer le thème"
        >
            {theme === "dark" ? (
                /* --- ICÔNE SOLEIL --- */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-spin-slow"
                >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
            ) : (
                /* --- ICÔNE LUNE --- */
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
        </button>
    );
}