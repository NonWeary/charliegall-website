"use client";

import { useState, useEffect, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// ─── Data ────────────────────────────────────────────────────────────────────

const negativeTokens = [
  { token: "signed", coefficient: 2.769 },
  { token: "unable", coefficient: 2.289 },
  { token: "minutes", coefficient: 2.237 },
  { token: "times", coefficient: 2.234 },
  { token: "purpose", coefficient: 2.152 },
  { token: "upload", coefficient: 2.075 },
  { token: "won", coefficient: 1.921 },
  { token: "constantly", coefficient: 1.902 },
  { token: "received", coefficient: 1.861 },
  { token: "server", coefficient: 1.842 },
  { token: "issue", coefficient: 1.831 },
  { token: "isn", coefficient: 1.811 },
  { token: "basic", coefficient: 1.779 },
  { token: "star", coefficient: 1.747 },
  { token: "hit", coefficient: 1.687 },
  { token: "account", coefficient: 1.671 },
  { token: "errors", coefficient: 1.603 },
  { token: "uninstalled", coefficient: 1.599 },
  { token: "time", coefficient: 1.550 },
  { token: "mile", coefficient: 1.510 },
];

const positiveTokens = [
  { token: "love", coefficient: 0.891 },
  { token: "tracking", coefficient: 0.729 },
  { token: "friends", coefficient: 0.718 },
  { token: "easy", coefficient: 0.673 },
  { token: "nice", coefficient: 0.668 },
  { token: "walks", coefficient: 0.667 },
  { token: "track", coefficient: 0.623 },
  { token: "fitness", coefficient: 0.527 },
  { token: "excellent", coefficient: 0.479 },
  { token: "apps", coefficient: 0.459 },
  { token: "stay", coefficient: 0.404 },
  { token: "exercise", coefficient: 0.403 },
  { token: "motivates", coefficient: 0.371 },
  { token: "heart", coefficient: 0.313 },
  { token: "world", coefficient: 0.262 },
  { token: "motivated", coefficient: 0.261 },
  { token: "awesome", coefficient: 0.248 },
  { token: "trail", coefficient: 0.244 },
  { token: "helpful", coefficient: 0.215 },
  { token: "running", coefficient: 0.207 },
];

const negativeClusters = [
  {
    name: "Authentication & Onboarding Failures",
    tokens: ["signed", "unable", "isn", "won", "received"],
    insight:
      "Users consistently fail during sign-in and initial setup. Authentication is the most damaging friction point in the entire experience.",
  },
  {
    name: "Upload & Server Outages",
    tokens: ["upload", "server", "errors"],
    insight:
      "Activity upload failures and server errors are directly visible to users and break the core loop of record-and-share.",
  },
  {
    name: "Account & Access Problems",
    tokens: ["account", "issue"],
    insight:
      "Ongoing account management issues compound onboarding friction, suggesting systemic identity/auth infrastructure problems.",
  },
  {
    name: "Crashes & Forced Upsell",
    tokens: ["uninstalled", "constantly"],
    insight:
      "App instability and aggressive paywalls drive uninstalls. Users explicitly cite these as deal-breakers in their reviews.",
  },
  {
    name: "Accuracy & Measurement Issues",
    tokens: ["mile", "minutes", "time"],
    insight:
      "Inaccurate GPS and pace data undermine the product's core promise for serious athletes who depend on precise metrics.",
  },
];

const positiveClusters = [
  {
    name: "Tracking & Core Utility",
    tokens: ["tracking", "track", "fitness", "exercise"],
    insight:
      "When the product works, users love it for exactly what it is: a reliable fitness tracker. This is the core value prop in action.",
  },
  {
    name: "Social & Community",
    tokens: ["friends", "motivates", "motivated", "world"],
    insight:
      "Strava's social layer is a genuine differentiator. Users don't just track—they compete, cheer, and stay accountable together.",
  },
  {
    name: "Ease of Use",
    tokens: ["easy", "nice", "excellent", "helpful", "awesome"],
    insight:
      "When onboarding succeeds, users find the app intuitive and well-designed. The UX itself isn't the problem—reliability is.",
  },
  {
    name: "Activity Culture",
    tokens: ["walks", "trail", "running"],
    insight:
      "Positive reviews span all activity types. Strava's brand is broader than running—it's the home for all outdoor fitness culture.",
  },
];

const methodologySteps = [
  {
    step: "01",
    label: "Data Collection",
    detail: "2,000 Google Play reviews scraped and labeled (Bad: 1–3 stars, Good: 4–5 stars)",
  },
  {
    step: "02",
    label: "Feature Engineering",
    detail: "Review length, word count, time/date features, app version, and season extracted",
  },
  {
    step: "03",
    label: "Random Forest",
    detail: "Behavioral features only — accuracy 75.5%, AUC 0.822",
  },
  {
    step: "04",
    label: "TF-IDF + LASSO",
    detail: "Text vectorization + logistic regression — accuracy 82.0%, AUC 0.893",
  },
  {
    step: "05",
    label: "Findings",
    detail: "Top tokens by LASSO coefficient reveal what language separates happy users from frustrated ones",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type TooltipPayload = { value: number };

function CustomTooltip({
  active,
  payload,
  label,
  mode,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
  mode: "negative" | "positive";
}) {
  if (!active || !payload?.length) return null;
  const sign = mode === "negative" ? "-" : "+";
  const color = mode === "negative" ? "#ef4444" : "#10b981";
  return (
    <div className="rounded-xl border border-sky-700/15 bg-white px-3.5 py-2.5 shadow-lg">
      <p className="text-sm font-semibold text-zinc-800">&ldquo;{label}&rdquo;</p>
      <p className="mt-0.5 text-xs" style={{ color }}>
        Coefficient: {sign}
        {payload[0].value.toFixed(3)}
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function StravaDashboard() {
  const [chartMode, setChartMode] = useState<"negative" | "positive">("negative");

  const chartData = chartMode === "negative" ? negativeTokens : positiveTokens;
  const barColor = chartMode === "negative" ? "#ef4444" : "#10b981";
  const barColorLight = chartMode === "negative" ? "#fef2f2" : "#f0fdf4";
  const chartDomain = chartMode === "negative" ? [0, 3] : [0, 1];
  const chartTicks = chartMode === "negative" ? [0, 0.5, 1, 1.5, 2, 2.5, 3] : [0, 0.2, 0.4, 0.6, 0.8, 1.0];

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-6">
      {/* ── Hero ── */}
      <FadeIn>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-sky-700/20 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800">
            NLP
          </span>
          <span className="rounded-full border border-sky-700/20 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800">
            Sentiment Analysis
          </span>
          <span className="rounded-full border border-sky-700/20 bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800">
            R · TF-IDF · Random Forest
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Strava App Review Sentiment Analysis
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          What do 2,000 Google Play reviews actually say about Strava? Using TF-IDF and
          Random Forest models in R, I identified the language patterns that separate
          satisfied users from frustrated ones — and what product teams should do about it.
        </p>
      </FadeIn>

      {/* ── Model Comparison ── */}
      <FadeIn delay={80} className="mt-10">
        <div className="rounded-2xl border border-sky-700/15 bg-white/80 p-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Model Performance</p>
          <h2 className="mt-2 text-lg font-semibold text-zinc-900">Two-Model Comparison</h2>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-900/8">
                  <th className="pb-3 text-left font-medium text-zinc-500">Model</th>
                  <th className="pb-3 text-left font-medium text-zinc-500">Features</th>
                  <th className="pb-3 text-right font-medium text-zinc-500">Accuracy</th>
                  <th className="pb-3 text-right font-medium text-zinc-500">AUC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-900/5">
                  <td className="py-3.5 pr-4 font-medium text-zinc-800">Random Forest</td>
                  <td className="py-3.5 pr-4 text-zinc-600">
                    Behavioral only
                    <span className="ml-2 text-[11px] text-zinc-400">(length, date, version…)</span>
                  </td>
                  <td className="py-3.5 text-right font-semibold text-zinc-800">75.5%</td>
                  <td className="py-3.5 pl-4 text-right">
                    <span className="rounded-md bg-zinc-100 px-2 py-0.5 font-semibold text-zinc-700">
                      0.822
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="pt-3.5 pr-4 font-medium text-zinc-800">TF-IDF + LASSO</td>
                  <td className="pt-3.5 pr-4 text-zinc-600">
                    Text tokens
                    <span className="ml-2 text-[11px] text-zinc-400">(logistic regression)</span>
                  </td>
                  <td className="pt-3.5 text-right font-semibold text-sky-700">82.0%</td>
                  <td className="pt-3.5 pl-4 text-right">
                    <span className="rounded-md bg-sky-50 px-2 py-0.5 font-semibold text-sky-700">
                      0.893
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-5 text-zinc-500">
            Text content is a stronger signal than behavioral metadata alone — adding language
            features improved accuracy by +6.5 pp and AUC by +0.071.
          </p>
        </div>
      </FadeIn>

      {/* ── Token Chart ── */}
      <FadeIn delay={120} className="mt-8">
        <div className="rounded-2xl border border-sky-700/15 bg-white/80 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">LASSO Coefficients</p>
              <h2 className="mt-2 text-lg font-semibold text-zinc-900">
                Top 20 Sentiment Tokens
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Larger bars = stronger predictive weight toward that sentiment class
              </p>
            </div>

            <div className="flex shrink-0 overflow-hidden rounded-xl border border-sky-700/15 bg-zinc-50 p-1 text-sm font-medium">
              <button
                onClick={() => setChartMode("negative")}
                className={`rounded-lg px-4 py-1.5 transition ${
                  chartMode === "negative"
                    ? "bg-red-500 text-white shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Negative
              </button>
              <button
                onClick={() => setChartMode("positive")}
                className={`rounded-lg px-4 py-1.5 transition ${
                  chartMode === "positive"
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Positive
              </button>
            </div>
          </div>

          <div className="mt-6" style={{ height: 520 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 0, right: 24, left: 8, bottom: 0 }}
                barSize={16}
              >
                <CartesianGrid
                  horizontal={false}
                  stroke="#e4e7ec"
                  strokeDasharray="3 3"
                />
                <XAxis
                  type="number"
                  domain={chartDomain}
                  ticks={chartTicks}
                  tick={{ fontSize: 11, fill: "#9ca3af" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => v.toFixed(1)}
                />
                <YAxis
                  type="category"
                  dataKey="token"
                  width={80}
                  tick={{ fontSize: 12, fill: "#52525b", fontWeight: 500 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  content={<CustomTooltip mode={chartMode} />}
                  cursor={{ fill: barColorLight }}
                />
                <Bar dataKey="coefficient" radius={[0, 4, 4, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={barColor}
                      fillOpacity={1 - index * 0.025}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </FadeIn>

      {/* ── Theme Clusters ── */}
      <FadeIn delay={100} className="mt-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">Pattern Recognition</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
          Theme Clusters
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          Tokens grouped by the underlying problem or strength they represent
        </p>
      </FadeIn>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <FadeIn delay={120} className="flex flex-col gap-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Negative Clusters
            </p>
          </div>
          {negativeClusters.map((cluster, i) => (
            <FadeIn key={cluster.name} delay={140 + i * 50}>
              <div className="rounded-xl border border-red-100 bg-red-50/60 p-4 transition hover:border-red-200 hover:bg-red-50">
                <p className="text-sm font-semibold text-zinc-800">{cluster.name}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cluster.tokens.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-red-200 bg-white px-2 py-0.5 font-mono text-[11px] text-red-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-2.5 text-xs leading-5 text-zinc-600">{cluster.insight}</p>
              </div>
            </FadeIn>
          ))}
        </FadeIn>

        <FadeIn delay={140} className="flex flex-col gap-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Positive Clusters
            </p>
          </div>
          {positiveClusters.map((cluster, i) => (
            <FadeIn key={cluster.name} delay={160 + i * 50}>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 transition hover:border-emerald-200 hover:bg-emerald-50">
                <p className="text-sm font-semibold text-zinc-800">{cluster.name}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {cluster.tokens.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-emerald-200 bg-white px-2 py-0.5 font-mono text-[11px] text-emerald-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-2.5 text-xs leading-5 text-zinc-600">{cluster.insight}</p>
              </div>
            </FadeIn>
          ))}
        </FadeIn>
      </div>

      {/* ── Business Implications ── */}
      <FadeIn delay={80} className="mt-12">
        <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">So What</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
          What This Means for Strava
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          The data points to a clear strategic gap: the fitness experience is loved, but
          infrastructure failures are destroying it.
        </p>
      </FadeIn>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {[
          {
            label: "Product",
            title: "Fix infrastructure first",
            body: "Auth flow, upload reliability, and crash reduction dominate negative reviews. These aren't feature gaps — they're broken foundations that undermine the entire experience for every user.",
            accent: "sky",
          },
          {
            label: "Marketing",
            title: "Double down on social fitness",
            body: "\"Friends\", \"motivates\", and \"community\" are among the strongest positive predictors. Strava's unique angle isn't tracking — it's the social accountability layer. Lead with that.",
            accent: "sky",
          },
          {
            label: "Insight",
            title: "Complaints aren't about fitness",
            body: "Not a single fitness-related word appears in the top negative tokens. Users aren't unhappy with the workout experience — they're frustrated by sign-in errors, server failures, and crashes.",
            accent: "sky",
          },
          {
            label: "Insight",
            title: "The core value prop works",
            body: "\"Tracking\", \"fitness\", \"exercise\", and \"trail\" all drive positive sentiment. When Strava works, users love exactly what it's supposed to do. The product vision is validated — execution is the issue.",
            accent: "sky",
          },
        ].map((card, i) => (
          <FadeIn key={card.title} delay={100 + i * 60}>
            <div className="group h-full rounded-2xl border border-sky-700/15 bg-white/80 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-600/30 hover:bg-white">
              <p className="text-[11px] uppercase tracking-[0.22em] text-sky-700">{card.label}</p>
              <h3 className="mt-2 text-base font-semibold text-zinc-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{card.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* ── Methodology ── */}
      <FadeIn delay={80} className="mt-12">
        <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">How It Was Built</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
          Methodology Pipeline
        </h2>
      </FadeIn>

      <FadeIn delay={120} className="mt-5">
        <div className="rounded-2xl border border-sky-700/15 bg-white/80 p-6">
          <div className="flex flex-col gap-0">
            {methodologySteps.map((step, i) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-xs font-bold text-sky-700">
                    {step.step}
                  </div>
                  {i < methodologySteps.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-sky-100" style={{ minHeight: 24 }} />
                  )}
                </div>
                <div className={`pb-6 ${i === methodologySteps.length - 1 ? "pb-0" : ""}`}>
                  <p className="mt-1.5 text-sm font-semibold text-zinc-800">{step.label}</p>
                  <p className="mt-0.5 text-sm leading-5 text-zinc-500">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── Footer note ── */}
      <FadeIn delay={80} className="mt-8">
        <p className="text-center text-xs text-zinc-400">
          Analysis conducted in R using the{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-zinc-600">tidytext</code>,{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-zinc-600">randomForest</code>, and{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-zinc-600">glmnet</code> packages.
          2,000 Google Play reviews collected and labeled by star rating.
        </p>
      </FadeIn>
    </div>
  );
}
