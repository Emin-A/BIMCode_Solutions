import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem("bimcode-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  return prefersDark ? "dark" : "light";
};

const applyThemeClass = (theme) => {
  const root = window.document.documentElement;
  const body = window.document.body;
  root.classList.remove(theme === "dark" ? "light" : "dark");
  root.classList.add(theme);
  body.classList.remove(theme === "dark" ? "light" : "dark");
  body.classList.add(theme);
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyThemeClass(theme);
    window.localStorage.setItem("bimcode-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
