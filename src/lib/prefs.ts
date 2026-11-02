import { createContext, useContext } from "react";
import type { Dictionary, Lang } from "@/lib/i18n";

export type Theme = "dark" | "light";

export const THEME_KEY = "mhd-theme";
export const LANG_KEY = "mhd-lang";

export interface Prefs {
  lang: Lang;
  theme: Theme;
  t: Dictionary;
  setLang: (l: Lang) => void;
  toggleTheme: () => void;
}

// Lives outside the provider component file so hot reloads keep one stable context.
export const PrefsContext = createContext<Prefs | null>(null);

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used inside PrefsProvider");
  return ctx;
}

/** Inline script run before paint: applies saved theme/language to avoid a flash. */
export const PREFS_BOOT_SCRIPT = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('${THEME_KEY}');if(t==='light'){d.classList.remove('dark')}else{d.classList.add('dark')}var l=localStorage.getItem('${LANG_KEY}');if(l==='en'){d.lang='en';d.dir='ltr';d.classList.add('lang-pending');setTimeout(function(){d.classList.remove('lang-pending')},1500)}}catch(e){}})();`;
