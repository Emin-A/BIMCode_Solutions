import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/content.js";
import ContactSection from "../sections/ContactSection.jsx";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/60 bg-white py-20 dark:border-slate-800/60 dark:bg-slate-950">
        <div className="section-container">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Projects
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr,0.8fr]">
            <div>
              <div
                className={`relative h-48 w-full overflow-hidden rounded-3xl bg-gradient-to-br ${project.theme}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45)_0%,_rgba(15,23,42,0)_70%)]" />
              </div>
              <h1 className="mt-8 text-4xl font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h1>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand-500 dark:text-brand-300">
                {project.tagline}
              </p>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                {project.summary}
              </p>
            </div>
            <div className="flex flex-col gap-5 rounded-3xl border border-slate-200/70 bg-slate-50/70 p-8 text-sm text-slate-600 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/70 dark:text-slate-300">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Impact Snapshot
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-xl font-semibold text-slate-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Key Technologies
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/60 py-16 dark:bg-slate-900/20">
        <div className="section-container grid gap-12 lg:grid-cols-[1.3fr,0.7fr]">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Engagement Overview
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
            <div className="rounded-3xl border border-brand-100 bg-brand-50/50 p-8 dark:border-brand-500/30 dark:bg-brand-500/10">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-300">
                Timeline Insights
              </h3>
              <p className="mt-3 text-sm text-brand-700 dark:text-brand-200">
                We adopted a layered release strategy to deliver tangible wins
                every sprint. Automation components were shipped incrementally,
                allowing designers to experience value and provide feedback from
                week one.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                What we delivered
              </h3>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-[2px] h-5 w-5 text-brand-500 dark:text-brand-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-6 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-md dark:border-slate-800/70 dark:bg-slate-950">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Next Steps
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Interested in a similar outcome? We tailor discovery workshops
                to the maturity level of your BIM and data practice.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 text-sm text-slate-600 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white">
                Common extensions
              </p>
              <ul className="mt-3 space-y-2">
                <li>• Studio-wide automation blueprint</li>
                <li>• Training programs &amp; enablement</li>
                <li>• Managed analytics dashboards</li>
              </ul>
            </div>
            <Link
              to="/#contact"
              className="inline-flex w-full justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400"
            >
              Start planning your automation
            </Link>
          </aside>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
