import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full" aria-label="Hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            Modern • Fintech • Minimal
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
            Master your money with a calm, clear budget
          </h1>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Track spending, set smart budgets, and visualize your financial story. Designed with glass-morphic aesthetics and a 3D credit card at the center.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#budget" className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-white text-sm font-medium shadow hover:bg-slate-800">Create Budget</a>
            <a href="#reports" className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 text-sm font-medium shadow-sm">View Reports</a>
          </div>
        </div>
        <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden shadow-xl">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="pointer-events-none absolute -inset-x-10 -bottom-16 h-40 blur-2xl bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-400/20" />
        </div>
      </div>
    </section>
  );
}
