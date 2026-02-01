/**
 * file : types/index.ts
 * author : Alex Plociennik
 * date : 2026-01-24
 * description : definitions de types pour le portfolio
 */

// Definition du type pour un projet de portfolio
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}