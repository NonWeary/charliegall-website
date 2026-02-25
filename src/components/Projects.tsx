import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tags: string[];
  links?: ProjectLink[];
  imageSrc?: string;
  imageAlt?: string;
  imageOnly?: boolean;
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
    imageSrc: "/images/Sales%20Data%20Analysis%20%26%20Churn%20Modeling%20%282%29.png",
    imageAlt: "Sales Data Analysis and Churn Modeling project visual",
    links: [
      { label: "Executive Summary", href: "/pdfs/Sales_Data_Analysis_Executive_Summary.pdf" },
      { label: "Full Presentation", href: "/pdfs/Sales_Data_Analysis_Presentation.pdf" },
    ],
  },
  {
    title: "",
    description: "",
    tags: [],
    imageSrc: "/images/Loading%20Projects%20GIF%20%281%29.gif",
    imageAlt: "Projects Loading",
    imageOnly: true,
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
          <p className="hidden text-sm text-zinc-500 sm:block">2 recent projects</p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            project.imageOnly ? (
              <div key={project.imageSrc ?? `project-${index}`}>
                {project.imageSrc ? (
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt ?? project.title}
                    width={1200}
                    height={675}
                    className="h-auto w-full rounded-xl border border-sky-700/15 object-contain"
                  />
                ) : null}
              </div>
            ) : (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-sky-700/15 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-600/30 hover:bg-white"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-28 w-28 rounded-full bg-sky-300/5 blur-2xl transition group-hover:bg-sky-300/8" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Project {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{project.description}</p>
                {project.imageSrc ? (
                  <div className="mt-4 overflow-hidden rounded-xl border border-zinc-900/10">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt ?? project.title}
                      width={1200}
                      height={675}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ) : null}

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
            )
          ))}
        </div>
      </div>
    </section>
  );
}
