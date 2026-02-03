/**
 * @file src/data/projects.ts
 * @author Alex Plociennik
 * @date 2026-01-24
 * @description liste des projets pour le portfolio
 */
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Esc@peWeb",
    description:
      "Application de gestion de jeux sérieux en ligne.\n L'application permet aux enseignants de créer, gérer et suivre des jeux sérieux pour leurs étudiants.",
    technologies: [
      "html5",
      "css3",
      "javascript",
      "codeIgniter4",
      "php",
      "mysql",
    ],
    link: "https://github.com/TrDSt0rM/",
    image: "/projet1.jpg",
  },
  {
    id: 2,
    title: "Systeme-VOD",
    description: "Développement d'une application Java par groupe de 3.",
    technologies: ["Java", "JavaFX", "Eclipse", "GitLab"],
    link: "https://github.com/TrDSt0rM/",
    image: "/system-vod-screen01.jpg",
  },
  {
    id: 3,
    title: "Olympix",
    description:
      "Application de gestion de concours en ligne.\n L'application permet aux enseignants de créer, gérer et suivre des jeux sérieux pour leurs étudiants.",
    technologies: [
      "html5",
      "css3",
      "javascript",
      "codeIgniter4",
      "php",
      "mysql",
    ],
    link: "https://github.com/TrDSt0rM/Olympix",
    image: "/olympix-screen01.png",
  },
];
