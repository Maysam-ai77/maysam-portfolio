import { createFileRoute } from "@tanstack/react-router";
import { PrefsProvider } from "@/components/portfolio/PrefsProvider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Awards,
  Contact,
  Education,
  Experience,
  Footer,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

const title = "ميسم هشام الدايم | Maysam Hisham Al-Dayem — AI & Software Developer";
const description =
  "Portfolio of Maysam Hisham Al-Dayem, AI & Software Developer in Amman, Jordan — AI, NLP and software projects, experience, awards and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PrefsProvider>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Awards />
        <Education />
        <Contact />
      </main>
      <Footer />
    </PrefsProvider>
  );
}
