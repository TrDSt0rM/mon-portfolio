/**
 * @type {import('next').NextPage}
 * @file /src/app/projets/[id]/page.tsx
 * @author Alex Plociennik
 * @date 2026-01-24
 * @description Page de détail pour un projet spécifique dans le portfolio
 */

import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <main className="flex min-h-screen flex-col items-center bg-gray-50 p-12">
      <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-lg">
        {/* En-tête du projet */}
        <div className="bg-blue-600 p-8 text-white">
          <h1 className="mb-2 text-4xl font-bold">{project.title}</h1>
          <div className="mt-4 flex gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/20 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contenu */}
        <div className="p-8 text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold">À propos du projet</h2>
          <p className="mb-8 text-lg leading-relaxed">{project.description}</p>

          <h2 className="mb-4 text-2xl font-semibold">Liens</h2>
          <a
            href={project.link}
            target="https://github.com/TrDSt0rM/Olympix"
            className="inline-block rounded-lg bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700"
          >
            Voir le code source (GitHub)
          </a>
        </div>

        {/* Pied de carte avec bouton retour */}
        <div className="border-t border-gray-200 bg-gray-100 p-6">
          <Link href="/" className="font-medium text-blue-600 hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
