import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/i18n";
import { usePrefs } from "@/lib/prefs";
import { SectionHeader } from "./SectionHeader";

const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const section = "border-t border-line py-24 md:py-32";

export function About() {
  const { t } = usePrefs();
  return (
    <section id="about" aria-labelledby="about-title" className={section}>
      <div className={container}>
        <SectionHeader index="01" title={t.about.title} id="about-title" />
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="block h-px w-16 bg-pink md:mt-4" aria-hidden />
          </div>
          <div className="md:col-span-9">
            <p className="max-w-184 text-xl leading-relaxed text-foreground sm:text-2xl md:text-[1.7rem] [html[lang=ar]_&]:leading-[1.9]">
              {t.about.bio}
            </p>
            <p className="mt-10 flex items-center gap-3 text-sm font-medium text-muted-foreground">
              <span className="size-1.5 rounded-full bg-pink" aria-hidden />
              {t.about.graduate}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const { t } = usePrefs();
  const p = t.projects;
  return (
    <section id="projects" aria-labelledby="projects-title" className={section}>
      <div className={container}>
        <SectionHeader index="02" title={p.title} id="projects-title" />
        <ol className="border-b border-line">
          {p.items.map((proj, i) => (
            <li key={proj.name} className="group border-t border-line py-12 md:py-16">
              <article className="grid gap-8 md:grid-cols-12 md:gap-10">
                <header className="md:col-span-5">
                  <span className="font-display text-sm font-semibold tabular-nums text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    lang="en"
                    dir="ltr"
                    className="font-display mt-3 text-4xl font-bold text-foreground transition-colors group-hover:text-brand sm:text-5xl lg:text-6xl [html[dir=rtl]_&]:text-right"
                  >
                    {proj.name}
                  </h3>
                  <p className="mt-4 text-lg font-medium text-muted-foreground">{proj.tagline}</p>
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt={proj.name}
                      loading="lazy"
                      className="mt-8 aspect-video w-full rounded-sm border border-border object-cover"
                    />
                  )}
                </header>

                <div className="md:col-span-7">
                  <p className="text-lg leading-relaxed text-foreground sm:text-xl [html[lang=ar]_&]:leading-loose">
                    {proj.description}
                  </p>

                  <h4 className="eyebrow mt-10 text-muted-foreground">{p.contributions}</h4>
                  <ul className="mt-4 space-y-3">
                    {proj.contributions.map((c) => (
                      <li key={c} className="flex gap-4 leading-relaxed text-foreground/90">
                        <span className="mt-3 h-px w-5 shrink-0 bg-pink" aria-hidden />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  {proj.tech && proj.tech.length > 0 && (
                    <div className="mt-10">
                      <h4 className="eyebrow text-muted-foreground">{p.tech}</h4>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {proj.tech.map((tech) => (
                          <li
                            key={tech}
                            lang="en"
                            className="rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-foreground"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {proj.achievement && (
                    <div className="mt-10 border-s-2 border-pink ps-5">
                      <p className="eyebrow text-brand">{p.achievement}</p>
                      <p className="mt-2 font-semibold leading-relaxed text-foreground">
                        {proj.achievement}
                      </p>
                    </div>
                  )}

                  {(proj.github || proj.demo) && (
                    <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline inline-flex items-center gap-2 text-foreground hover:text-brand"
                        >
                          <Github className="size-4" aria-hidden />
                          {p.code}
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline inline-flex items-center gap-2 text-foreground hover:text-brand"
                        >
                          <ExternalLink className="size-4" aria-hidden />
                          {p.demo}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = usePrefs();
  const s = t.skills;
  return (
    <section id="skills" aria-labelledby="skills-title" className={section}>
      <div className={container}>
        <SectionHeader index="03" title={s.title} id="skills-title" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="eyebrow text-brand">{s.specialtiesLabel}</h3>
            <ul className="mt-6">
              {s.specialties.map((sp) => (
                <li
                  key={sp}
                  className="font-display border-b border-line py-3.5 text-xl font-semibold text-foreground transition-colors hover:text-brand sm:text-2xl"
                >
                  {sp}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <h3 className="eyebrow text-brand">{s.stackLabel}</h3>
            <dl className="mt-6">
              {s.groups.map((g) => (
                <div
                  key={g.label}
                  className="grid gap-3 border-b border-line py-5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-6"
                >
                  <dt className="pt-1.5 text-sm font-semibold text-muted-foreground">{g.label}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          lang="en"
                          className="rounded-full border border-border px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-pink hover:text-brand"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const { t } = usePrefs();
  return (
    <section id="experience" aria-labelledby="experience-title" className={section}>
      <div className={container}>
        <SectionHeader index="04" title={t.experience.title} id="experience-title" />
        <ol className="relative ms-2 border-s border-line">
          {t.experience.items.map((e) => (
            <li key={e.org} className="relative pb-14 ps-8 last:pb-0 sm:ps-12">
              <span
                className="absolute -inset-s-1.25 top-3 size-2.5 rounded-full bg-pink shadow-[0_0_14px_var(--pink)]"
                aria-hidden
              />
              <div className="grid gap-4 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-5">
                  <h3
                    lang="en"
                    className="font-display text-3xl font-bold text-foreground sm:text-4xl"
                  >
                    {e.org}
                  </h3>
                  <p className="mt-2 font-semibold text-brand">{e.role}</p>
                </div>
                <ul className="space-y-2 md:col-span-7 md:pt-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="text-lg leading-relaxed text-muted-foreground">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Awards() {
  const { t } = usePrefs();
  return (
    <section id="awards" aria-labelledby="awards-title" className={section}>
      <div className={container}>
        <SectionHeader index="05" title={t.awards.title} id="awards-title" />
        <ul className="grid border-y border-line md:grid-cols-3">
          {t.awards.items.map((a, i) => (
            <li
              key={a.title}
              className="relative flex flex-col border-line py-10 md:px-8 md:first:ps-0 md:last:pe-0 not-last:border-b md:not-last:border-e md:not-last:border-b-0"
            >
              <span
                className="font-sans text-[7rem] leading-none font-extrabold tracking-tighter text-pink [text-shadow:0_0_40px_color-mix(in_oklab,var(--pink-glow)_45%,transparent)]"
                aria-hidden
              >
                1
              </span>
              <span className="sr-only">{i + 1}. </span>
              <p className="eyebrow mt-6 text-brand">{a.place}</p>
              <h3 className="font-display mt-3 text-2xl leading-snug font-bold text-foreground">
                {a.title}
              </h3>
              <ul className="mt-4 space-y-1 text-muted-foreground">
                {a.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Education() {
  const { t } = usePrefs();
  const e = t.education;
  return (
    <section id="education" aria-labelledby="education-title" className={section}>
      <div className={container}>
        <SectionHeader index="06" title={e.title} id="education-title" />
        <div className="grid items-end gap-8 md:grid-cols-12">
          <p
            dir="ltr"
            className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-none font-extrabold text-foreground md:col-span-7 [html[dir=rtl]_&]:text-right"
          >
            2022<span className="text-pink">–</span>2026
          </p>
          <div className="md:col-span-5">
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              {e.university}
            </h3>
            <p className="mt-2 text-lg font-semibold text-brand">{e.degree}</p>
            <p className="mt-6 flex items-center gap-3 text-muted-foreground">
              <span className="size-1.5 rounded-full bg-pink" aria-hidden />
              {e.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = usePrefs();
  const c = t.contact;
  const socials = [
    { label: "LinkedIn", href: CONTACT.linkedin, aria: c.linkedinAria },
    { label: "GitHub", href: CONTACT.github, aria: c.githubAria },
  ];
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={`${section} relative overflow-hidden`}
    >
      <div
        className="glow-soft pointer-events-none absolute -bottom-1/2 inset-s-1/2 size-200 -translate-x-1/2 rtl:translate-x-1/2"
        aria-hidden
      />
      <div className={`${container} relative`}>
        <p className="eyebrow flex items-center gap-3 text-brand">
          <span className="font-display tabular-nums">(07)</span>
          <span className="h-px w-10 bg-pink" aria-hidden />
          {t.nav.contact}
        </p>
        <h2
          id="contact-title"
          className="font-display mt-6 text-[clamp(3rem,10vw,8.5rem)] leading-[0.95] font-extrabold text-foreground [html[lang=ar]_&]:leading-tight"
        >
          {c.title}
          <span className="text-pink">.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {c.text}
        </p>

        <div className="mt-14 border-t border-line pt-10">
          <p className="eyebrow text-muted-foreground">{c.emailLabel}</p>
          <a
            href={`mailto:${CONTACT.email}`}
            aria-label={`${c.emailAria}: ${CONTACT.email}`}
            dir="ltr"
            className="group mt-3 inline-flex max-w-full items-center gap-3 font-sans text-[clamp(1.05rem,4.8vw,3.25rem)] font-bold tracking-tight break-all text-foreground transition-colors hover:text-brand"
          >
            {CONTACT.email}
            <ArrowUpRight
              className="size-[0.8em] shrink-0 text-pink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden
            />
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.aria}
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 font-semibold text-foreground transition-colors hover:border-pink hover:text-brand"
              >
                {s.label}
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 rtl:-scale-x-100"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = usePrefs();
  return (
    <footer className="border-t border-line py-10">
      <div
        className={`${container} flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between`}
      >
        <div>
          <p className="font-display text-base font-bold text-foreground">{t.footer.name}</p>
          <p className="mt-1">{t.footer.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={`mailto:${CONTACT.email}`} className="link-underline hover:text-brand" dir="ltr">
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-brand"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-brand"
          >
            GitHub
          </a>
        </div>
        <p>{t.footer.rights}</p>
      </div>
    </footer>
  );
}
