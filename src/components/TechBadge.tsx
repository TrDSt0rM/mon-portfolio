/**
 * @type {Array<{category: string,  items: string[]}>}
 * @file src/data/TechBadge.ts
 * @author Alex Plociennik
 * @date 2026-02-05
 * @description Badge technique réutilisable avec gestion des couleurs sémantiques.
 */
import { techMap, categoryStyles } from "@/data/stack";

interface TechBadgeProps {
  name: string;
}

export const TechBadge = ({ name }: TechBadgeProps) => {
  // On récupère la catégorie, si elle n'existe pas on met "web" par défaut
  const category = techMap[name] || "web";
  const styles = categoryStyles[category];

  return (
    <span
      className={`rounded-full border px-2 py-1 text-xs font-bold transition-colors ${styles}`}
    >
      {name}
    </span>
  );
};
