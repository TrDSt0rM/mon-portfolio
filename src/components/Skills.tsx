/**
 * @type
 * @file src/components/skills.tsx
 * @author : Alex Plociennik
 * @date 2026-01-24 latest 2026-02-06
 * @description liste des competences techniques et du composant pour le portfolio
 */

// Assure-toi que le chemin est bon vers ton fichier data
import { techMap, TechCategory, categoryStyles } from "@/data/stack";
import { Crimson_Pro } from "next/font/google";

const crimson = Crimson_Pro({ subsets: ["latin"], weight: "700" });

/**
 * Titre pour les différentes catégories.
 */
const categoryTitles: Record<TechCategory, string> = {
  web: "Développement Web",
  lang: "Langages",
  tools: "Outils & DevOps",
  db: "Bases de Données",
  archi: "Architecture & Conception",
  sys: "Systèmes & Optimisation",
};

/**
 * Renvoie un objet de type skillsByCategory qui contient, pour chaque categorie, un l'ensemble des technologies affiliées.
 * @returns chaque catégorie et ses technologies
 */
export const Skills = () => {
  // regroupe les technos par catégorie
  const skillsByCategory = Object.entries(techMap).reduce(
    (acc, [tech, category]) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(tech);
      return acc;
    },
    {} as Record<TechCategory, string[]>
  );

  // ordre d'affichage des catégories
  const categoriesOrdered: TechCategory[] = [
    "archi",
    "web",
    "tools",
    "lang",
    "db",
    "sys",
  ];

  /**
   * composant react des compétences
   */
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-10">
      <h2
        className={
          "mb-8 rounded-full border border-light-lvl-2 bg-light-lvl-1 py-4 text-center font-serif text-2xl font-bold text-light-lvl-4 dark:border-dark-lvl-2 dark:bg-dark-lvl-1 dark:text-dark-lvl-4"
        }
      >
        Mes Compétences Techniques
      </h2>

      {/* GRILLE 3 colonnes (md) / 2 lignes */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoriesOrdered.map((catKey) => (
          <div
            key={catKey}
            className={`flex flex-col rounded-2xl border bg-light-lvl-1 p-6 dark:bg-dark-lvl-1 ${
              categoryStyles[catKey]
            }`}
          >
            {/* Titre de la catégorie */}
            <h3
              className={`mb-4 font-sans text-xl font-bold ${categoryStyles[catKey]}`}
            >
              {categoryTitles[catKey]}
            </h3>

            {/* Liste des badges */}
            <div className="flex flex-wrap gap-2">
              {skillsByCategory[catKey]?.map((tech) => (
                <span
                  key={tech}
                  className={`font-tech rounded-full border px-2 py-1 text-sm font-medium transition hover:scale-110 ${categoryStyles[catKey]}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
