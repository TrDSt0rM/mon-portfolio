/**
 * @type {import('next').NextPage}
 * @file /src/app/projets/[id]/page.tsx
 * @author Alex Plociennik
 * @date 2026-01-24
 * @description Page de détail pour un projet spécifique dans le portfolio
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { TechBadge } from "@/components/TechBadge";

/**
 * Cette fonction récupère les détails d'un projet en fonction de l'ID fourni dans les paramètres de l'URL et affiche une page de détail pour ce projet.
 * @param param0 Objet contenant les paramètres de l'URL, y compris l'ID du projet.
 * @returns Une page de détail du projet avec son titre, sa description, les technologies utilisées et un lien vers le code source.
 */
export default async function ProjectDetail({
  params,
}: {
  params: { id: string };
}) {
  // Note pour plus tard : Dans Next.js 15, params est parfois une Promise.

  const { id } = await params;
  const projectId = parseInt(id);

  const project = projects.find((p) => p.id === projectId);

  // ID  projet inexistant => affichage page 404
  if (!project) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col items-center bg-light-lvl-0 pt-40 text-light-lvl-4 transition-colors duration-300 dark:bg-dark-lvl-0 dark:text-dark-lvl-4">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-light-lvl-2 bg-light-lvl-1 shadow-lg dark:border-dark-lvl-2 dark:bg-dark-lvl-1">
        {/* En-tête du projet */}
        <div className="bg-gradient-to-br from-pastel-light-peach via-pastel-light-purple to-pastel-light-blue py-10 text-center text-dark-lvl-4 shadow-xl dark:from-pastel-peach dark:via-pastel-purple dark:to-pastel-blue dark:text-light-lvl-4">
          <h1 className="mb-2 font-serif text-4xl font-bold">
            {project.title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2 p-8">
          <h2 className="mb-4 font-serif text-2xl font-semibold">
            Stack & Expertise Technique
          </h2>
          <div className="font-tech flex flex-wrap items-center gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
        <div className="mx-8 border-b-2 border-dark-lvl-2"></div>
        {/* Contenu */}
        <div className="px-8 pt-8 text-light-lvl-4 dark:text-dark-lvl-4">
          <h2 className="mb-4 font-serif text-2xl font-semibold">
            À propos du projet
          </h2>
          <p className="mb-8 font-sans text-lg leading-relaxed text-light-lvl-3 dark:text-dark-lvl-3">
            {project.description}
          </p>

          <h2 className="mb-4 font-serif text-2xl font-semibold">Liens</h2>
          {project.link.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              className="font-tech mb-4 mr-4 inline-block rounded-lg border-light-lvl-0 bg-light-lvl-2 px-6 py-3 dark:border-dark-lvl-0 dark:bg-dark-lvl-2"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Pied de carte avec bouton retour */}
        <div className="mt-4 rounded-b-xl border border-light-lvl-0 bg-light-lvl-2 p-6 dark:border-dark-lvl-0 dark:bg-dark-lvl-2">
          <Link
            href="/"
            className="font-tech font-medium text-light-lvl-4 dark:text-dark-lvl-4"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
