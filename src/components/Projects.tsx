type Project = {
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Snapchat DMA Campaign Optimization (Project Unloaded)",
    description:
      "Built and optimized Snapchat campaigns with clear naming conventions, pacing/bid adjustments, and delivery troubleshooting to hit reach and frequency targets across DMAs.",
    tags: ["Snap Ads", "Paid Media", "Optimization"],
  },
  {
    title: "Strava Review NLP: Churn + Paywall Signals",
    description:
      "Collected and cleaned App Store reviews, then used TF-IDF and sentiment workflows to identify subscription/paywall themes most associated with negative sentiment and churn signals.",
    tags: ["NLP", "TF-IDF", "R/Python"],
  },
  {
    title: "Instacart SQL Segmentation",
    description:
      "Queried and segmented customer behavior using SQL + Python to surface retention and basket patterns and produce actionable cohort insights.",
    tags: ["SQL", "Segmentation", "Python"],
  },
  {
    title: "Triathlon Performance Tracking System",
    description:
      "Built a simple performance system to track training load, intensity, and progress over time to support race prep and coaching decisions.",
    tags: ["Analytics", "Performance", "Systems"],
  },
  {
    title: "Netflix International Expansion Framework",
    description:
      "Developed external/internal analysis support for a case strategy: international growth via dubbing/accessibility and ad-tier scaling in new markets.",
    tags: ["Strategy", "Market Analysis", "Slides"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Projects
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-emerald-300/20 bg-zinc-900/70 p-5 transition-colors duration-200 hover:border-emerald-300/50 hover:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-300/30 px-2.5 py-1 text-xs font-medium text-emerald-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
