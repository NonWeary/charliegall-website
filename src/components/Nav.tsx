import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-900/10 bg-white/78 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/#top" className="group flex items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-900 dark:text-zinc-100 sm:text-base">Charlie Gall</span>
        </Link>

        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400 sm:gap-3 sm:text-sm">
          <Link className="rounded-lg px-2 py-1 transition hover:bg-sky-100/60 hover:text-zinc-900 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200" href="/#projects">
            Projects
          </Link>
          <Link className="rounded-lg px-2 py-1 transition hover:bg-sky-100/60 hover:text-zinc-900 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200" href="/#about">
            About
          </Link>
          <Link className="rounded-lg px-2 py-1 transition hover:bg-sky-100/60 hover:text-zinc-900 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-200" href="/contact">
            Contact
          </Link>
          <a
            className="rounded-lg border border-sky-500/30 bg-sky-100/70 px-3 py-1.5 text-sky-600 transition hover:border-sky-500/50 hover:bg-sky-100 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400 dark:hover:bg-sky-400/15"
            href="/pdfs/Charlie_Gall_Resume.pdf"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
