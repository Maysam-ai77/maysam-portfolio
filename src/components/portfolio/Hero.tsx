import { ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePrefs } from "@/lib/prefs";
import { Portrait } from "./Portrait";

export function Hero() {
  const { t } = usePrefs();
  const h = t.hero;
  return (
    <section
      id="home"
      aria-labelledby="hero-name"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20 lg:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <p className="eyebrow animate-rise flex items-center gap-3 text-brand">
            <span className="h-px w-10 bg-pink" aria-hidden />
            {h.title}
          </p>

          <h1
            id="hero-name"
            className="font-display animate-rise mt-6 text-[clamp(2.5rem,5.6vw,5.4rem)] leading-[0.98] font-extrabold [html[lang=ar]_&]:text-[clamp(3rem,8vw,7rem)] text-balance text-foreground [animation-delay:100ms] [html[lang=ar]_&]:leading-[1.2]"
          >
            <span className="block">{h.name[0]}</span>
            <span className="block">
              {h.name[1]}
              <span className="text-pink">.</span>
            </span>
          </h1>

          <p className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:200ms] sm:text-xl [html[lang=ar]_&]:leading-loose">
            {h.intro}
          </p>

          <p className="animate-rise mt-6 flex items-center gap-2 text-sm font-medium text-foreground [animation-delay:250ms]">
            <MapPin className="size-4 text-brand" aria-hidden />
            {h.location}
          </p>

          <div className="animate-rise mt-10 flex flex-wrap gap-3 [animation-delay:300ms]">
            <Button asChild variant="brand" size="xl">
              <a href="#projects">
                {h.primary}
                <ArrowDown aria-hidden />
              </a>
            </Button>
            <Button asChild variant="brandOutline" size="xl">
              <a href="#contact">{h.secondary}</a>
            </Button>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
          <Portrait alt={h.portraitAlt} />
        </div>
      </div>
    </section>
  );
}
