import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/content.js";
import ContactSection from "../sections/ContactSection.jsx";

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-slate-200/60 bg-white py-20 dark:border-slate-800/60 dark:bg-slate-950">
        <div className="section-container">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
            Digital tools and automation platforms that serve real project
            teams every day.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Browse a sample of the solutions we have delivered. Each case study
            pairs rigorous BIM foundations with modern product thinking so your
            team can own the workflow long after launch.
          </p>
        </div>
      </section>

      <section className="bg-slate-50/60 py-16 dark:bg-slate-900/20">
        <div className="section-container space-y-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-md transition hover:border-brand-400/70 dark:border-slate-800/60 dark:bg-slate-950"
            >
              <div
                className={`h-40 w-full bg-gradient-to-br ${project.theme}`}
              >
                <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.4)_0%,_rgba(15,23,42,0)_70%)]" />
              </div>
              <div className="grid gap-10 p-10 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="space-y-5">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500 dark:text-brand-300">
                    {project.tagline}
                  </p>
                  <p className="text-base text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-4 text-center dark:border-slate-700/70 dark:bg-slate-900/70"
                      >
                        <div className="text-xl font-semibold text-slate-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      Key Deliverables
                    </h3>
                    <ul className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                      {project.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2">
                          <BadgeCheck className="h-4 w-4 text-brand-500 dark:text-brand-300" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                      Stack Highlights
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
                  >
                    View project deep dive
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
