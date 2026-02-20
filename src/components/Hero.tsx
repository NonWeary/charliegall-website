export function Hero() {
  return (
    <section className="px-6 pb-20 pt-14 sm:px-10 lg:px-16 lg:pt-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="mb-5 inline-flex items-center rounded-full border border-emerald-300/35 bg-emerald-300/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-emerald-100">
            Marketing + Data Analysis
          </p>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl md:text-7xl">
            Charlie Gall
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Performance-minded marketer blending analytics, creative testing, and operational discipline to build campaigns that scale.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-emerald-300/40 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-emerald-200/70 hover:bg-emerald-300/10"
            >
              Start a Conversation
            </a>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-2xl border border-emerald-300/25 bg-[#151e1b]/90 p-6 sm:p-7">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/15 blur-3xl" />
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/85">Operator Snapshot</p>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-2xl font-semibold text-white">6+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">Project Verticals</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-2xl font-semibold text-white">0.79</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">Churn AUC</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-2xl font-semibold text-white">SQL</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">Analytics Core</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-2xl font-semibold text-white">Snap</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">Paid Media</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
