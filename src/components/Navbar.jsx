import { CreditCard } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 text-white grid place-items-center shadow-lg shadow-fuchsia-500/30">
            <CreditCard className="h-5 w-5" />
          </div>
          <span className="font-semibold text-slate-900 text-lg tracking-tight">Budgetly</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
          <a href="#budget" className="hover:text-slate-900 transition-colors">Budget</a>
          <a href="#reports" className="hover:text-slate-900 transition-colors">Reports</a>
          <a href="#profile" className="hover:text-slate-900 transition-colors">Profile</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-white shadow-sm">
            Sign in
          </button>
          <button className="inline-flex items-center rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
