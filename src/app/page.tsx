import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#111715] font-sans text-zinc-100">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}