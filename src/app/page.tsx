import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111715] font-sans text-zinc-100">
      <Hero />
      <section id="projects" className="h-px" aria-hidden />
      <section id="contact" className="h-px" aria-hidden />
    </main>
  );
}
