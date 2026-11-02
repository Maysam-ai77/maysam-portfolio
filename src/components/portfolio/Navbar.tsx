import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SECTION_ORDER, type Lang, type SectionId } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";

function useActiveSection() {
  const [active, setActive] = useState<SectionId>("home");
  useEffect(() => {
    const els = SECTION_ORDER.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return active;
}

export function LanguageSwitcher() {
  const { lang, setLang, t } = usePrefs();
  const options: { value: Lang; label: string }[] = [
    { value: "ar", label: "عربي" },
    { value: "en", label: "EN" },
  ];
  return (
    <div
      role="group"
      aria-label={t.ui.langLabel}
      className="flex items-center rounded-full border border-border p-0.5 text-xs font-semibold"
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          lang={o.value}
          aria-pressed={lang === o.value}
          onClick={() => setLang(o.value)}
          className={cn(
            "h-8 min-w-10 cursor-pointer rounded-full px-3 transition-colors",
            lang === o.value
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-brand",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme, t } = usePrefs();
  const isDark = theme === "dark";
  return (
    <Button
      variant="brandOutline"
      size="iconRound"
      onClick={toggleTheme}
      aria-label={isDark ? t.ui.toLight : t.ui.toDark}
      title={isDark ? t.ui.toLight : t.ui.toDark}
    >
      {isDark ? <Sun /> : <Moon />}
    </Button>
  );
}

export function Navbar() {
  const { t, lang } = usePrefs();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = SECTION_ORDER.map((id) => ({ id, label: t.nav[id] }));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:inset-s-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        {t.ui.skip}
      </a>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#home"
          className="group flex items-baseline gap-1 font-display text-xl font-bold text-foreground"
        >
          <span>{lang === "ar" ? "ميسم" : "Maysam"}</span>
          <span className="size-2 rounded-full bg-pink transition-transform group-hover:scale-125" />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors hover:text-brand",
                  active === l.id ? "text-brand" : "text-muted-foreground",
                )}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-pink" aria-hidden />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            variant="brandOutline"
            size="iconRound"
            className="xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.ui.menuClose : t.ui.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border xl:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-5 py-6 sm:grid-cols-2 sm:px-8">
            {links.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.id ? "true" : undefined}
                  className={cn(
                    "flex items-baseline gap-4 py-3 font-display text-2xl font-semibold transition-colors hover:text-brand",
                    active === l.id ? "text-brand" : "text-foreground",
                  )}
                >
                  <span className="text-xs tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
