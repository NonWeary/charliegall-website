"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function StravaEasterEgg() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const portal = mounted ? createPortal(
    <>
      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        aria-label="Close"
        className={`fixed top-6 left-7 z-[9999] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-base font-semibold text-white transition hover:bg-white/25 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        ✕
      </button>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#1a0a00] px-8 text-white transition-all duration-500 ease-in-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-full pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
      >
        <div className="mx-auto max-w-lg text-center">
          <p className="text-6xl mb-6 select-none">🚴</p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Triathlon
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400">
            Check out my Strava! Right now I&apos;m training for{" "}
            <span className="text-zinc-200 font-medium">Ironman 70.3 Santa Cruz</span>{" "}
            &amp;{" "}
            <span className="text-zinc-200 font-medium">IronMan California</span>.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://www.strava.com/athletes/67645030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/15"
            >
              <svg className="h-4 w-4 text-[#FC4C02]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
              </svg>
              Follow on Strava
            </a>
          </div>
        </div>
      </div>
    </>,
    document.body
  ) : null;

  return (
    <>
      {/* Trigger stays in the hero */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Secret"
        className="absolute bottom-5 left-6 select-none text-5xl text-zinc-500/75 transition-all duration-300 hover:text-zinc-600/90 hover:scale-110 focus-visible:outline-none"
      >
        🚴
      </button>

      {portal}
    </>
  );
}
