/**
 * @type {import('next').NextPage}
 * @file src/app/page.tsx
 * @author Alex Plociennik
 * @date 2026-01-24 last modified: 2026-02-01
 * @description Page d'accueil du portfolio
 */
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { Crimson_Pro } from "next/font/google";

const crimson = Crimson_Pro({ subsets: ["latin"], weight: "700" });

/**
 * Page d'accueil du portfolio affichant la section héros, compétences, projets et contact.
 * @returns la page d'accueil complète du portfolio.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-light-lvl-0 text-light-lvl-4 transition-colors duration-300 dark:bg-dark-lvl-0 dark:text-dark-lvl-4">
      {/* --- SECTION HÉROS --- */}
      <section className="mb-12 w-full bg-gradient-to-br from-pastel-light-peach via-pastel-light-purple to-pastel-light-blue py-24 text-center font-semibold text-dark-lvl-4 shadow-xl dark:from-pastel-peach dark:via-pastel-purple dark:to-pastel-blue dark:text-light-lvl-4">
        <h1 className="mb-6 text-5xl font-bold">Bonjour, je suis Alex</h1>
        <p className="mx-auto mb-8 max-w-2xl px-4 text-xl text-dark-lvl-4 dark:text-light-lvl-4">
          Description
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projets"
            className="w-56 rounded-full border border-light-lvl-2 bg-light-lvl-0 py-3 text-center font-bold text-pastel-light-blue shadow-lg transition hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-pastel-blue dark:hover:border-pastel-blue"
          >
            Voir mes projets
          </a>
          <a
            href="/CV-Alex_Plociennik.pdf"
            download="Cv-Alex_Plociennik"
            className="w-56 rounded-full border border-light-lvl-2 bg-light-lvl-0 py-3 text-center font-bold text-pastel-light-blue shadow-lg transition hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-pastel-blue dark:hover:border-pastel-blue"
          >
            télécharger mon CV
          </a>
        </div>
      </section>

      {/* --- SECTION COMPÉTENCES --- */}
      <section className="mb-20 w-full max-w-5xl px-4">
        <h2
          className={`${crimson.className} mb-8 rounded-full border border-light-lvl-2 bg-light-lvl-1 py-4 text-center text-2xl font-bold text-light-lvl-4 dark:border-dark-lvl-2 dark:bg-dark-lvl-1 dark:text-dark-lvl-4`}
        >
          Ma Stack Technique
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="rounded-xl border border-light-lvl-2 bg-light-lvl-1 p-6 shadow-sm transition hover:shadow-md dark:border-dark-lvl-2 dark:bg-dark-lvl-1"
            >
              <h3 className="mb-4 border-b border-light-lvl-2 pb-2 text-lg font-bold text-pastel-light-blue dark:border-dark-lvl-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-light-lvl-2 bg-light-lvl-1 px-3 py-1 text-sm font-medium text-light-lvl-3 dark:border-dark-lvl-2 dark:bg-dark-lvl-0 dark:text-dark-lvl-3"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION PROJETS --- */}
      <div id="projets" className="mb-20 w-full max-w-5xl px-4">
        <h2
          className={`${crimson.className} mb-8 rounded-full border border-light-lvl-2 bg-light-lvl-1 py-4 text-center text-2xl font-bold text-light-lvl-4 dark:border-dark-lvl-2 dark:bg-dark-lvl-1 dark:text-dark-lvl-4`}
        >
          Mes Réalisations
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-light-lvl-2 bg-light-lvl-1 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark-lvl-2 dark:bg-dark-lvl-1"
            >
              {/* Image du projet */}
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-light-lvl-2 dark:bg-dark-lvl-2">
                {/* On utilise une balise img simple pour commencer */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-light-lvl-4 dark:text-dark-lvl-4">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-light-lvl-3 dark:text-dark-lvl-3">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-light-lvl-2 bg-light-lvl-2 px-2 py-1 text-xs font-semibold text-pastel-light-blue dark:border-dark-lvl-2 dark:bg-dark-lvl-2 dark:text-pastel-blue"
                  >
                    {" "}
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={`/projets/${project.id}`}
                className="block w-full rounded-lg bg-gradient-to-r from-pastel-light-green to-pastel-light-blue py-2 text-center font-medium text-dark-lvl-4 transition dark:from-pastel-purple dark:to-pastel-blue dark:text-light-lvl-4"
              >
                Voir le détail
              </a>
            </div>
          ))}
          {/* Fin de la boucle */}
        </div>
      </div>

      {/* --- SECTION CONTACT --- */}
      <section
        id="contact"
        className="mt-12 w-full bg-gradient-to-tr from-pastel-light-purple via-pastel-light-pink to-pastel-light-peach py-20 text-center text-light-lvl-0 dark:from-pastel-purple dark:via-pastel-pink dark:to-pastel-peach dark:text-dark-lvl-0"
      >
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-3xl font-bold">Contact</h2>
          <p className="mb-8 text-lg text-gray-400">Description</p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:alex.plociennik.ap@gmail.com"
              className="w-56 rounded-full border border-light-lvl-2 bg-light-lvl-0 py-3 text-center font-bold text-pastel-light-blue shadow-lg transition hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-pastel-blue dark:hover:border-pastel-blue"
            >
              Me contacter par email
            </a>

            <a
              href="https://linkedin.com/in/alex-plociennik-09a15b250/"
              target="_blank"
              className="w-56 rounded-full border border-light-lvl-2 bg-light-lvl-0 py-3 text-center font-bold text-pastel-light-blue shadow-lg transition hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-pastel-blue dark:hover:border-pastel-blue"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
