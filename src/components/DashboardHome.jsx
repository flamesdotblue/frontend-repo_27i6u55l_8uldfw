import React from 'react';
import { ArrowDownRight, ArrowUpRight, CreditCard, DollarSign } from 'lucide-react';

function StatCard({ title, value, delta, up, icon: Icon, accent = 'from-indigo-500 to-purple-500' }) {
  return (
    <div className="relative rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4">
      <div className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl bg-gradient-to-br ${accent}`} />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500 dark:text-white/60">{title}</p>
          <h3 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">{value}</h3>
        </div>
        <div className="p-2 rounded-xl bg-slate-900 text-white dark:bg-white/10 dark:text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className={`mt-3 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs ${up ? 'text-emerald-600 bg-emerald-500/10' : 'text-rose-600 bg-rose-500/10'}`}>
        {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        <span>{delta}</span>
      </div>
    </div>
  );
}

function ActivityItem({ title, category, amount, negative }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-slate-100 dark:bg-white/10 flex items-center justify-center">
          <CreditCard className="h-4 w-4 text-slate-600 dark:text-white/70" />
        </div>
        <div>
          <p className="text-sm font-medium text-slate-800 dark:text-white">{title}</p>
          <p className="text-xs text-slate-500 dark:text-white/60">{category}</p>
        </div>
      </div>
      <div className={`text-sm font-medium ${negative ? 'text-rose-600' : 'text-emerald-600'}`}>
        {negative ? '-' : '+'}${amount}
      </div>
    </div>
  );
}

export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Balance" value="$7,842" delta="1.8% this month" up icon={DollarSign} accent="from-cyan-500 to-emerald-500" />
          <StatCard title="Spent" value="$1,230" delta="12% vs last month" up={false} icon={CreditCard} accent="from-rose-500 to-orange-500" />
          <StatCard title="Income" value="$3,500" delta="5.1% growth" up icon={ArrowUpRight} accent="from-indigo-500 to-fuchsia-500" />
        </div>

        <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">Recent Activity</h3>
            <button className="text-xs text-slate-500 hover:text-slate-700 dark:text-white/60 dark:hover:text-white">View all</button>
          </div>
          <div className="divide-y divide-slate-200/70 dark:divide-white/10 mt-2">
            <ActivityItem title="Groceries" category="Food" amount="54.20" negative />
            <ActivityItem title="Salary" category="Income" amount="1750.00" />
            <ActivityItem title="Gym Membership" category="Health" amount="29.99" negative />
            <ActivityItem title="Coffee" category="Food" amount="4.50" negative />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-4">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-white">Spending by Category</h3>
          <div className="mt-4 space-y-3">
            {[{n:'Housing',v:80,c:'bg-indigo-500'},{n:'Food',v:55,c:'bg-emerald-500'},{n:'Transport',v:30,c:'bg-amber-500'},{n:'Leisure',v:20,c:'bg-rose-500'}].map((b)=> (
              <div key={b.n}>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-white/60">
                  <span>{b.n}</span><span>{b.v}%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
                  <div className={`h-full ${b.c}`} style={{ width: `${b.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl" />
          <h3 className="text-sm font-semibold">Smart Tips</h3>
          <p className="mt-2 text-xs text-white/80">Set a weekly coffee budget and cap impulsive spending with alerts.</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-3 py-2 text-xs font-medium shadow/20 shadow-black/30 hover:translate-y-[-1px] transition">
            Enable Alerts
          </button>
        </div>
      </div>
    </div>
  );
}
