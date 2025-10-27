export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Budgetly. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-700">Privacy</a>
          <a href="#" className="hover:text-slate-700">Terms</a>
          <a href="#" className="hover:text-slate-700">Support</a>
        </div>
      </div>
    </footer>
  );
}
