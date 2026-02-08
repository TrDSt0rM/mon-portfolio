/**
 * @type {Array<{category: string, items: string[]}>}
 * @file src/data/skills.ts
 * @author Alex Plociennik
 * @date 2026-01-24 latest
 * @description : liste des competences pour le portfolio
 */

export type TechCategory = "archi" | "lang" | "tools" | "web" | "db" | "sys";

export const categoryStyles: Record<TechCategory, string> = {
  archi:
    "border-pastel-light-pink text-pastel-light-pink dark:border-pastel-pink dark:text-pastel-pink",
  lang: "border-pastel-light-green text-pastel-light-green dark:border-pastel-green dark:text-pastel-green",
  tools:
    "border-pastel-light-peach text-pastel-light-peach dark:border-pastel-peach dark:text-pastel-peach",
  web: "border-pastel-light-blue text-pastel-light-blue dark:border-pastel-blue dark:text-pastel-blue",
  db: "border-pastel-light-purple text-pastel-light-purple dark:border-pastel-purple dark:text-pastel-purple",
  sys: "border-pastel-light-sage text-pastel-light-sage dark:border-pastel-sage dark:text-pastel-sage",
};

export const techMap: Record<string, TechCategory> = {
  // Architecture & Conception (Archi)
  "Design Patterns": "archi",
  Refactoring: "archi",
  UML: "archi",
  JSON: "archi",
  XML: "archi",
  // Langage de programmation (Lang)
  TypeScript: "lang",
  Java: "lang",
  C: "lang",
  Python: "lang",
  OCaml: "lang",
  Cobol: "lang",
  Ada: "lang",
  SQL: "lang",
  // Méthodologies, Outils & DevOps (tools)
  Docker: "tools",
  Nginx: "tools",
  "VS Code": "tools",
  "Agile (Scrum)": "tools",
  Trello: "tools",
  Git: "tools",
  UMLet: "tools",
  Eclipse: "tools",
  Checkstyle: "tools",
  "tests unitaires (JUnit)": "tools",
  // Développement Web & Frameworks (web)
  React: "web",
  "Vue.js": "web",
  JavaScript: "web",
  "Node.js": "web",
  Deno: "web",
  Oak: "web",
  HTML5: "web",
  CSS3: "web",
  PHP: "web",
  CodeIgniter4: "web",
  JavaFX: "web",
  Vite: "web",
  // Bases de données (db)
  MariaDB: "db",
  MySQL: "db",
  "SQL/PSM": "db",
  "MySQL Workbench": "db",
  PostgreSQL: "db",
  Prisma: "db",
  SQLite3: "db",
  // Optimisation & Systemes (sys)
  "IBM ILOG CPLEX": "sys",
  Windows: "sys",
  Linux: "sys",
};
