export default function ProductDemoSection() {
  return (
    <section
      id="demo"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-100/60 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-500 dark:text-brand-300">
            Product demo
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            See how BIMCode accelerates Revit delivery.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            A quick walkthrough of our automation pack: preflight checks, batch
            sheet creation, compliant exports, and an AI copilot that speeds up
            production while staying on your standards.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-700">
              Revit + Dynamo
            </span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-700">
              QA automation
            </span>
            <span className="rounded-full bg-white px-3 py-1 shadow-sm ring-1 ring-slate-200 dark:bg-slate-950 dark:ring-slate-700">
              AI-assisted tasks
            </span>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-lg dark:border-slate-800/70 dark:bg-slate-950">
          <div className="relative aspect-video w-full">
            <iframe
              title="BIMCode Solutions demo"
              src="https://www.youtube.com/embed/5Peo-ivmupE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <div className="flex items-center justify-between px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
            <span>Revit automation in 90 seconds</span>
            <span className="text-xs uppercase tracking-[0.25em] text-brand-600 dark:text-brand-300">
              Watch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
