import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "../theme/ThemeProvider.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-brand-400 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
    >
      {theme === "dark" ? (
        <SunMedium className="h-5 w-5" strokeWidth={1.5} />
      ) : (
        <MoonStar className="h-5 w-5" strokeWidth={1.5} />
      )}
    </button>
  );
}
