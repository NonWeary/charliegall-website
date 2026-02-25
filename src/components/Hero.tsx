import Image from "next/image";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-14 sm:px-10 lg:px-16 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/images/golden-gate.jpg')" }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(246,250,255,0.62)_0%,rgba(246,250,255,0.66)_46%,rgba(246,250,255,0.74)_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="text-5xl font-semibold tracking-[-0.03em] text-zinc-900 sm:text-6xl md:text-7xl">
            Charlie Gall
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-sky-800/80 sm:text-base">
            Marketing &times; Analytics &times; Triathlon
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 sm:text-xl">
            Hi, I&apos;m Charlie! Right now I&apos;m studying marketing and data analysis at Santa Clara University while leading marketing campaign analytics for a
            national nonprofit. Professionally, I like to build data-driven marketing systems to understand people&apos;s behavior. Outside of
            work, I train and coach triathlon, a discipline that shapes a big part of who I am.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f8f6]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-sky-700/25 bg-white/60 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-sky-700/45 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/90 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f8f6]"
            >
              Contact
            </a>
          </div>
        </div>

        <aside
          aria-label="Charlie Gall profile photo"
          className="relative overflow-hidden rounded-2xl border border-sky-700/15 bg-white/65 p-3 shadow-[0_14px_34px_-28px_rgba(14,165,233,0.08)] sm:p-4"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/25 to-sky-300/0" />
          <Image
            src="/images/Profile.jpg"
            alt="Charlie Gall"
            width={900}
            height={1200}
            className="relative h-[340px] w-full rounded-xl object-cover object-center sm:h-[420px]"
            priority={false}
          />
        </aside>
      </div>
    </section>
  );
}
