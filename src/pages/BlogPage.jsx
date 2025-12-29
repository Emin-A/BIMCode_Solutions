import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "../data/content.js";
import logoPng from "../assets/Logo BIMCode Solutions 4 Final.png";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(blogPosts.length / POSTS_PER_PAGE));

  const pagedPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return blogPosts.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="section-container space-y-10">
        <header className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm dark:border-slate-800/60 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
            Blog & notes
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">
            Build automation the right way—short, actionable reads.
          </h1>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Practical notes on shipping reliable Revit automation—focused on standards, QA, and long-term
            maintainability.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50 p-3 dark:border-slate-700/70 dark:bg-slate-900/70">
              <img
                src={logoPng}
                alt="BIMCode Solutions logo"
                className="h-12 w-12 rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950"
              />
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">BIMCode Signals</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Monthly drop of tactics for Revit-first teams.
                </div>
              </div>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
            >
              Contact us about a topic
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pagedPosts.map((post) => (
            <article
              key={post.slug}
              className="flex h-full flex-col rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-400/70 dark:border-slate-800/60 dark:bg-slate-950"
            >
              <div className="card-visual mb-4 h-32 w-full">
                <img
                  src={post.image || logoPng}
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
              <a
                href={post.link}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 transition hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
              >
                Read <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isActive = pageNumber === page;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#4f6a7d] text-white"
                      : "border border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-200"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
