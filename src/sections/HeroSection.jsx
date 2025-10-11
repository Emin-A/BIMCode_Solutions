import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
      <div className="section-container relative flex flex-col-reverse items-center gap-12 py-20 lg:flex-row lg:gap-16 lg:py-28">
        <div className="flex-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
            Intelligent BIM Automation
          </p>
          <h1 className="text-4xl font-semibold leading-snug text-slate-900 dark:text-white md:text-5xl lg:text-[3.25rem]">
            We build AI workflows, Revit automation, and digital tooling that
            unlock scalable BIM delivery.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            BIMCode Solutions partners with architecture and engineering teams
            to transform manual production into insight-driven, human-centered
            automation. From Dynamo scripts to full productized platforms, we
            ship systems that elevate design and operations.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400"
            >
              Explore Case Studies
            </Link>
            <a
              href="#contact"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold tracking-wide text-slate-700 transition hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              Start a Project
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 text-sm text-slate-500 dark:text-slate-400 sm:grid-cols-4">
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">
                150+ hours
              </dt>
              <dd>Manual drafting saved each month</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">
                12x ROI
              </dt>
              <dd>Average automation payback</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">
                25 countries
              </dt>
              <dd>Projects delivered across the globe</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white">
                BIM-first
              </dt>
              <dd>Deep Revit and computation expertise</dd>
            </div>
          </dl>
        </div>
        <div className="flex w-full max-w-md flex-1 items-center justify-center lg:max-w-lg">
          <div className="relative w-full max-w-sm rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-2xl backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/90">
            <div className="rounded-2xl bg-gradient-to-br from-brand-500 via-indigo-500 to-slate-900 p-8 text-white shadow-inner">
              <img
                src={logo}
                alt="BIMCode Solutions schematic mark"
                className="mx-auto mb-6 h-20 w-20 rounded-2xl border border-white/20 bg-white/10 p-3"
              />
              <h3 className="text-center text-xl font-semibold tracking-wide">
                BIMCode Solutions
              </h3>
              <p className="mt-4 text-center text-sm text-white/80">
                Automation accelerators, tailored Revit scripting, and AI
                co-pilots that respect your studio’s standards.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.2em] text-white/70">
                <span className="rounded-full border border-white/20 px-3 py-2 text-center">
                  Dynamo Labs
                </span>
                <span className="rounded-full border border-white/20 px-3 py-2 text-center">
                  AI Workflows
                </span>
                <span className="rounded-full border border-white/20 px-3 py-2 text-center">
                  Revit Scripts
                </span>
                <span className="rounded-full border border-white/20 px-3 py-2 text-center">
                  Digital Twins
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
