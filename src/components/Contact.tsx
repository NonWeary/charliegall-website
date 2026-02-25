export function Contact() {
  return (
    <section id="contact" className="px-6 pb-24 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl border border-sky-700/15 bg-white/82 p-7 sm:p-9 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-sky-800/80">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Want to connect?
          </h2>
          <p className="mt-4 max-w-xl text-zinc-700">
            I&apos;m always up for meeting new people and talking shop. Open to project work in anything marketing or analytics related, cheers.
          </p>
        </div>

        <div className="grid gap-3 self-center">
          <a
            href="mailto:cfgall@outlook.com"
            className="rounded-xl bg-sky-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/charlie-gall"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-900/15 bg-white/70 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:bg-sky-50"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/NonWeary"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-900/15 bg-white/70 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:bg-sky-50"
          >
            GitHub
          </a>
          <a
            href="/pdfs/Charlie_Gall_Resume.pdf"
            className="rounded-xl border border-zinc-900/15 bg-white/70 px-4 py-3 text-center text-sm font-medium text-zinc-700 transition hover:bg-sky-50"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
