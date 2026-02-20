export function Hero() {
  return (
    <section className="bg-[#111715] px-6 py-24 text-zinc-100 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-emerald-300/80">
          Marketing + Data Analysis
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Charlie Gall
        </h1>
        <p className="mt-5 text-xl font-medium text-emerald-200/90 sm:text-2xl">
          Marketing. Data Analysis.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          I use data and analytics to understand customers.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-emerald-400/90 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors duration-200 hover:bg-emerald-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-emerald-300/40 px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors duration-200 hover:border-emerald-200/70 hover:bg-emerald-300/10"
          >
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}
