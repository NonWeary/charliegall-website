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
      "Built a Python pipeline to clean and prep a 10k-row retail dataset, then trained a Random Forest churn model (ROC AUC ~0.79) to guide retention and product-category decisions.",
    tags: ["Python", "scikit-learn", "Random Forest"],
    links: [
      { label: "Executive Summary", href: "/pdfs/Sales_Data_Analysis_Executive_Summary.pdf" },
      { label: "Full Presentation", href: "/pdfs/Sales_Data_Analysis_Presentation.pdf" },
    ],
  },
  {
    title: "Snapchat DMA Campaign Optimization (Project Unloaded)",
    description:
      "Ran and tuned Snapchat campaigns across DMAs, including pacing and bid updates, to keep delivery healthy and hit reach/frequency goals.",
    tags: ["Snap Ads", "Paid Media", "Optimization"],
  },
  {
    title: "Strava Review NLP: Churn + Paywall Signals",
    description:
      "Pulled and cleaned App Store reviews, then used TF-IDF and sentiment analysis to find paywall and subscription themes tied to churn risk.",
    tags: ["NLP", "TF-IDF", "R/Python"],
  },
  {
    title: "Instacart SQL Segmentation",
    description:
      "Used SQL and Python to segment customer behavior, spot retention and basket trends, and turn those into usable cohort insights.",
    tags: ["SQL", "Segmentation", "Python"],
  },
  {
    title: "Triathlon Performance Tracking System",
    description:
      "Built a lightweight tracking system for training load, intensity, and progress to support race prep and coaching check-ins.",
    tags: ["Analytics", "Performance", "Systems"],
  },
  {
    title: "Netflix International Expansion Framework",
    description:
      "Built a case framework for international growth, focused on dubbing/accessibility and ad-tier expansion in new markets.",
    tags: ["Strategy", "Market Analysis", "Slides"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4 border-b border-zinc-900/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-sky-800/80">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">A few things I&apos;ve worked on</h2>
          </div>
          <p className="hidden text-sm text-zinc-500 sm:block">6 recent projects</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-sky-700/15 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-600/30 hover:bg-white"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-sky-300/5 blur-2xl transition group-hover:bg-sky-300/8" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Project {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-semibold text-zinc-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sky-700/20 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800"
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
                          ? "rounded-xl bg-sky-500 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                          : "rounded-xl border border-zinc-900/15 bg-white/70 px-3 py-1.5 text-sm text-zinc-700 transition hover:bg-sky-50"
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

