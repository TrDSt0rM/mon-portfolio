/**
 * @type Page
 * @file src/app/page.tsx
 * @author Alex Plociennik
 * @date 2026-02-07
 * @description Page principale du Portofolio
 */

import { Crimson_Pro } from "next/font/google";
import { projects } from "@/data/projects";
import { Skills } from "@/components/Skills";
import { TechBadge } from "@/components/TechBadge";

const crimson = Crimson_Pro({ subsets: ["latin"], weight: "700" });

/**
 * Page d'accueil du portfolio affichant la section héros, projets, compétences, à propos et contact.
 * @returns la page d'accueil complète du portfolio.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-light-lvl-0 pb-10 text-light-lvl-4 transition-colors duration-300 dark:bg-dark-lvl-0 dark:text-dark-lvl-4">
      {/* --- SECTION HÉROS --- */}
      <section className="w-full bg-gradient-to-br from-pastel-light-peach via-pastel-light-purple to-pastel-light-blue pb-20 pt-28 text-center text-dark-lvl-4 shadow-xl dark:from-pastel-peach dark:via-pastel-purple dark:to-pastel-blue dark:text-light-lvl-4">
        <h1 className={"mb-6 font-serif text-5xl font-bold"}>
          Alex Plociennik
        </h1>
        <h2 className={"mb-6 font-serif text-5xl font-semibold"}>
          Concepteur Développeur d'Applications
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-balance px-4 font-sans text-lg leading-relaxed text-dark-lvl-4 dark:text-light-lvl-4">
          Étudiant en Master TIIL-A à l'UBO. Je conçois des solutions
          logicielles robustes et performantes. Polyvalent, je maîtrise aussi
          bien l'écosystème <span className="font-bold">Java</span> que le{" "}
          <span className="font-bold">développement web moderne</span>{" "}
          (Next.js). Je suis à la recherche d'un{" "}
          <span className="font-bold">stage</span> de{" "}
          <span className="font-bold">3 mois minimun</span> débutant en{" "}
          <span className="font-bold">avril 2026</span>.
        </p>
        <div className="font-tech flex flex-wrap justify-center gap-4">
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

      {/* --- SECTION PROJETS --- */}
      <div
        id="projets"
        className="w-full max-w-5xl scroll-mt-20 px-4 pb-10 pt-20"
      >
        <h2
          className={
            "mb-8 rounded-full border border-light-lvl-2 bg-light-lvl-1 py-4 text-center font-serif text-2xl font-bold text-light-lvl-4 dark:border-dark-lvl-2 dark:bg-dark-lvl-1 dark:text-dark-lvl-4"
          }
        >
          Mes Réalisations
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            // Constante pour la gestion des badges
            const MAX_TAGS = 3; // Nombre limite de badges
            const visibleTags = project.technologies.slice(0, MAX_TAGS);
            const remainingTags = project.technologies.length - MAX_TAGS;

            return (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-xl border border-light-lvl-2 bg-light-lvl-1 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark-lvl-2 dark:bg-dark-lvl-1"
              >
                {/* --- IMAGE (Si tu en as une) --- */}
                {project.image && (
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-light-lvl-2 dark:bg-dark-lvl-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* --- CONTENU DE LA CARTE --- */}
                {/* flex-1 permet à cette partie de grandir pour pousser le footer vers le bas */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-2 font-serif text-xl font-bold text-light-lvl-4 dark:text-dark-lvl-4">
                    {project.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 whitespace-pre-line font-sans text-sm text-light-lvl-3 dark:text-dark-lvl-3">
                    {project.description}
                  </p>

                  {/* Les badges technologies */}
                  <div className="font-tech mt-auto flex flex-wrap items-center gap-2">
                    {visibleTags.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}

                    {/* Le badge "+X" si il y en a trop */}
                    {remainingTags > 0 && (
                      <span className="overflow-hidden rounded-full border border-light-lvl-0 bg-light-lvl-2 px-1.5 py-1 text-xs font-medium text-light-lvl-4 dark:border-dark-lvl-0 dark:bg-dark-lvl-2 dark:text-dark-lvl-4">
                        +{remainingTags}
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={`/projets/${project.id}`}
                  className="font-tech mt-4 block w-full rounded-lg bg-gradient-to-r from-pastel-light-green to-pastel-light-blue py-2 text-center font-medium text-dark-lvl-4 transition dark:from-pastel-purple dark:to-pastel-blue dark:text-light-lvl-4"
                >
                  Voir le détail
                </a>
              </article>
            );
          })}
          {/* Fin de la boucle */}
        </div>
      </div>

      {/* --- SECTION COMPÉTENCES --- */}
      <Skills />

      {/* --- À PROPOS --- */}
      <section
        id="about-me"
        className="w-full max-w-5xl scroll-mt-20 px-4 pb-20 pt-10"
      >
        <h2
          className={
            "mb-8 rounded-full border border-light-lvl-2 bg-light-lvl-1 py-4 text-center font-serif text-2xl font-bold text-light-lvl-4 dark:border-dark-lvl-2 dark:bg-dark-lvl-1 dark:text-dark-lvl-4"
          }
        >
          À Propos de Moi
        </h2>
        <div className="mx-auto text-balance rounded-xl border border-light-lvl-2 bg-light-lvl-1 px-4 py-4 text-center font-sans text-lg leading-relaxed text-light-lvl-4 dark:border-dark-lvl-2 dark:bg-dark-lvl-1 dark:text-dark-lvl-4">
          <p className="py-2">
            Étudiant en première année de Master TIIL-A (Technologies de
            l'Information et Ingénierie du Logiciel) à l'Université de Bretagne
            Occidentale, Je suis à la recherche d'un stage d'une durée de 3 mois
            minimum à partir du 1er avril 2026, suivi, dans l'idéal, d'une
            alternance d'un an en Master 2.
          </p>
          <p className="py-2">
            Je suis passionné par le développement Web et la conception de
            solutions logicielles innovantes. Mon objectif est de contribuer
            activement à des projets stimulants tout en continuant à développer
            mes compétences techniques et professionnelles.
          </p>
        </div>
      </section>

      {/* --- SECTION CONTACT --- */}
      <section
        id="contact"
        className="w-full bg-gradient-to-tr from-pastel-light-purple via-pastel-light-pink to-pastel-light-peach py-10 text-center text-light-lvl-0 dark:from-pastel-purple dark:via-pastel-pink dark:to-pastel-peach dark:text-dark-lvl-0"
      >
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 font-serif text-3xl font-bold">Contact</h2>
          <p className="fotn-sans mb-8 text-lg text-dark-lvl-3 dark:text-light-lvl-3">
            Mon profil vous intéresse ? Envoyez-moi un mail.
          </p>

          <div className="font-tech flex flex-wrap justify-center gap-6">
            <a
              href="mailto:alex.plociennik.ap@gmail.com"
              title="Envoyer un mail à alex.plociennik.ap@gmail.com"
              className="w-60 rounded-full border border-light-lvl-2 bg-light-lvl-0 py-3 text-center font-bold text-pastel-light-blue shadow-lg transition hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-pastel-blue dark:hover:border-pastel-blue"
            >
              Me contacter par email
            </a>

            <a
              href="https://linkedin.com/in/alex-plociennik-09a15b250/"
              target="_blank"
              className="w-60 rounded-full border border-light-lvl-2 bg-light-lvl-0 py-3 text-center font-bold text-pastel-light-blue shadow-lg transition hover:border-pastel-light-blue dark:border-dark-lvl-1 dark:bg-dark-lvl-2 dark:text-pastel-blue dark:hover:border-pastel-blue"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
