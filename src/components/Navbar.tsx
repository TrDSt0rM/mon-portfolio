/**
 * @file src/app/components/Navbar.tsx
 * @author Alex Plociennik
 * @date 2026-02-01
 * @description Composant de la barre de navigation pour le portfolio
 */

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    // 1. BARRE DE NAVIGATION
    // J'utilise bg-light-bg avec /80 pour garder la transparence (effet verre)
    <nav className="sticky top-0 z-50 w-full border-b border-light-lvl-2 bg-light-lvl-0/90 shadow-strong backdrop-blur-md dark:border-dark-lvl-2 dark:bg-dark-lvl-0/90">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* LOGO + NOM*/}
        <Link
          href="/"
          className="flex h-10 items-center justify-center gap-2 rounded-full border border-light-lvl-1 bg-light-lvl-2 px-4 py-2 align-middle text-xl font-bold text-light-lvl-4 shadow-lg transition-colors hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-dark-lvl-4 dark:hover:border-pastel-blue"
        >
          <img src="/portfolio.png" alt="Logo" className="h-6 w-6" />
          <p>
            <span className="` ${crimson.className} ` bg-gradient-to-br from-pastel-light-blue via-pastel-light-purple to-pastel-light-peach bg-clip-text text-center text-[1.75rem] font-bold tracking-[0.5px] text-transparent dark:from-pastel-blue dark:via-pastel-purple dark:to-pastel-peach">
              MonPortfolio
            </span>
          </p>
        </Link>

        {/* LIENS DE NAVIGATION + BOUTON THEME TOGGLE */}
        <div className="hidden items-center gap-4 text-sm font-medium md:flex">
          <Link
            href="/#skills"
            className="rounded-full border border-light-lvl-1 bg-light-lvl-2 px-5 py-2 text-sm font-medium text-light-lvl-4 shadow-lg transition-transform hover:scale-105 hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-dark-lvl-4 dark:hover:border-pastel-blue"
          >
            Compétences
          </Link>
          <Link
            href="/#projets"
            className="rounded-full border border-light-lvl-1 bg-light-lvl-2 px-5 py-2 text-sm font-medium text-light-lvl-4 shadow-lg transition-transform hover:scale-105 hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-dark-lvl-4 dark:hover:border-pastel-blue"
          >
            Projets
          </Link>

          <Link
            href="/#contact"
            className="rounded-full border border-light-lvl-1 bg-light-lvl-2 px-5 py-2 text-sm font-medium text-light-lvl-4 shadow-lg transition-transform hover:scale-105 hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-dark-lvl-4 dark:hover:border-pastel-blue"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
