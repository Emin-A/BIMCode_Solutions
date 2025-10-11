export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 py-8 text-sm text-slate-500 transition dark:border-slate-800/70 dark:bg-slate-950/80 dark:text-slate-400">
      <div className="section-container flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <p>&copy; {new Date().getFullYear()} BIMCode Solutions. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-500 dark:hover:text-brand-300"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-500 dark:hover:text-brand-300"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@bimcodesolutions.com"
            className="transition hover:text-brand-500 dark:hover:text-brand-300"
          >
            hello@bimcodesolutions.com
          </a>
        </div>
      </div>
    </footer>
  );
}
