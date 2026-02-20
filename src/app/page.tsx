import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-clip text-zinc-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
