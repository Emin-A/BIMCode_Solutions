import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import logo from "../assets/logo.svg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Process", to: "/#process" },
  { label: "Projects", to: "/projects" },
  { label: "Testimonials", to: "/testimonials" },
];

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md transition dark:border-slate-800/70 dark:bg-slate-950/85">
      <div className="section-container flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BIMCode Solutions logo"
            className="h-10 w-10 rounded-xl border border-slate-200 shadow-sm dark:border-slate-700"
          />
          <div className="flex flex-col leading-none text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
            <span className="text-xl font-bold tracking-[0.16em] text-slate-900 dark:text-slate-100">
              BIMCODE
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              SOLUTIONS
            </span>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
          {navItems.map((item) =>
            item.to.startsWith("/#") ? (
              <a
                key={item.label}
                href={item.to}
                className="rounded-full px-3 py-2 transition hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:hover:text-brand-300"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-full px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
                    isActive
                      ? "text-brand-600 dark:text-brand-300"
                      : "hover:text-brand-500 dark:hover:text-brand-300",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
          <a
            href="/#contact"
            className="rounded-full bg-brand-600 px-3 py-2 font-semibold text-white transition hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:bg-brand-500 dark:hover:bg-brand-400"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
