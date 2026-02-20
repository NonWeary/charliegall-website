type Project = {
  title: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
};

type ProjectLink = {
  label: string;
  href: string;
};

const projects: Project[] = [
  {
    title: "Sales Data Analysis + Churn Modeling (OMIS 114 Capstone)",
    description:
      "Built a Python data pipeline (cleaning, outlier handling, feature engineering) and trained a Random Forest churn model (ROC AUC ~0.79) on a 10k-row retail dataset to drive category and retention recommendations.",
    tags: ["Python", "scikit-learn", "Random Forest"],
    links: [
      { label: "Executive Summary", href: "/Sales_Data_Analysis_Executive_Summary.pdf" },
      { label: "Full Presentation", href: "/Sales_Data_Analysis_Presentation.pdf" },
    ],
  },
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
        <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/85">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Projects</h2>
          </div>
          <p className="hidden text-sm text-zinc-400 sm:block">6 featured builds</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-emerald-300/20 bg-[#141d1a]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200/50 hover:bg-[#17231f]"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-emerald-300/10 blur-2xl transition group-hover:bg-emerald-300/20" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">Project {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-semibold text-zinc-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-300/30 bg-emerald-300/5 px-2.5 py-1 text-xs font-medium text-emerald-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.label === "Executive Summary"
                          ? "rounded-xl bg-emerald-300 px-3 py-1.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
                          : "rounded-xl border border-white/20 px-3 py-1.5 text-sm text-zinc-100 transition hover:bg-white/5"
                      }
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
