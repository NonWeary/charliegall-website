"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ShowcaseProject = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  internal?: boolean;
  linkLabel: string;
  imageSrc: string;
};

const showcaseProjects: ShowcaseProject[] = [
  {
    title: "Strava Sentiment Analysis",
    description:
      "Sentiment analysis on ~2,000 Strava app reviews using TF-IDF and Random Forest in R to identify language patterns predicting positive vs. negative sentiment.",
    tags: ["R", "NLP", "Machine Learning"],
    href: "/strava-sentiment",
    internal: true,
    linkLabel: "View Dashboard",
    imageSrc: "/images/Strava_Review_Analysis_Cover_Image.png",
  },
  {
    title: "SCU Triathlon Race Results",
    description:
      "Race results platform for Santa Clara triathletes — custom results uploads mapped directly to Supabase for structured, queryable storage and clean display.",
    tags: ["Next.js", "Supabase", "Full Stack"],
    href: "https://scutri.vercel.app",
    internal: false,
    linkLabel: "View App",
    imageSrc: "/images/SCU_Tri_App_Cover_Image.png",
  },
  {
    title: "Capstone Data Analysis",
    description:
      "Python-based data analysis capstone project examining key trends and building predictive models from structured retail data.",
    tags: ["Python", "Data Analysis", "Pandas"],
    href: "/pdfs/Sales_Data_Analysis_Presentation.pdf",
    linkLabel: "Full Presentation",
    imageSrc: "/images/Sales%20Data%20Analysis%20Cover%20Image.png",
  },
];

export function FeaturedProjects() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () =>
    setActiveIdx((i) => (i + showcaseProjects.length - 1) % showcaseProjects.length);
  const next = () =>
    setActiveIdx((i) => (i + 1) % showcaseProjects.length);

  const featured = showcaseProjects[activeIdx];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-sky-500/30 bg-white/85 shadow-[0_8px_28px_-10px_rgba(14,165,233,0.18)] dark:border-sky-400/20 dark:bg-zinc-900/70">
      {/* Cover image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={featured.imageSrc}
          alt={featured.title}
          fill
          className="object-cover object-top transition-opacity duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 dark:to-zinc-900/70" />

        {/* Arrow overlays on image */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/60 text-sm text-zinc-700 shadow transition hover:bg-white/85 dark:border-zinc-600/50 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next project"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-white/40 bg-white/60 text-sm text-zinc-700 shadow transition hover:bg-white/85 dark:border-zinc-600/50 dark:bg-zinc-800/70 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          →
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
          {featured.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {featured.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {featured.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-700/20 bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:border-sky-400/20 dark:bg-sky-900/30 dark:text-sky-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          {featured.internal ? (
            <Link
              href={featured.href}
              className="inline-flex items-center gap-1.5 rounded-xl bg-sky-400 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              {featured.linkLabel} →
            </Link>
          ) : (
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-sky-400 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              {featured.linkLabel} →
            </a>
          )}

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {showcaseProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  i === activeIdx
                    ? "w-4 bg-sky-400"
                    : "w-1.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600 dark:hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
