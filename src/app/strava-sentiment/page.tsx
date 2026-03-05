import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { StravaDashboard } from "@/components/StravaDashboard";

export const metadata: Metadata = {
  title: "Strava Sentiment Analysis | Charlie Gall",
  description:
    "NLP analysis of 2,000 Strava Google Play reviews using TF-IDF and Random Forest models to identify what drives positive and negative sentiment.",
};

export default function StravaSentimentPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip text-zinc-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-sky-500/25 to-transparent" />
      <div className="relative z-10">
        <Nav />
        <StravaDashboard />
      </div>
    </main>
  );
}
