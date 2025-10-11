import { Link } from "react-router-dom";
import { testimonials } from "../data/content.js";

export default function TestimonialsPreview() {
  const preview = [
    ...testimonials.clients.slice(0, 1),
    ...testimonials.team.slice(0, 1),
  ];

  return (
    <section className="border-y border-slate-200/60 bg-white py-20 dark:border-slate-800/60 dark:bg-slate-950">
      <div className="section-container flex flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
              Voices
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Teams trust us to blend precision, creativity, and speed.
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300 md:w-1/2">
            <p>
              Hear from the people who experience BIMCode Solutions daily. We
              capture client impact and the craft behind the scenes from our
              internal specialists.
            </p>
            <div>
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
              >
                Read all testimonials →
              </Link>
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {preview.map((item) => (
            <figure
              key={item.name}
              className="h-full rounded-3xl border border-slate-200/60 bg-slate-50/70 p-8 shadow-sm transition hover:-translate-y-1 hover:border-brand-400/70 dark:border-slate-800/60 dark:bg-slate-900/70"
            >
              <blockquote className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-slate-500 dark:text-slate-300">
                <div className="font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </div>
                <div>{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
