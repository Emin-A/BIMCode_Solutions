import { Hammer, Puzzle, Rocket, Search } from "lucide-react";
import { processSteps } from "../data/content.js";

const iconMap = {
  Search,
  Puzzle,
  Hammer,
  Rocket,
};

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="border-y border-slate-200/60 bg-slate-50/50 py-20 dark:border-slate-800/60 dark:bg-slate-900/30"
    >
      <div className="section-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
              How We Partner
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              A transparent playbook from discovery to deployment.
            </h2>
          </div>
          <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
            Each engagement is modular—join us for end-to-end delivery or bring
            us into specific phases. Either way, you will always know what
            happens next and why decisions are made.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = iconMap[step.icon] ?? Search;
            return (
              <article
                key={step.title}
                className="group rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-400/70 hover:shadow-xl dark:border-slate-800/60 dark:bg-slate-950/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/20 dark:text-brand-300">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
