import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-900/10 bg-white/78 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-900 sm:text-base">Charlie Gall</span>
        </Link>

        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-600 sm:gap-3 sm:text-sm">
          <Link className="rounded-lg px-2 py-1 transition hover:bg-sky-100/60 hover:text-zinc-900" href="/#projects">
            Projects
          </Link>
          <Link className="rounded-lg px-2 py-1 transition hover:bg-sky-100/60 hover:text-zinc-900" href="/contact">
            Contact
          </Link>
          <a
            className="rounded-lg border border-sky-600/30 bg-sky-50 px-3 py-1.5 text-sky-800 transition hover:border-sky-600/50 hover:bg-sky-100"
            href="/pdfs/Charlie_Gall_Resume.pdf"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

