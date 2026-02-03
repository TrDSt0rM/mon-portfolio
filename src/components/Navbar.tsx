/**
 * @type {import('next').NextComponentType}
 * @file src/components/Navbar.tsx
 * @author Alex Plociennik
 * @date 2026-01-24 last modified: 2026-02-03
 * @description Barre de navigation (Navbar) du portfolio
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

/**
 * Principal composant de la barre de navigation (Navbar) du portfolio.
 * @returns la Navbar complète avec logo, liens de navigation et bouton de thème.
 */
export default function Navbar() {
  // État pour le menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Liste des liens de navigation
  const navLinks = [
    { name: "Compétences", href: "/#skills" },
    { name: "Projets", href: "/#projets" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-light-lvl-2 bg-light-lvl-0/90 shadow-strong backdrop-blur-md transition-all duration-300 dark:border-dark-lvl-2 dark:bg-dark-lvl-0/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ==================== LOGO ==================== */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex h-10 items-center justify-center gap-2 rounded-full border border-light-lvl-1 bg-light-lvl-2 px-4 py-2 align-middle text-xl font-bold text-light-lvl-4 shadow-lg transition-colors hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-dark-lvl-4 dark:hover:border-pastel-blue"
        >
          <img src="/portfolio.png" alt="Logo" className="h-6 w-6" />
          <p>
            <span className="bg-gradient-to-br from-pastel-light-blue via-pastel-light-purple to-pastel-light-peach bg-clip-text text-center text-lg font-bold tracking-[0.5px] text-transparent dark:from-pastel-blue dark:via-pastel-purple dark:to-pastel-peach">
              MonPortfolio
            </span>
          </p>
        </Link>

        {/* ==================== MENU BUREAU (Desktop) ==================== */}
        {/* hidden md:flex = Caché sur mobile, Visible sur PC */}
        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full border border-light-lvl-1 bg-light-lvl-2 px-5 py-2 text-sm font-medium text-light-lvl-4 shadow-lg transition-transform hover:scale-105 hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-dark-lvl-4 dark:hover:border-pastel-blue"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* ==================== BOUTON BURGER (Mobile) ==================== */}
        {/* md:hidden = Visible sur mobile, Caché sur PC */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-light-lvl-4 hover:bg-light-lvl-1 focus:outline-none dark:text-dark-lvl-4 dark:hover:bg-dark-lvl-1"
          >
            <span className="sr-only">Ouvrir le menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ==================== MENU DÉROULANT (Mobile) ==================== */}
      {isOpen && (
        <div className="border-b border-light-lvl-2 bg-light-lvl-0 shadow-lg dark:border-dark-lvl-2 dark:bg-dark-lvl-0 md:hidden">
          <div className="flex flex-col items-center space-y-2 px-4 pb-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-full border border-light-lvl-1 bg-light-lvl-2 px-5 py-3 text-center text-base font-medium text-light-lvl-4 shadow-sm hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-dark-lvl-4 dark:hover:border-pastel-blue"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
