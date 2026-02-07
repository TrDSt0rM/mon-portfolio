/**
 * @type
 * @file
 * @author
 * @date
 * @description
 */

import type { Metadata } from "next";
import { DM_Sans, Crimson_Pro } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import "./globals.css"; // import du css

const dmSans = DM_Sans({ subsets: ["latin"] });
const crimsonPro = Crimson_Pro({ subsets: ["latin"], weight: "700" });

// --- MÉTADONNÉES GLOBALES DE L'APPLICATION --------------------------
export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio développeur Fullstack",
};

/**
 * Layout principal de l'application, incluant la Navbar et le Footer.
 * @param param0 Objet contenant les enfants React à rendre dans le layout.
 * @returns Le layout complet avec la Navbar, le contenu de la page et le Footer.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      {/* scroll-smooth permet un défilement fluide quand on clique sur les liens */}
      <body
        className={`${dmSans.className} min-h-screen bg-light-lvl-0 text-light-lvl-4 dark:bg-dark-lvl-0 dark:text-dark-lvl-4`}
      >
        <Providers>
          {/* --- NAVBAR (barre de navigation) --- */}
          <Navbar />

          {/* --- CONTENU DE LA PAGE (page.tsx) --- */}
          {children}

          {/* --- FOOTER (Pied de page) --- */}
          <footer className="mt-8 w-full border-t border-light-lvl-2 bg-light-lvl-1 py-10 text-light-lvl-3 dark:border-dark-lvl-2 dark:bg-dark-lvl-1 dark:text-dark-lvl-3">
            <div className="px-4 text-center">
              <p className="mb-2">
                © 2026 - Alex Plociennik. Tous droits réservés.
              </p>
              <p className="text-sm">
                Construit avec{" "}
                <span className="font-semibold text-pastel-light-blue dark:text-pastel-blue">
                  Next.js
                </span>
                ,
                <span className="font-semibold text-pastel-light-blue dark:text-pastel-blue">
                  {" "}
                  TypeScript
                </span>{" "}
                &
                <span className="font-semibold text-pastel-light-blue dark:text-pastel-blue">
                  {" "}
                  Tailwind CSS
                </span>
                .
              </p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
