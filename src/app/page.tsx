// The home page. It just stacks the sections in order.
// To add a section later (e.g. Blog), import it and place it below.
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Intro } from "@/sections/Intro";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Certifications } from "@/sections/Certifications";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* id="top" is where clicking your name in the navbar scrolls back to */}
      <main id="top" className="mx-auto max-w-2xl px-4">
        <Banner />
        <Intro />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
