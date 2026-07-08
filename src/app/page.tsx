import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { BackToTop } from "@/components/shared/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stack } from "@/components/sections/Stack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { GithubShowcase } from "@/components/sections/GithubShowcase";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <hr className="hairline page-container" aria-hidden="true" />
        <About />
        <hr className="hairline page-container" aria-hidden="true" />
        <Stack />
        <hr className="hairline page-container" aria-hidden="true" />
        <Projects />
        <hr className="hairline page-container" aria-hidden="true" />
        <Experience />
        <hr className="hairline page-container" aria-hidden="true" />
        <Achievements />
        <hr className="hairline page-container" aria-hidden="true" />
        <GithubShowcase />
        <hr className="hairline page-container" aria-hidden="true" />
        <Resume />
        <hr className="hairline page-container" aria-hidden="true" />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
