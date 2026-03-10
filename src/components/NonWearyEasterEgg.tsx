"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function NonWearyEasterEgg() {
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
        className={`fixed top-6 right-7 z-[9999] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-base font-semibold text-white transition hover:bg-white/25 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        ✕
      </button>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-[#0d0f14] px-8 text-white transition-all duration-500 ease-in-out ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-full pointer-events-none"
        }`}
        aria-modal="true"
        role="dialog"
      >
        <div className="mx-auto max-w-lg text-center">
          <p className="text-6xl mb-6 select-none">♪</p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            NonWeary Music
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400">
            I have a music project called{" "}
            <span className="text-zinc-200 font-medium">NonWeary</span> where I
            release songs I make for fun. Check out my tutorials &amp; tracks on
            YouTube or Spotify!
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://www.youtube.com/@nonweary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 hover:border-white/20"
            >
              <svg className="h-4 w-4 text-red-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Watch on YouTube
            </a>

            <a
              href="https://open.spotify.com/artist/300d6MpGNlEFGesgZIFm2L"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15 hover:border-white/20"
            >
              <svg className="h-4 w-4 text-green-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Listen on Spotify
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
        className="absolute bottom-5 right-6 select-none text-5xl text-zinc-500/75 transition-all duration-300 hover:text-zinc-600/90 hover:scale-110 focus-visible:outline-none"
      >
        ♪
      </button>

      {portal}
    </>
  );
}
