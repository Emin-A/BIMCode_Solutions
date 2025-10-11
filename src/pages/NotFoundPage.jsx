import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white dark:bg-slate-950">
      <div className="section-container flex flex-col items-center gap-6 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-500 dark:text-brand-300">
          404
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
          We could not find the page you are after.
        </h1>
        <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
          The link may be outdated or the page has moved. Head back to the home
          screen to continue exploring BIMCode Solutions.
        </p>
        <Link
          to="/"
          className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
