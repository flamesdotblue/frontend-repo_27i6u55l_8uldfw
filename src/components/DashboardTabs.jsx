import { useState } from 'react';
import { Home, Wallet, BarChart3, User, TrendingUp, ArrowDownRight, Plus } from 'lucide-react';

function StatCard({ label, value, delta, positive }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="mt-2 flex items-end justify-between">
        <div className="text-2xl font-semibold text-slate-900">{value}</div>
        <div className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${positive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
          {positive ? <TrendingUp className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
          {delta}
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="h-2 w-full rounded-full bg-slate-100">
      <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" style={{ width: `${value}%` }} />
    </div>
  );
}

function RecentActivityItem({ title, category, amount, type }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <div className="text-sm font-medium text-slate-900">{title}</div>
        <div className="text-xs text-slate-500">{category}</div>
      </div>
      <div className={`text-sm font-semibold ${type === 'out' ? 'text-rose-600' : 'text-emerald-600'}`}>
        {type === 'out' ? '-' : '+'}${amount}
      </div>
    </div>
  );
}

export default function DashboardTabs() {
  const [active, setActive] = useState('home');

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
      <div className="flex items-center gap-2 overflow-x-auto rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
        {[
          { key: 'home', label: 'Home', icon: Home },
          { key: 'budget', label: 'Budget', icon: Wallet },
          { key: 'reports', label: 'Reports', icon: BarChart3 },
          { key: 'profile', label: 'Profile', icon: User },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            id={key}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${active === key ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      {active === 'home' && (
        <div id="home" className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-900 font-semibold">Recent Activity</h3>
                <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm">
                  <Plus className="h-3.5 w-3.5" /> Add
                </button>
              </div>
              <div className="divide-y divide-slate-100 mt-2">
                <RecentActivityItem title="Groceries" category="Living" amount={82.50} type="out" />
                <RecentActivityItem title="Salary" category="Income" amount={2450} type="in" />
                <RecentActivityItem title="Coffee" category="Food" amount={4.75} type="out" />
                <RecentActivityItem title="Electric Bill" category="Utilities" amount={120} type="out" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <StatCard label="Balance" value="$4,320" delta="+4.2%" positive />
            <StatCard label="Monthly Spend" value="$1,580" delta="-2.1%" />
            <StatCard label="Savings" value="$12,450" delta="+1.6%" positive />
          </div>
        </div>
      )}

      {active === 'budget' && (
        <div id="budget" className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Housing', spent: 980, limit: 1200 },
            { name: 'Food', spent: 320, limit: 500 },
            { name: 'Transport', spent: 120, limit: 200 },
            { name: 'Entertainment', spent: 90, limit: 250 },
            { name: 'Health', spent: 60, limit: 150 },
            { name: 'Misc', spent: 45, limit: 100 },
          ].map((b) => {
            const pct = Math.min(100, Math.round((b.spent / b.limit) * 100));
            return (
              <div key={b.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-600">{b.name}</div>
                  <div className="text-xs text-slate-500">Limit ${b.limit}</div>
                </div>
                <div className="mt-3 text-2xl font-semibold text-slate-900">${b.spent}
                  <span className="ml-2 text-sm font-normal text-slate-500">spent</span>
                </div>
                <div className="mt-3"><ProgressBar value={pct} /></div>
                <div className="mt-2 text-xs text-slate-500">{pct}% of budget</div>
              </div>
            );
          })}
        </div>
      )}

      {active === 'reports' && (
        <div id="reports" className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-slate-900 font-semibold">Spending Overview</h3>
            <div className="mt-6 grid grid-cols-12 gap-2 items-end h-48">
              {[35, 48, 30, 60, 42, 55, 38, 62, 50, 45, 58, 40].map((h, i) => (
                <div key={i} className="col-span-1">
                  <div className="mx-auto w-4 rounded-full bg-gradient-to-t from-violet-500 via-fuchsia-500 to-cyan-400" style={{ height: `${h * 2}px` }} />
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-slate-500">Monthly expenses (Jan - Dec)</div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-slate-900 font-semibold">Category Split</h4>
              <div className="mt-4 space-y-3">
                {[
                  ['Living', 42],
                  ['Food', 20],
                  ['Transport', 12],
                  ['Leisure', 16],
                  ['Health', 10],
                ].map(([label, v]) => (
                  <div key={label} className="grid grid-cols-3 items-center gap-3">
                    <div className="text-sm text-slate-700">{label}</div>
                    <div className="col-span-2"><ProgressBar value={v} /></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-slate-900 font-semibold">Insights</h4>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 space-y-2">
                <li>You're under budget in Food by $180 this month.</li>
                <li>Transport costs decreased 12% vs last month.</li>
                <li>Consider moving surplus to Savings.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {active === 'profile' && (
        <div id="profile" className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400" />
              <div>
                <div className="text-slate-900 font-semibold">Alex Morgan</div>
                <div className="text-slate-500 text-sm">Premium Member</div>
              </div>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <StatCard label="Net Worth" value="$28,400" delta="+3.1%" positive />
              <StatCard label="Goals Met" value="7/10" delta="+1" positive />
              <StatCard label="Risk Score" value="Low" delta="Stable" positive />
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-slate-900 font-semibold">Preferences</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between"><span>Dark Mode</span><span className="text-slate-400">System</span></div>
              <div className="flex items-center justify-between"><span>Currency</span><span className="text-slate-400">USD ($)</span></div>
              <div className="flex items-center justify-between"><span>Notifications</span><span className="text-slate-400">Enabled</span></div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
