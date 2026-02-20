export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111715]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          Charlie Gall
        </a>

        <nav className="flex items-center gap-4 text-sm text-zinc-300">
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#contact">Contact</a>
          <a
            className="rounded-xl border border-white/15 px-3 py-1.5 text-zinc-100 hover:bg-white/5"
            href="/Charlie_Gall_Resume.pdf"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}