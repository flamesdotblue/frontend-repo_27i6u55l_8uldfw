import React from 'react';
import { Home, PieChart, Wallet, User } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'budgets', label: 'Budgets', icon: Wallet },
  { key: 'reports', label: 'Reports', icon: PieChart },
  { key: 'profile', label: 'Profile', icon: User },
];

export default function TopNav({ current, onChange }) {
  return (
    <nav className="mt-6 flex w-full items-center justify-between">
      <div className="text-xl font-semibold tracking-tight text-slate-800 dark:text-white/90">
        Budgetly
      </div>
      <div className="flex items-center gap-2 bg-white/60 dark:bg-white/5 backdrop-blur rounded-xl p-1 border border-slate-200/70 dark:border-white/10">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={
                `group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ` +
                (active
                  ? 'bg-slate-900 text-white shadow/20 shadow-black/30'
                  : 'text-slate-600 dark:text-white/70 hover:bg-slate-900/5 dark:hover:bg-white/10')
              }
            >
              <Icon className={"h-4 w-4 " + (active ? 'opacity-100' : 'opacity-80')} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
