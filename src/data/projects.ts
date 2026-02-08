/**
 * @type {import('@/types').Project[]}
 * @file src/data/projects.ts
 * @author Alex Plociennik
 * @date 2026-01-24 last modified: 2026-02-03
 * @description liste des projets pour le portfolio
 */
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 6,
    title: "Votio",
    description:
      "Application de vote et sondage en ligne. L'application permet aux utilisateurs de créer des sondages et d\’ajouter des options de réponse. " +
      "Les participants peuvent voter pour une ou plusieurs options selon des règles définies par le créateur du songade. " +
      "L'application gère également l'authentification des utilisateurs et assure la persistance des données.",
    technologies: [
      "TypeScript",
      "React",
      "SQLite3",
      "Deno",
      "Oak",
      "Vite",
      "Nginx",
      "git",
    ],
    link: [
      {
        url: "https://github.com/TrDSt0rM/votio-app-client",
        label: "Voir le code source Client (GitHub)",
      },
      {
        url: "https://github.com/TrDSt0rM/votio-app-server",
        label: "Voir le code source Serveur (GitHub)",
      },
    ],
    image: "/votio-screenshot.png",
  },
  {
    id: 5,
    title: "Gestion de Réseaux",
    description:
      "Application de gestion de réseaux informatiques. Conception et Développement d'une architecture logicielle modulaire " +
      "pour la gestion de parcs informatiques, structurée par les Design Patterns (MVC, Factory, Observer  v).",
    technologies: [
      "Design Patterns",
      "Java",
      "JSON",
      "JavaFX",
      "UML",
      "Refactoring",
      "tests unitaires (JUnit)",
      "Eclipse",
      "Checkstyle",
    ],
    link: [
      {
        url: "https://github.com/TrDSt0rM/gestion-reseau",
        label: "Voir le code source (GitHub)",
      },
    ],
    image: "/gestion-reseau-screen01.png",
  },
  {
    id: 4,
    title: "La Fourmiliere",
    description: "Simulation de la vie d'une fourmilière.",
    technologies: [
      "Java",
      "Git",
      "Design Patterns",
      "JavaFX",
      "tests unitaires (JUnit)",
      "Eclipse",
    ],
    link: [
      {
        url: "https://github.com/TrDSt0rM/",
        label: "Voir le code source (GitHub)",
      },
    ],
    image: "/fourmiliere-screenshot.jpg",
  },
  {
    id: 3,
    title: "Olympix",
    description:
      "Application de gestion de concours en ligne.\n L'application permet aux enseignants de créer, gérer et suivre des jeux sérieux pour leurs étudiants.",
    technologies: [
      "CodeIgniter4",
      "PHP",
      "MySQL",
      "SQL/PSM",
      "MariaDB",
      "Git",
      "Agile (Scrum)",
      "Trello",
      "JavaScript",
      "HTML5",
      "CSS3",
      "UMLet",
      "MySQL Workbench",
    ],
    link: [
      {
        url: "https://github.com/TrDSt0rM/Olympix",
        label: "Voir le code source (GitHub)",
      },
    ],
    image: "/olympix-screen01.png",
  },
  {
    id: 2,
    title: "Systeme-VOD",
    description:
      "Application de gestion de films (système de VOD).\nConception et développement d'une application java",
    technologies: [
      "Java",
      "Git",
      "JavaFX",
      "Eclipse",
      "tests unitaires (JUnit)",
      "Checkstyle",
    ],
    link: [
      {
        url: "https://github.com/TrDSt0rM/",
        label: "Voir le code source (GitHub)",
      },
    ],
    image: "/system-vod-screen01.jpg",
  },
  {
    id: 1,
    title: "Esc@peWeb",
    description:
      "Application de gestion de jeux sérieux en ligne.\nL'application permet aux enseignants de créer, gérer et suivre des jeux sérieux pour leurs étudiants.",
    technologies: [
      "CodeIgniter4",
      "PHP",
      "MySQL",
      "SQL/PSM",
      "MariaDB",
      "Git",
      "Agile (Scrum)",
      "Trello",
      "JavaScript",
      "HTML5",
      "CSS3",
      "UMLet",
      "MySQL Workbench",
    ],
    link: [
      {
        url: "https://github.com/TrDSt0rM/",
        label: "Voir le code source (GitHub)",
      },
    ],
    image: "/escapeweb-screen01.png",
  },
];
