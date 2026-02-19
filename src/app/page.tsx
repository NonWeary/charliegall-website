import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111715] font-sans text-zinc-100">
      <Hero />
      <Projects />
      <section id="contact" className="h-px" aria-hidden />
    </main>
  );
}
