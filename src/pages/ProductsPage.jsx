import { ArrowUpRight } from "lucide-react";
import { products } from "../data/content.js";

export default function ProductsPage() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="section-container space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500 dark:text-brand-300">
            Products & Portfolio
          </p>
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
            Automation tools built for Revit production teams.
          </h1>
          <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
            Explore the current lineup. Each solution is production-tested, delivered directly by the
            engineer who designs it, and can be tailored to your standards.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="flex h-full flex-col gap-4 bg-transparent p-2 transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {product.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {product.description}
                  </p>
                </div>
                <span className="bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:bg-slate-800 dark:text-slate-200">
                  {product.price}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 bg-brand-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <button className="btn-primary px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em]">
                  {product.name.includes("Starter")
                    ? "Get starter automation"
                    : product.name.includes("Compliance")
                      ? "Explore compliance engine"
                      : "Request AI copilot access"}
                </button>
                <button className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-slate-200 text-slate-600 transition transform duration-200 hover:-translate-y-[2px] hover:border-brand-400 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-200">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="sr-only">Learn more</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
