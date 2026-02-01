/**
 * @file /src/app/providers.tsx
 * @author Alex Plociennik
 * @date 2026-01-24
 * @description Fournisseurs de contexte pour l'application, incluant le thème.
 */
"use client";

import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // On attend que le composant soit monté pour éviter les erreurs d'hydratation
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Si on n'est pas encore prêt, on renvoie les enfants "nus" (sans thème) pour éviter le flash
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}