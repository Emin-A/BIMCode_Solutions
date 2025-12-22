import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "../data/content.js";
import logoPng from "../assets/Logo BIMCode Solutions 4 Final.png";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="bg-gradient-to-b from-white via-slate-50/80 to-slate-100/60 py-18 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[1fr,1.1fr]">
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm dark:border-slate-800/60 dark:bg-slate-950">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
                Blog & notes
              </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
              Build automation the right way—short, actionable reads.
            </h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Practical notes on shipping reliable Revit automation—focused on standards, QA, and long-term maintainability.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 p-3 dark:border-slate-700/70 dark:bg-slate-900/70">
            <img
              src={logoPng}
              alt="BIMCode Solutions logo"
              className="h-12 w-12 rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950"
            />
            <div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                BIMCode Signals
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Monthly drop of tactics for Revit-first teams.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
            >
              Contact us about a topic
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 transition hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-200"
            >
              Blog link
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-400/70 dark:border-slate-800/60 dark:bg-slate-950"
            >
              <div className="card-visual mb-4 h-32 w-full">
                <img
                  src={logoPng}
                  alt=""
                  className="absolute inset-0 m-auto h-16 w-16 object-contain"
                />
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {post.tag}
                </span>
                <span>{post.time}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {post.title}
              </h3>
              {post.hook && (
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {post.hook}
                </p>
              )}
              <button className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200">
                Read <ArrowUpRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
