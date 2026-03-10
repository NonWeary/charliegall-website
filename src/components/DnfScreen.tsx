import Link from "next/link";

const splits = [
  { segment: "Swim",  time: "--:--" },
  { segment: "T1",    time: "--:--" },
  { segment: "Bike",  time: "--:--" },
  { segment: "T2",    time: "--:--" },
  { segment: "Run",   time: "DNS"   },
];

export function DnfScreen({ onReset }: { onReset?: () => void }) {
  return (
    <main className="min-h-screen bg-[#f6faff] text-zinc-900 flex flex-col items-center justify-center px-6 py-20 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="w-full max-w-lg">
        <p className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-600">
          Official Results Portal &mdash; CharlieGall.com Triathlon Series
        </p>


        <div className="mt-6 rounded-2xl border border-zinc-900/10 bg-white overflow-hidden shadow-sm dark:border-white/10 dark:bg-zinc-900">

          {/* Bib + status */}
          <div className="flex items-center justify-between border-b border-zinc-900/10 bg-zinc-50 px-6 py-4 dark:bg-zinc-800/50 dark:border-white/10">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">Bib</p>
              <p className="mt-0.5 text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">#404</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">Status</p>
              <p className="mt-0.5 text-3xl font-black tracking-tight text-red-500">DNF</p>
            </div>
          </div>

          {/* Athlete info */}
          <div className="border-b border-zinc-900/10 dark:border-white/10 px-6 py-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">Athlete</p>
            <p className="mt-0.5 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Gall, Charlie</p>
            <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500">AG: M 20–24 &nbsp;·&nbsp; Division: Page Not Found</p>
          </div>

          {/* Splits */}
          <div className="px-6 py-4">
            <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">Split Times</p>
            <table className="w-full font-mono text-sm">
              <thead>
                <tr className="border-b border-zinc-900/10 dark:border-white/10 text-left text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
                  <th className="pb-2 font-normal">Segment</th>
                  <th className="pb-2 text-right font-normal">Time</th>
                </tr>
              </thead>
              <tbody>
                {splits.map(({ segment, time }) => (
                  <tr key={segment} className="border-b border-zinc-900/5 dark:border-white/5 last:border-0">
                    <td className="py-2.5 text-zinc-700 dark:text-zinc-300">{segment}</td>
                    <td className={`py-2.5 text-right font-semibold ${time === "DNS" ? "text-red-500" : "text-zinc-400"}`}>
                      {time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Finish time */}
          <div className="flex items-center justify-between border-t border-zinc-900/10 bg-zinc-50 px-6 py-4 dark:bg-zinc-800/50 dark:border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">Finish Time</p>
            <p className="font-mono text-xl font-bold text-red-500">--:--:--</p>
          </div>
        </div>

        <p className="mt-8 text-center text-base leading-7 text-zinc-500 dark:text-zinc-400">
          Looks like this page bonked at mile 18.{" "}
          <span className="text-zinc-700 dark:text-zinc-300">The route exists in the plan — it just didn&apos;t make it to race day.</span>
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            ← Return to Start
          </Link>
          {onReset && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-900/15 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 dark:border-white/15 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
            >
              ↺ Try Again
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300 dark:text-zinc-700">
          Timing by ChipTrack Systems &copy; 2025
        </p>
      </div>
    </main>
  );
}
