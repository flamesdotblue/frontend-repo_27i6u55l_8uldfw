import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays for depth, never block interaction with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-900/20" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.15),transparent)]" />

      <div className="relative z-10 h-full flex items-center px-6 sm:px-10">
        <div className="max-w-2xl text-white/90">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Glass-morphic fintech design
          </div>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
            Take control of your money with clarity
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/70">
            Track spending, set budgets, and visualize your financial health in one minimalist dashboard.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow/20 shadow-black/40 hover:shadow-black/60 hover:translate-y-[-1px] transition">
              Get Started
            </button>
            <button className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
