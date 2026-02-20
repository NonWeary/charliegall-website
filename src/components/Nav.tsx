export function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-emerald-300/25 bg-[#111715]/80 px-4 py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-300/40 bg-emerald-300/10 text-xs font-bold text-emerald-100">
            CG
          </span>
          <span className="text-sm font-semibold tracking-[0.14em] text-zinc-100 sm:text-base">
            Charlie Gall
          </span>
        </a>

        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-300 sm:gap-3 sm:text-sm">
          <a className="rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-white" href="#projects">
            Projects
          </a>
          <a className="rounded-lg px-2 py-1 transition hover:bg-white/5 hover:text-white" href="#contact">
            Contact
          </a>
          <a
            className="rounded-lg border border-emerald-300/35 bg-emerald-300/10 px-3 py-1.5 text-emerald-50 transition hover:border-emerald-200/70 hover:bg-emerald-300/20"
            href="/Charlie_Gall_Resume.pdf"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
