export function About() {
  return (
    <section id="about" className="px-6 pb-24 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-2xl border border-sky-700/15 bg-white/82 p-7 sm:p-9">
        <p className="text-xs uppercase tracking-[0.22em] text-sky-800/80">About</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">My background and philosophy</h2>

        <div className="mt-6 space-y-5 text-zinc-700">
          <p>
            I&apos;m originally from Sammamish, Washington. I studied Marketing and Data Analytics at Santa Clara University, where I also led
            the university&apos;s triathlon team. During that time, I balanced competitive training with internships and curriculum
            focused on using technology to solve problems.
          </p>
          <p>
            I graduated in March 2026 and am now working as a Product Marketing Intern at Dayforce.
          </p>
          <p>
            Outside of work, I continue to train and compete in long-course triathlon. I&apos;m currently preparing for Ironman Santa Cruz and
            Ironman California.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-sky-700/15 bg-sky-50/45 p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-zinc-900">Philosophy: Give. Grow. Deliver.</h3>
          <p className="mt-3 text-zinc-700">
            My approach to work has been shaped by the ideas of Adam Grant and John Doerr.
          </p>
          <div className="mt-4 space-y-4 text-zinc-700">
            <p>
              <span className="font-semibold text-zinc-900">Give:</span> From Adam Grant, I&apos;ve been influenced by the idea of being a giver,
              helping others whenever you can, picking up the work people don&apos;t want to do, and doing what&apos;s best for the team at all
              times.
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Grow:</span> Also from Adam Grant, I&apos;ve adopted the idea that reward is in
              growing. Try to seek growth over other things.
            </p>
            <p>
              <span className="font-semibold text-zinc-900">Deliver:</span> From John Doerr I learned about OKRs, and have adopted this method
              goal setting in many areas of my life. I believe that qualifications and ambissions matter, but results matter more.
            </p>
          </div>
          <p className="mt-4 text-zinc-700">
            I try to bring these three big ideas into everything I do, whether professional or personal.
          </p>
        </div>
      </div>
    </section>
  );
}
