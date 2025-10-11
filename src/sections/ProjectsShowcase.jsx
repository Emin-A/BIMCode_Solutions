import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/content.js";

export default function ProjectsShowcase() {
  return (
    <section className="py-20">
      <div className="section-container flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
              Possibilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Automation experiences that unlock measurable impact.
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 md:w-1/2">
            <p>
              We co-create with your project team to ensure each solution feels
              native to your standards. Explore selected case studies below or
              dive into the full portfolio for detailed breakdowns.
            </p>
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
              >
                View all projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm transition hover:-translate-y-2 hover:border-brand-400/70 hover:shadow-2xl dark:border-slate-800/60 dark:bg-slate-950"
            >
              <div
                className={`relative h-44 w-full bg-gradient-to-br ${project.theme}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35)_0%,_rgba(15,23,42,0)_60%)] opacity-70" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {project.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition group-hover:text-brand-400 dark:text-slate-600 dark:group-hover:text-brand-300" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>
                <div className="mt-2 grid grid-cols-3 gap-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-slate-200/70 px-3 py-2 text-center dark:border-slate-700/70"
                    >
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[10px] leading-tight text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
