export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Want to chat about marketing analytics, growth experiments, or data-driven creative?
          I’m open to internships and project work.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:cfgall@outlook.com"
            className="rounded-xl bg-white text-black px-4 py-2 text-sm font-medium"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/charlie-gall"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/5"
          >
            LinkedIn
          </a>
          <a
            href="/Charlie_Gall_Resume.pdf"
            className="rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-white/5"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}