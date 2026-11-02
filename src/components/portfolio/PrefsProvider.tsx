import { useCallback, useEffect, useState, type ReactNode } from "react";
import { dictionaries, type Lang } from "@/lib/i18n";
import { LANG_KEY, PrefsContext, THEME_KEY, type Theme } from "@/lib/prefs";

function readSavedLang(): Lang {
  try {
    return localStorage.getItem(LANG_KEY) === "en" ? "en" : "ar";
  } catch {
    return "ar";
  }
}

function readSavedTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const [theme, setThemeState] = useState<Theme>("dark");

  // Restore saved preferences after hydration
  useEffect(() => {
    setLangState(readSavedLang());
    setThemeState(readSavedTheme());
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
    if (lang === readSavedLang()) html.classList.remove("lang-pending");
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      const html = document.documentElement;
      html.classList.add("theme-transition");
      html.classList.toggle("dark", next === "dark");
      window.setTimeout(() => html.classList.remove("theme-transition"), 450);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <PrefsContext.Provider value={{ lang, theme, t: dictionaries[lang], setLang, toggleTheme }}>
      {children}
    </PrefsContext.Provider>
  );
}
