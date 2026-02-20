export function Contact() {
  return (
    <section id="contact" className="px-6 pb-24 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-emerald-300/20 bg-[#141d1a]/80 p-7 sm:p-9 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/85">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something measurable.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-300">
            Open to internships and project work across marketing analytics, growth experiments, and performance reporting systems.
          </p>
        </div>

        <div className="grid gap-3 self-center">
          <a
            href="mailto:cfgall@outlook.com"
            className="rounded-xl bg-emerald-300 px-4 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/charlie-gall"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-medium text-zinc-100 transition hover:bg-white/5"
          >
            LinkedIn
          </a>
          <a
            href="/Charlie_Gall_Resume.pdf"
            className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-medium text-zinc-100 transition hover:bg-white/5"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
